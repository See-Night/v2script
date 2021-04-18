"use strict";
/**
 * V2Ray 内建了一个简单的路由功能
 * 可以将入站数据按需求由不同的出站连接发出，以达到按需代理的目的
 * 这一功能的常见用法是分流国内外流量
 * V2Ray 可以通过内部机制判断不同地区的流量
 * 然后将它们发送到不同的出站代理。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = exports.ruleObject = void 0;
var ruleObject = /** @class */ (function () {
    /**
     *
     * @param domain 一个数组，数组每一项是一个域名的匹配
     * @param ip 一个数组，数组内每一个元素代表一个 IP 范围。当某一元素匹配目标 IP 时，此规则生效
     * @param inboundTag 一个数组，数组内每一个元素是一个标识。当某一元素匹配入站协议的标识时，此规则生效。
     * @param outboundTag 对应一个额外出站连接配置的标识。
     * @param port 端口范围
     * @param protocol 一个数组，数组内每一个元素表示一种协议。当某一个协议匹配当前连接的流量时，此规则生效。
     * @param network 当连接方式是指定的方式时，此规则生效
     * @param source 一个数组，数组内每一个元素是一个 IP 或 CIDR。当某一元素匹配来源 IP 时，此规则生效
     *
     */
    function ruleObject(domain, ip, inboundTag, outboundTag, port, protocol, network, source) {
        if (domain === void 0) { domain = null; }
        if (ip === void 0) { ip = null; }
        if (inboundTag === void 0) { inboundTag = null; }
        if (outboundTag === void 0) { outboundTag = null; }
        if (port === void 0) { port = null; }
        this.type = "field";
        this.domain = [];
        this.ip = null;
        this.inboundTag = null;
        this.outboundTag = null;
        for (var i in domain) {
            this.domain.push(domain[i]);
        }
        if (ip) {
            this.ip = [];
            for (var i in ip) {
                this.ip.push(ip[i]);
            }
        }
        if (inboundTag) {
            this.inboundTag = [];
            for (var i in inboundTag) {
                this.inboundTag.push(inboundTag[i]);
            }
        }
        this.outboundTag = outboundTag;
        this.port = port;
        if (protocol)
            this['protocol'] = protocol;
        if (network)
            this['network'] = network;
        if (source)
            this['source'] = source;
    }
    return ruleObject;
}());
exports.ruleObject = ruleObject;
var routing = /** @class */ (function () {
    /**
     *
     * @param domainStrategy 域名解析策略，根据不同的设置使用不同的策略
     *
     */
    function routing(domainStrategy) {
        this.domainStrategy = "Asls";
        this.rules = [];
        if (domainStrategy)
            this.domainStrategy = domainStrategy;
    }
    /**
     *
     * @param rule 规则
     * @returns void
     *
     */
    routing.prototype.addRules = function (rule) {
        this.rules.push(rule);
    };
    return routing;
}());
exports.routing = routing;
//# sourceMappingURL=routing.js.map