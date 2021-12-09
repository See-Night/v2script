"use strict";
/**
 * Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreedomOutboundObject = void 0;
var FreedomOutboundObject = /** @class */ (function () {
    /**
     * FreedomOutboundObject
     * @param redirect Freedom 会强制将所有数据发送到指定地址
     * @param userLevel 用户等级
     */
    function FreedomOutboundObject(redirect, userLevel) {
        this.domainStrategy = "AsIs" /* AsIs */;
        this.redirect = redirect;
        this.userLevel = userLevel || this.userLevel;
    }
    return FreedomOutboundObject;
}());
exports.FreedomOutboundObject = FreedomOutboundObject;
//# sourceMappingURL=freedom.js.map