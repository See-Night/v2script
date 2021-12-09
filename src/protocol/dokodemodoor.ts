/**
 * Dokodemo door（任意门）是一个入站数据协议
 * 它可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果
 */

const enum DOKODEMODOOR_NETWORK {
    tcp = "tcp",
    udp = "udp",
    tcp_udp = "tcp,udp"
}

class DokodemodoorInboundObject {
    address: string;
    port: number;
    network: DOKODEMODOOR_NETWORK = DOKODEMODOOR_NETWORK.tcp;
    timeout: number = 300;
    followRedirect: boolean = false;
    userLevel: number = 0;

    /**
     * DokodemodoorInboundObject
     * @param address 将流量转发到此地址
     * @param port 将流量转发到目标地址的指定端口
     * @param userLevel 用户等级(可选)
     */
    constructor(address: string, port: number) {
        this.address = address;
        this.port = port;
    }
}

export { DOKODEMODOOR_NETWORK, DokodemodoorInboundObject };