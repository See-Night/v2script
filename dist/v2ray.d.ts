import { Log, dns, routing, inbound, outbound } from './structure';
export declare class v2ray {
    private log;
    private dns;
    private routing;
    private inbounds;
    private outbounds;
    private policy;
    private stats;
    private api;
    constructor();
    Log(a: string, e: string, l?: string): Log;
    Dns(servers?: string[], hosts?: object, clientIp?: string, tag?: string): dns;
    Routing(domainStrategy?: string): routing;
    Inbound(inbound?: inbound): inbound[];
    addInbound(inbound: inbound): void;
    delInbound(tag: string): void;
    Outbound(outbound?: outbound): outbound[];
    addOutbound(outbound: outbound): void;
    delOutbound(tag: string): void;
}
