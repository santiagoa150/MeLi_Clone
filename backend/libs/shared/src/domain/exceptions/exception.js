"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
const common_1 = require("@nestjs/common");
class Exception extends common_1.HttpException {
    message;
    constructor(message, status) {
        super({ message }, status);
        this.message = message;
    }
}
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map