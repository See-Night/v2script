"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowsocksServerObject = exports.ShadowsocksOutboundObject = exports.ShadowsocksInboundObject = void 0;
/** Shadowsocks 入站配置 */
var ShadowsocksInboundObject = /** @class */ (function () {
    /**
     * ShadowsocksInboundObject
     * @param email 邮件地址
     * @param password 密码
     * @param method 加密方式
     */
    function ShadowsocksInboundObject(email, password, method) {
        /** 用户等级 */
        this.level = 0;
        /** 可接收的网络连接类型 */
        this.network = "tcp" /* tcp */;
        this.email = email;
        this.password = password;
        this.method = method;
    }
    return ShadowsocksInboundObject;
}());
exports.ShadowsocksInboundObject = ShadowsocksInboundObject;
/** Shadowsocks 服务器配置 */
var ShadowsocksServerObject = /** @class */ (function () {
    /**
     * ShadowsocksServerObject
     * @param email 邮件地址
     * @param address Shadowsocks 服务器地址，支持 IPv4、IPv6 和域名
     * @param port Shadowsocks 服务器端口
     * @param password 密码
     * @param method 加密方式
     */
    function ShadowsocksServerObject(email, address, port, password, method) {
        /** 用户等级 */
        this.level = 0;
        this.email = email;
        this.address = address;
        this.port = port;
        this.method = method;
        this.password = password;
    }
    return ShadowsocksServerObject;
}());
exports.ShadowsocksServerObject = ShadowsocksServerObject;
/** Shadowsocks 出站配置 */
var ShadowsocksOutboundObject = /** @class */ (function () {
    /**
     * ShadowsocksOutboundObject
     * @param servers Shadowsocks服务
     */
    function ShadowsocksOutboundObject(servers) {
        if (servers instanceof ShadowsocksServerObject)
            servers = [servers];
        this.servers = servers;
    }
    return ShadowsocksOutboundObject;
}());
exports.ShadowsocksOutboundObject = ShadowsocksOutboundObject;
//# sourceMappingURL=shadowsocks.js.map