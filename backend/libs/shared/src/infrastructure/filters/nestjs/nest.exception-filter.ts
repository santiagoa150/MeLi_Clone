import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Exception } from '@shared/domain/exceptions/exception';
import { ExceptionResponse } from '@shared/infrastructure/filters/nestjs/exception.response';
import { Response } from 'express';

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
        let toParse: Array<string> | string | null = null;
        if (typeof exception === 'object' && exception !== null) {
            if ('message' in exception) {
                toParse = Array.isArray(exception.message) ? exception.message : String(exception.message);
            } else if ('response' in exception) {
                if (
                    typeof exception.response === 'object' &&
                    exception.response !== null &&
                    'message' in exception.response
                ) {
                    toParse = Array.isArray(exception.response.message)
                        ? exception.response.message
                        : String(exception.response.message);
                } else {
                    toParse = Array.isArray(exception.response) ? exception.response : String(exception.response);
                }
            }
        }

        if (Array.isArray(toParse)) {
            return toParse?.join(', ');
        }

        if (typeof exception === 'string') {
            return exception;
        }

        return '';
    }

    /**
     * Handles exceptions thrown in the application, and formats the response to be sent to the client.
     * @param exception - The exception object that was thrown.
     * @param host - The arguments host that provides access to the request and response objects.
     */
    catch(exception: Error, host: ArgumentsHost) {
        this._logger.error(JSON.stringify(exception), NestExceptionFilter.name);
        const response = new ExceptionResponse();
        response.timestamp = new Date().toISOString();
        if (exception instanceof Exception) {
            response.message = exception.message;
            response.statusCode = exception.getStatus();
        } else if (exception instanceof HttpException) {
            response.message = NestExceptionFilter.getMessageFromException(exception);
            response.statusCode = exception.getStatus();
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
            default: {
                this._logger.warn(`Exception filter does not support this type of request: ${host.getType()}`);
            }
        }
    }
}
