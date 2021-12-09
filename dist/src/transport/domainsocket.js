"use strict";
/**
 * 当前连接的 Domain socket 配置，仅当此连接使用 Domain socket 时有效
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainSocketObject = void 0;
var DomainSocketObject = /** @class */ (function () {
    /**
     * DomainSocketObject
     * @param path 一个合法的文件路径
     */
    function DomainSocketObject(path) {
        this.abstract = false;
        this.padding = false;
        this.path = path;
    }
    return DomainSocketObject;
}());
exports.DomainSocketObject = DomainSocketObject;
//# sourceMappingURL=domainsocket.js.map