"use strict";
/**
 * 当前连接的 HTTP/2 配置，仅当此连接使用 HTTP/2 时有效
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpObject = void 0;
var HttpObject = /** @class */ (function () {
    function HttpObject() {
        this.host = [];
        this.path = "/";
        this.method = "PUT" /* PUT */;
        this.headers = {};
    }
    return HttpObject;
}());
exports.HttpObject = HttpObject;
//# sourceMappingURL=http.js.map