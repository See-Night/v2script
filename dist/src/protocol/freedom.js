"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreedomOutboundObject = void 0;
/**
 * Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据
 */
var FreedomOutboundObject = /** @class */ (function () {
    /**
     * FreedomOutboundObject
     * @param redirect Freedom 会强制将所有数据发送到指定地址
     * @param userLevel 用户等级
     */
    function FreedomOutboundObject(redirect, userLevel) {
        /**
         * 在目标地址为域名时，Freedom 可以直接向此域名发出连接（"AsIs"），或者将域名解析为 IP 之后再建立连接（"UseIP"、"UseIPv4" 和 "UseIPv6"）
         *
         * 解析 IP 的步骤会使用 V2Ray 内建的 DNS
         */
        this.domainStrategy = "AsIs" /* AsIs */;
        this.redirect = redirect;
        this.userLevel = userLevel || this.userLevel;
    }
    return FreedomOutboundObject;
}());
exports.FreedomOutboundObject = FreedomOutboundObject;
//# sourceMappingURL=freedom.js.map