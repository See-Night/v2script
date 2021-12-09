"use strict";
/**
 * HTTP 的配置分为两部分，InboundObject 和 OutboundObject，分别对应入站和出站协议配置中的 settings 项
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPUserObject = exports.HTTPOutboundObject = exports.HTTPInboundObject = void 0;
var HTTPInboundObject = /** @class */ (function () {
    function HTTPInboundObject() {
        this.timeout = 300;
        this.accounts = [];
        this.allowTransparent = false;
        this.userLevel = 0;
    }
    return HTTPInboundObject;
}());
exports.HTTPInboundObject = HTTPInboundObject;
var HTTPOutboundObject = /** @class */ (function () {
    function HTTPOutboundObject() {
        this.servers = [];
    }
    return HTTPOutboundObject;
}());
exports.HTTPOutboundObject = HTTPOutboundObject;
var HTTPUserObject = /** @class */ (function () {
    /**
     * UserObject
     * @param user 用户名
     * @param pass 密码
     */
    function HTTPUserObject(user, pass) {
        this.userLevel = 0;
        this.user = user;
        this.pass = pass;
    }
    return HTTPUserObject;
}());
exports.HTTPUserObject = HTTPUserObject;
//# sourceMappingURL=http.js.map