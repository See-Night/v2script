"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsOutboundObject = void 0;
/**
 * DNS 是一个出站协议，主要用于拦截和转发 DNS 查询
 *
 * 此出站协议只能接收 DNS 流量（包含基于 UDP 和 TCP 协议的查询），其它类型的流量会导致错误
 *
 * 在处理 DNS 查询时，此出站协议会将 IP 查询（即 A 和 AAAA）转发给内置的 DNS 服务器，
 * 其它类型的查询流量将被转发至它们原本的目标地址
 */
var DnsOutboundObject = /** @class */ (function () {
    /**
     * DnsOutboundObject
     * @param network 修改 DNS 流量的传输层协议
     * @param address 修改 DNS 服务器地址
     * @param port 修改 DNS 服务器端口
     */
    function DnsOutboundObject(network, address, port) {
        this.network = network;
        this.address = address;
        this.port = port;
    }
    return DnsOutboundObject;
}());
exports.DnsOutboundObject = DnsOutboundObject;
//# sourceMappingURL=dns.js.map