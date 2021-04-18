"use strict";
/**
 * HTTP 的配置分为两部分
 * InboundConfigurationObject和OutboundConfigurationObject，
 * 分别对应入站和出站协议配置中的settings项。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.http_outbound = exports.http_inbound = void 0;
var http_inbound = /** @class */ (function () {
    /**
     *
     * @param u 用户名
     * @param p 密码
     * @param timeout 从客户端读取数据的超时设置（秒）
     * @param allowTransparent 当为true时，会转发所有 HTTP 请求，而非只是代理请求。若配置不当，开启此选项会导致死循环
     *
     */
    function http_inbound(u, p, timeout, allowTransparent) {
        if (u === void 0) { u = ''; }
        if (p === void 0) { p = ''; }
        if (timeout === void 0) { timeout = 300; }
        if (allowTransparent === void 0) { allowTransparent = false; }
        /**
         * 应该注意，虽然http inbound可以提供公共服务
         * 但http协议没有对传输加密，不适宜经公网中传输
         * 更容易成为被人用作攻击的肉鸡
         * http inbound更有意义的用法是在局域网或本机环境下监听
         * 为其他程序提供本地服务
         *
         * 一般自用本地监听建议不要设置http协议的settings
         */
        this.timeout = 300;
        this.accounts = [];
        this.allowTransparent = false;
        this.accounts.push({ user: u, pass: p });
        this.timeout = timeout;
        this.allowTransparent = allowTransparent;
    }
    return http_inbound;
}());
exports.http_inbound = http_inbound;
var http_outbound = /** @class */ (function () {
    /**
     *
     * @param address HTTP代理服务器地址
     * @param port HTTP代理服务器端口
     * @param user 账号
     * @param pass 密码
     *
     */
    function http_outbound(address, port, user, pass) {
        this.servers = [];
        this.servers.push({
            address: address,
            port: port,
            users: [{
                    user: user,
                    pass: pass
                }]
        });
    }
    return http_outbound;
}());
exports.http_outbound = http_outbound;
//# sourceMappingURL=http.js.map