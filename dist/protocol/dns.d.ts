/**
 * DNS 是一个出站协议，主要用于拦截和转发 DNS 查询
 * 此出站协议只能接收 DNS 流量（包含基于 UDP 和 TCP 协议的查询），其它类型的流量会导致错误。
 * 在处理 DNS 查询时，此出站协议会将 IP 查询（即 A 和 AAAA）转发给内置的 DNS 服务器。
 * 其它类型的查询流量将被转发至它们原本的目标地址。
 * DNS 出站协议在 V2Ray 4.15 中引入。
 */
export declare class dns_outbound {
    network: string;
    address: string;
    port: number;
    /**
     *
     * @param address 修改DNS服务器地址
     * @param port 修改DNS服务器端口
     * @param network 修改DNS流量的传输层协议。tcp/udp
     *
     */
    constructor(address: string, port: number, network?: string);
}
