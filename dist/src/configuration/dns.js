"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsObject = exports.DnsServerObject = void 0;
/**
 * V2Ray 内建了一个 DNS 组件
 *
 * 其主要用途为：对目标地址（域名）进行 DNS 解析，同时为 IP 路由规则匹配提供判断依据
 */
var DnsObject = /** @class */ (function () {
    /**
     * DnsObject
     * @param host 域名与地址的映射
     * @param servers DNS 服务器列表
     * @param clientIp 当前网络的 IP 地址
     */
    function DnsObject(host, servers, clientIp) {
        /**
         * DNS 查询所使用的网络类型。默认值为 UseIP，即 DNS 同时查询域名的 A 和 AAAA 记录
         *
         * UseIPv4 和 UseIPv6 分别为只查询 A 记录、只查询 AAAA 记录
         */
        this.queryStrategy = "UseIP" /* UseIP */;
        /**
         * 禁用 DNS 缓存。默认为 `false`，即为不禁用
         *
         * 此属性为私有属性，不允许直接进行调用，如需修改属性值请通过 `cache()` 方法进行修改
         */
        this.disableCache = false;
        /**
         * 禁用 DNS 回退（fallback）查询。默认为 `false`，即为不禁用
         *
         * 此属性为私有属性，不允许直接进行调用，如需修改属性值请通过 `fallback()` 方法进行修改
         */
        this.disableFallback = false;
        /**
         *  禁用在 DNS 服务器的优先匹配域名列表命中时执行 DNS 回退（fallback）查询
         *
         * 此属性为私有属性，不允许直接进行调用，如需修改属性值请通过 `fallbackIfMatch()` 方法进行修改
         */
        this.disableFallbackIfMatch = false;
        /**
         * 由此 DNS 发出的查询流量，除 localhost 和 DOHL_ 模式外，都会带有此标识，可在路由使用 inboundTag 进行匹配
         *
         * 其默认值为 `"dns"`
         */
        this.tag = "dns";
        this.hosts = Object.fromEntries(host.entries());
        this.servers = servers;
        this.clientIp = clientIp;
    }
    /**
     * 设置DNS缓存是否开启
     * @param status DNS缓存状态，其值为 `disable` | `enable`
     * @returns 当前对象
     */
    DnsObject.prototype.cache = function (status) {
        if (status === "disable")
            this.disableCache = true;
        else if (status === "enable")
            this.disableCache = false;
        return this;
    };
    /**
     * 设置DNS回退查询是否开启
     * @param status DNS回退查询状态，其值为 `disable` | `enable`
     * @returns 当前对象
     */
    DnsObject.prototype.fallback = function (status) {
        if (status === "disable")
            this.disableFallback = true;
        else if (status === "enable")
            this.disableFallback = false;
        return this;
    };
    /**
     * 设置在DNS服务器的优先匹配域名列表命中时执行DNS回退查询
     * @param status 回退查询状态，其值为 `disable` | `enable`
     * @returns 当前对象
     */
    DnsObject.prototype.fallbackIfMatch = function (status) {
        if (status === "disable")
            this.disableFallbackIfMatch = true;
        else if (status === "enable")
            this.disableFallbackIfMatch = false;
        return this;
    };
    return DnsObject;
}());
exports.DnsObject = DnsObject;
/**
 * DNS 服务器对象
 */
var DnsServerObject = /** @class */ (function () {
    /**
     * DnsServerObject
     * @param address DNS 服务器地址
     * @param port DNS 服务器端口
     * @param clientIp 当前网络的 IP 地址
     */
    function DnsServerObject(address, port, clientIp) {
        /**
         * 在 DNS 回退（fallback）查询过程中，是否跳过本 DNS
         *
         * 默认为 false，即为不跳过
         */
        this.skipFallback = false;
        /**
         * 一个域名列表，此列表包含的域名，将优先使用此服务器进行查询
         *
         * 域名格式和路由配置中相同
         */
        this.domains = [];
        /**
         * 一个 IP 范围列表，格式和路由配置中相同
         *
         * 当配置此项时，V2Ray DNS 会对返回的 IP 进行校验，只返回满足 expectIPs 列表的地址。如果未配置此项，会原样返回 IP 地址
         */
        this.expectIPs = [];
        this.address = address;
        this.port = port;
        this.clientIp = clientIp;
    }
    return DnsServerObject;
}());
exports.DnsServerObject = DnsServerObject;
//# sourceMappingURL=dns.js.map