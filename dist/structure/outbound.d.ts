/**
 * 出站连接用于向远程网站或下一级代理服务器发送数据
 */
import { blackhole_outbound } from '../protocol/blackhole';
import { dns_outbound } from '../protocol/dns';
import { freedom_outbound } from '../protocol/freedom';
import { http_outbound } from '../protocol/http';
import { mtproto_outbound } from '../protocol/mtproto';
import { shadowsocks_outbound } from '../protocol/shadowsocks';
import { socks_outbound } from '../protocol/socks';
import { vmess_outbound } from '../protocol/vmess';
import { streamSettings } from './streamSettings';
export declare class outbound {
    protocol: string;
    settings: blackhole_outbound | dns_outbound | freedom_outbound | http_outbound | mtproto_outbound | shadowsocks_outbound | socks_outbound | vmess_outbound;
    streamSettings: streamSettings;
    tag: string;
    mux: {
        enabled: boolean;
        concurrency: number;
    };
    /**
     *
     * @param tag 标识
     * @param protocol 连接协议
     * @param settings 设置参数[根据不同的传输协议其内部参数各有不同]
     * @param streamSettings 流参数
     * @param mux Mux 功能是在一条 TCP 连接上分发多个 TCP 连接的数据（带宽换稳定性）
     *
     */
    constructor(tag: string, protocol: string, settings: blackhole_outbound | dns_outbound | freedom_outbound | http_outbound | mtproto_outbound | shadowsocks_outbound | socks_outbound | vmess_outbound, streamSettings: streamSettings, mux?: {
        enabled: boolean;
        concurrency: number;
    });
}
