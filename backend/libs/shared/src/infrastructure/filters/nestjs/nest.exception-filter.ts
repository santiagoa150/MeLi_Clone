import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Exception } from '@shared/domain/exceptions/exception';
import { ExceptionResponse } from '@shared/infrastructure/filters/nestjs/exception.response';
import { Response } from 'express';
import { throwError } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

/**
 * NestExceptionFilter is a global exception filter that handles exceptions thrown in the application.
 * It formats the exception response and sends it to the client.
 */
@Catch()
export class NestExceptionFilter implements ExceptionFilter {
    private readonly _logger = new Logger(NestExceptionFilter.name);

    /**
     * Extracts the message from an exception object.
     * @param exception - The exception object from which to extract the message.
     */
    public static getMessageFromException(exception: unknown): string {
        let data: Array<string> | string | null = null;
        switch (typeof exception) {
            case 'object':
                if (exception) {
                    if ('response' in exception) {
                        if (
                            typeof exception.response === 'object' &&
                            exception.response &&
                            'message' in exception.response
                        ) {
                            data = Array.isArray(exception.response.message)
                                ? exception.response.message
                                : String(exception.response.message);
                        } else {
                            data = Array.isArray(exception.response) ? exception.response : String(exception.response);
                        }
                    } else if ('message' in exception) {
                        data = Array.isArray(exception.message) ? exception.message : String(exception.message);
                    } else {
                        data = Array.isArray(exception) ? exception : null;
                    }
                }
                break;
            case 'string':
                return exception;
        }
        if (data && Array.isArray(data)) {
            return data.join(', ');
        } else if (typeof data === 'string') {
            return data;
        }
        try {
            return JSON.stringify(exception);
        } catch {
            return '';
        }
    }

    /**
     * Handles exceptions thrown in the application, and formats the response to be sent to the client.
     * @param exception - The exception object that was thrown.
     * @param host - The arguments host that provides access to the request and response objects.
     */
    catch(exception: Error, host: ArgumentsHost) {
        this._logger.error(JSON.stringify(exception));
        let response = new ExceptionResponse();
        response.timestamp = new Date().toISOString();
        if (exception instanceof Exception) {
            response.message = exception.message;
            response.statusCode = exception.getStatus();
        } else if (exception instanceof HttpException) {
            response.message = NestExceptionFilter.getMessageFromException(exception);
            response.statusCode = exception.getStatus();
        } else if (
            'details' in exception &&
            typeof exception.details === 'string' &&
            new RegExp('"protocolType":\\s*"grpc"', 'g').test(exception.details)
        ) {
            response = (JSON.parse(exception.details) as { response: ExceptionResponse }).response;
        } else {
            response.message = NestExceptionFilter.getMessageFromException(exception);
            response.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        switch (host.getType()) {
            case 'http': {
                const ctx = host.switchToHttp();
                const res = ctx.getResponse<Response>();
                res.status(response.statusCode).json(response);
                break;
            }
            case 'rpc': {
                const ctx = host.switchToRpc().getContext<Metadata>();
                const userAgent = ctx.get('user-agent');

                const userAgentStr = userAgent[0]?.toString();

                if (userAgentStr?.toLowerCase().includes('grpc')) {
                    return throwError(() => ({
                        code: 13,
                        details: JSON.stringify({
                            response,
                            protocolType: 'grpc',
                        }),
                    }));
                }

                return throwError(() => response);
            }

            default: {
                this._logger.warn(`Exception filter does not support this type of request: ${host.getType()}`);
            }
        }
    }
}
