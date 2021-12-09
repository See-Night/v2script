/** 可接收的网络协议类型 */
declare const enum DOKODEMODOOR_NETWORK {
    tcp = "tcp",
    udp = "udp",
    tcp_udp = "tcp,udp"
}
/**
 * Dokodemo door（任意门）是一个入站数据协议
 * 它可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果
 */
declare class DokodemodoorInboundObject {
    /**
     * 将流量转发到此地址
     *
     * 可以是一个 IP 地址，形如 "1.2.3.4"，或者一个域名，形如 "v2ray.com"
     *
     * 当 followRedirect（见下文）为 true 时，address 可为空
     */
    address: string;
    /** 将流量转发到目标地址的指定端口，范围 [1, 65535]，数值类型 */
    port: number;
    /** 可接收的网络协议类型。比如当指定为 `tcp` 时，任意门仅会接收 TCP 流量 */
    network: DOKODEMODOOR_NETWORK;
    /** 入站数据的时间限制（秒），默认值为 300 */
    timeout: number;
    /**
     * 当值为 `true` 时，dokodemo-door 会识别出由 iptables 转发而来的数据，并转发到相应的目标地址。
     *
     * 详见[传输配置](https://www.v2fly.org/config/transport.html)
     */
    followRedirect: boolean;
    /**
     * 用户等级，所有连接都会使用这个用户等级
     */
    userLevel: number;
    /**
     * DokodemodoorInboundObject
     * @param address 将流量转发到此地址
     * @param port 将流量转发到目标地址的指定端口
     * @param userLevel 用户等级(可选)
     */
    constructor(address: string, port: number);
}
export { DOKODEMODOOR_NETWORK, DokodemodoorInboundObject };
