"use strict";
/**
 * 标准 Socks 协议实现
 * 兼容 Socks 4、Socks 4a 和 Socks 5
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.socks_outbound = exports.socks_inbound = void 0;
var common_1 = require("../common");
var socks_inbound = /** @class */ (function () {
    /**
     *
     * @param auth Socks 协议的认证方式: noauth匿名认证/password密码认证
     * @param accounts 账户信息，仅当auth为password时有效
     * @param udp 是否开启 UDP 协议的支持。默认值为 false
     * @param ip 当开启 UDP 时，V2Ray 需要知道本机的 IP 地址。默认值为"127.0.0.1"
     *
     */
    function socks_inbound(auth, accounts, udp, ip) {
        if (auth === void 0) { auth = common_1.AUTH.noauth; }
        if (accounts === void 0) { accounts = null; }
        if (udp === void 0) { udp = false; }
        if (ip === void 0) { ip = null; }
        this.auth = common_1.AUTH.noauth;
        this.udp = false;
        this.ip = null;
        this.auth = auth;
        if (auth === 'password') {
            this['accounts'] = [];
            this['accounts'].push({ user: accounts.user, password: accounts.password });
        }
        this.udp = udp;
        this.ip = ip;
    }
    return socks_inbound;
}());
exports.socks_inbound = socks_inbound;
var socks_outbound = /** @class */ (function () {
    /**
     *
     * @param address 服务器地址。
     * @param port 服务器端口
     * @param users 用户列表，其中每一项一个用户配置。
     *
     */
    function socks_outbound(address, port, users) {
        if (address === void 0) { address = "127.0.0.1"; }
        this.servers = [{
                address: '127.0.0.1',
                port: 10080,
                users: []
            }];
        this.servers[0].address = address;
        this.servers[0].port = port;
        this.servers[0].users.push(users);
    }
    return socks_outbound;
}());
exports.socks_outbound = socks_outbound;
//# sourceMappingURL=socks.js.map