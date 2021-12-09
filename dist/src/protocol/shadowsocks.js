"use strict";
/**
 * Shadowsocks (opens new window)协议，包含入站和出站两部分，兼容大部分其它版本的实现
 * 与官方版本的兼容性：
 * 支持 TCP 和 UDP 数据包转发，其中 UDP 可选择性关闭
 * 加密方式：
 * - AES-256-GCM
 * - AES-128-GCM
 * - ChaCha20-Poly1305 或称 ChaCha20-IETF-Poly1305
 * - none 或称 plain（V2Ray 4.27.0+）
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowsocksServerObject = exports.ShadowsocksOutboundObject = exports.ShadowsocksInboundObject = void 0;
var ShadowsocksInboundObject = /** @class */ (function () {
    /**
     * ShadowsocksInboundObject
     * @param email 邮件地址
     * @param password 密码
     * @param method 加密方式
     */
    function ShadowsocksInboundObject(email, password, method) {
        this.level = 0;
        this.network = "tcp" /* tcp */;
        this.email = email;
        this.password = password;
        this.method = method;
    }
    return ShadowsocksInboundObject;
}());
exports.ShadowsocksInboundObject = ShadowsocksInboundObject;
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
var ShadowsocksOutboundObject = /** @class */ (function () {
    function ShadowsocksOutboundObject() {
        this.servers = [];
    }
    return ShadowsocksOutboundObject;
}());
exports.ShadowsocksOutboundObject = ShadowsocksOutboundObject;
//# sourceMappingURL=shadowsocks.js.map