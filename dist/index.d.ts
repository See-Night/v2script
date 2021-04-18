import { v2ray } from './v2ray';
import * as common from './common';
import { dns, Log, inbound, outbound, routing, sniffing, streamSettings, ruleObject, tcpSettings, kcpSettings, wsSettings, httpSettings, dsSettings, quicSettings, tlsSettings } from './structure';
import { blackhole_outbound, dns_outbound, freedom_outbound, http_inbound, http_outbound, mtproto_inbound, mtproto_outbound, shadowsocks_inbound, shadowsocks_outbound, socks_inbound, socks_outbound, vmess_inbound, vmess_outbound } from './protocol';
declare class sub {
    ps: string;
    ip: string;
    port: string;
    id: string;
    aid: number;
    net: string;
    type: string;
    host: string;
    path: string;
    tls: string;
    constructor(ps: any, ip: any, port: any, id: any, aid: number, net: any, type?: string, host?: string, path?: string, tls?: string);
}
export declare class v2sub {
    subs: sub[];
    url: string;
    /**
     *
     * @param url 订阅地址
     */
    constructor(url: string);
    toConfig(ps: string, path: string): void;
}
export { v2ray, common, dns, Log, inbound, outbound, routing, sniffing, streamSettings, ruleObject, tcpSettings, kcpSettings, wsSettings, httpSettings, dsSettings, quicSettings, tlsSettings, blackhole_outbound, dns_outbound, freedom_outbound, http_inbound, http_outbound, mtproto_inbound, mtproto_outbound, shadowsocks_inbound, shadowsocks_outbound, socks_inbound, socks_outbound, vmess_inbound, vmess_outbound };
