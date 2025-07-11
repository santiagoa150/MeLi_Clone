"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const exception_1 = require("../../../domain/exceptions/exception");
const exception_response_1 = require("./exception.response");
let NestExceptionFilter = NestExceptionFilter_1 = class NestExceptionFilter {
    _logger = new common_1.Logger(NestExceptionFilter_1.name);
    static getMessageFromException(exception) {
        let toParse = null;
        if (typeof exception === 'object' && exception !== null) {
            if ('message' in exception) {
                toParse = Array.isArray(exception.message) ? exception.message : String(exception.message);
            }
            else if ('response' in exception) {
                if (typeof exception.response === 'object' &&
                    exception.response !== null &&
                    'message' in exception.response) {
                    toParse = Array.isArray(exception.response.message)
                        ? exception.response.message
                        : String(exception.response.message);
                }
                else {
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
    catch(exception, host) {
        this._logger.error(JSON.stringify(exception), NestExceptionFilter_1.name);
        const response = new exception_response_1.ExceptionResponse();
        response.timestamp = new Date().toISOString();
        if (exception instanceof exception_1.Exception) {
            response.message = exception.message;
            response.statusCode = exception.getStatus();
        }
        else if (exception instanceof common_1.HttpException) {
            response.message = NestExceptionFilter_1.getMessageFromException(exception);
            response.statusCode = exception.getStatus();
        }
        else {
            response.message = NestExceptionFilter_1.getMessageFromException(exception);
            response.statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        }
        switch (host.getType()) {
            case 'http': {
                const ctx = host.switchToHttp();
                const res = ctx.getResponse();
                res.status(response.statusCode).json(response);
                break;
            }
            default: {
                this._logger.warn(`Exception filter does not support this type of request: ${host.getType()}`);
            }
        }
    }
};
exports.NestExceptionFilter = NestExceptionFilter;
exports.NestExceptionFilter = NestExceptionFilter = NestExceptionFilter_1 = __decorate([
    (0, common_1.Catch)()
], NestExceptionFilter);
//# sourceMappingURL=nest.exception-filter.js.map