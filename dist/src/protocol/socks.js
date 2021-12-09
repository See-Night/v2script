"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocksUserObject = exports.SocksServerObject = exports.SocksInboundObject = exports.SocksOutboundObject = void 0;
var util_1 = require("../../util");
/** 用户配置 */
var SocksUserObject = /** @class */ (function () {
    /**
     * SocksUserObject
     * @param user 用户名
     * @param pass 密码
     */
    function SocksUserObject(user, pass) {
        /** 用户等级 */
        this.level = 0;
        this.user = user;
        this.pass = pass;
    }
    return SocksUserObject;
}());
exports.SocksUserObject = SocksUserObject;
/** Socks 服务器配置 */
var SocksServerObject = /** @class */ (function () {
    /**
     * ServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     */
    function SocksServerObject(address, port) {
        /** 用户列表 */
        this.users = [];
        this.address = address;
        this.port = port;
    }
    return SocksServerObject;
}());
exports.SocksServerObject = SocksServerObject;
/** Socks 出站配置 */
var SocksOutboundObject = /** @class */ (function () {
    /**
     * SocksOutbound
     * @param version Socks 协议版本
     */
    function SocksOutboundObject(version, servers) {
        this.version = version;
        if (servers instanceof SocksServerObject)
            servers = [servers];
        this.servers = servers;
    }
    return SocksOutboundObject;
}());
exports.SocksOutboundObject = SocksOutboundObject;
/** Socks 入站配置 */
var SocksInboundObject = /** @class */ (function () {
    /**
     * SocksInboundObject
     * @param auth 认证方法
     * @param account 用户列表
     */
    function SocksInboundObject(auth, account) {
        /** 认证方法 */
        this.auth = "noauth" /* noauth */;
        /**
         * 一个数组，数组中每个元素为一个用户帐号
         * 此选项仅当 auth 为 password 时有效。
         */
        this.accounts = null;
        /** 是否开启 UDP 协议的支持 */
        this.udp = false;
        /**
         * SOCKS5 通过 UDP ASSOCIATE 命令建立 UDP 会话。服务端在对客户端发来的该命令的回复中，指定客户端发包的目标地址
         *
         * v4.34.0+: 默认值为空，此时对于通过本地回环 IPv4/IPv6 连接的客户端，
         * 回复对应的回环 IPv4/IPv6 地址；对于非本机的客户端，回复当前入站的监听地址
         *
         * v4.33.0 及更早版本: 默认值 127.0.0.1。
         * 你可以通过配置此项使 V2Ray 固定回复你配置的地址。如果你不知道此项的作用，留空即可
         */
        this.ip = null;
        /** 用户等级 */
        this.userLevel = 0;
        this.auth = auth || this.auth;
        if (account instanceof util_1.AccountObject)
            account = [account];
        this.accounts = account || null;
    }
    return SocksInboundObject;
}());
exports.SocksInboundObject = SocksInboundObject;
//# sourceMappingURL=socks.js.map