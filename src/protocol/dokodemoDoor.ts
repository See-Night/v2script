/**
 * Dokodemo door（任意门）是一个入站数据协议
 * 它可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口
 * 从而达到端口映射的效果。
 */

import { NETWORK } from "../common";

export class dokodemoDoor_inbound {
    address: string;
    port: number;
    network: string = NETWORK.tcp;
    timeout: number = 300;
    followRedirect: boolean = false;

    /**
     * 
     * @param address 将流量转发到此地址
     * @param port 将流量转发到目标地址的指定端口
     * @param network 可接收的网络协议类型。tcp/upd/tcp,udp
     * @param timeout 入站数据的时间限制（秒）
     * @param followRedirect 当值为true时，dokodemo-door 会识别出由 iptables 转发而来的数据，并转发到相应的目标地址
     * 
     */
    constructor(address: string, port: number, network: string = NETWORK.tcp, timeout: number = 300, followRedirect: boolean = false) {
        this.address = address;
        this.port = port;
        this.network = network;
        this.timeout = timeout;
        this.followRedirect = followRedirect;
    }
}