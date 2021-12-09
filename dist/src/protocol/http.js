"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPServerObject = exports.HTTPUserObject = exports.HTTPOutboundObject = exports.HTTPInboundObject = void 0;
var lib_1 = require("../../lib");
/** HTTP 入站配置 */
var HTTPInboundObject = /** @class */ (function () {
    function HTTPInboundObject() {
        /** 从客户端读取数据的超时设置（秒），`0` 表示不限时 */
        this.timeout = 300;
        /**
         * 一个数组，数组中每个元素为一个用户帐号。默认值为空
         *
         * 当 accounts 非空时，HTTP 代理将对入站连接进行 `Basic Authentication` 验证
         */
        this.accounts = [];
        /** 当为 `true` 时，会转发所有 HTTP 请求，而非只是代理请求。若配置不当，开启此选项会导致死循环 */
        this.allowTransparent = false;
        /** 用户等级，所有连接使用这一等级 */
        this.userLevel = 0;
    }
    return HTTPInboundObject;
}());
exports.HTTPInboundObject = HTTPInboundObject;
/** HTTP 出站配置 */
var HTTPOutboundObject = /** @class */ (function () {
    /**
     * HTTPOutboundObject
     * @param servers HTTP 代理服务器配置
     */
    function HTTPOutboundObject(servers) {
        if (servers instanceof HTTPServerObject)
            servers = [servers];
        this.servers = servers;
    }
    return HTTPOutboundObject;
}());
exports.HTTPOutboundObject = HTTPOutboundObject;
/** HTTP 代理服务器配置 */
var HTTPServerObject = /** @class */ (function () {
    /**
     * HTTPServerObject
     * @param address HTTP 代理服务器地址
     * @param port HTTP 代理服务器端口
     * @param users 用户帐号
     */
    function HTTPServerObject(address, port, users) {
        /** 一个数组，数组中每个元素为一个用户帐号 */
        this.users = null;
        this.address = address;
        this.port = port;
        this.users = (users instanceof lib_1.AccountObject) ? [users] : users || null;
    }
    return HTTPServerObject;
}());
exports.HTTPServerObject = HTTPServerObject;
/** 用户帐号 */
var HTTPUserObject = /** @class */ (function () {
    /**
     * UserObject
     * @param user 用户名
     * @param pass 密码
     */
    function HTTPUserObject(user, pass) {
        /** 用户等级 */
        this.userLevel = 0;
        this.user = user;
        this.pass = pass;
    }
    return HTTPUserObject;
}());
exports.HTTPUserObject = HTTPUserObject;
//# sourceMappingURL=http.js.map