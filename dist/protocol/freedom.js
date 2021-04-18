"use strict";
/**
 * Freedom 是一个出站协议
 * 可以用来向任意网络发送（正常的） TCP 或 UDP 数据。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.freedom_outbound = void 0;
var common_1 = require("../common");
var freedom_outbound = /** @class */ (function () {
    /**
     *
     * @param redirect Freedom 会强制将所有数据发送到指定地址（而不是入站协议指定的地址）
     * @param domainStrategy 在目标地址为域名时，Freedom 可以直接向此域名发出连接（"AsIs"），或者将域名解析为 IP 之后再建立连接（"UseIP"、"UseIPv4"、"UseIPv6"）。
     *
     */
    function freedom_outbound(redirect, domainStrategy) {
        if (domainStrategy === void 0) { domainStrategy = common_1.DOMAINSTRATEGY.Asls; }
        this.domainStrategy = common_1.DOMAINSTRATEGY.Asls;
        this.redirect = redirect;
        this.domainStrategy = domainStrategy;
    }
    return freedom_outbound;
}());
exports.freedom_outbound = freedom_outbound;
//# sourceMappingURL=freedom.js.map