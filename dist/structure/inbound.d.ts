/**
 * 入站连接用于接收从客户端（浏览器或上一级代理服务器）发来的数据
 */
import { sniffing } from './sniffing';
import { streamSettings } from './streamSettings';
import { vmess_inbound } from '../protocol/vmess';
import { socks_inbound } from '../protocol/socks';
import { shadowsocks_inbound } from '../protocol/shadowsocks';
import { mtproto_inbound } from '../protocol/mtproto';
import { http_inbound } from '../protocol/http';
import { dokodemoDoor_inbound } from '../protocol/dokodemoDoor';
export declare class inbound {
    tag: string;
    port: number;
    listen: string;
    protocol: string;
    sniffing: sniffing;
    streamSettings: streamSettings;
    settings: vmess_inbound | socks_inbound | shadowsocks_inbound | mtproto_inbound | http_inbound | dokodemoDoor_inbound;
    /**
     *
     * @param port 端口
     * @param listen 监听地址
     * @param protocol 传输协议：vmess/socks/shadowsocks/mtproto/blackhole/dns/dokodemo-door/freedom/http
     * @param settings 设置参数[根据不同的传输协议其内部参数各有不同]
     * @param streamsettings 流参数
     * @param tag 标识
     *
     */
    constructor(tag: string, port: number, listen: string, protocol: string, settings: vmess_inbound | socks_inbound | shadowsocks_inbound | mtproto_inbound | http_inbound | dokodemoDoor_inbound, streamsettings?: streamSettings);
}
