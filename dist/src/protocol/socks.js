"use strict";
/**
 * 标准 Socks 协议实现
 * 兼容 Socks 4 (opens new window)、Socks 4a 和 Socks 5 (opens new window)
 * Socks 的配置分为两部分
 * InboundObject 和 OutboundObject，分别对应入站和出站协议配置中的 settings 项
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocksUserObject = exports.SocksServerObject = exports.SocksInboundObject = exports.SocksOutboundObject = void 0;
var SocksUserObject = /** @class */ (function () {
    /**
     * SocksUserObject
     * @param user 用户名
     * @param pass 密码
     */
    function SocksUserObject(user, pass) {
        this.level = 0;
        this.user = user;
        this.pass = pass;
    }
    return SocksUserObject;
}());
exports.SocksUserObject = SocksUserObject;
var SocksServerObject = /** @class */ (function () {
    /**
     * ServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     */
    function SocksServerObject(address, port) {
        this.users = [];
        this.address = address;
        this.port = port;
    }
    return SocksServerObject;
}());
exports.SocksServerObject = SocksServerObject;
var SocksOutboundObject = /** @class */ (function () {
    /**
     * SocksOutbound
     * @param version Socks 协议版本
     */
    function SocksOutboundObject(version) {
        this.servers = [];
        this.version = version;
    }
    return SocksOutboundObject;
}());
exports.SocksOutboundObject = SocksOutboundObject;
var SocksInboundObject = /** @class */ (function () {
    /**
     * SocksInboundObject
     * @param ip SOCKS5 通过 UDP ASSOCIATE 命令建立 UDP 会话。服务端在对客户端发来的该命令的回复中，指定客户端发包的目标地址
     */
    function SocksInboundObject(ip) {
        this.auth = "noauth" /* noauth */;
        this.accounts = [];
        this.udp = false;
        this.ip = null;
        this.userLevel = 0;
        this.ip = ip;
    }
    return SocksInboundObject;
}());
exports.SocksInboundObject = SocksInboundObject;
//# sourceMappingURL=socks.js.map