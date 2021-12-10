import { 
    ApiObject, ApiService,
    BrowserForwarderObject, 
    DnsServerObject, QUERY_STRATEGY, DnsObject,
    FakeDnsObject, 
    DESTOVERRIDE, SniffingObject, INBOUND_STRATEGY, AllocateObject, InboundObject,
    LOGLEVEL, LogObject,
    ObservatoryObject, 
    OutboundObject, ProxySettingsObject, MuxObject,
    PolicyObject, LevelPolicyObject, SystemPolicyObject,
    ReverseObject, BridgeObject, PortalObject,
    RoutingObject, DOMAIN_MATCHER, DOMAIN_STRATEGY, RULE_NETWORK, RULE_PROTOCOL, RuleObject, BALANCER_STRATEGY, BalancerObject,
    StatsObject, 
    TransportObject,

    BLACKHOLE_RESPONSE, BlackholeOutboundObject,
    DNS_NETWORK, DnsOutboundObject,
    DOKODEMODOOR_NETWORK, DokodemodoorInboundObject,
    FREEDOM_STRATEGY, FreedomOutboundObject,
    HTTPInboundObject, HTTPOutboundObject, HTTPUserObject, HTTPServerObject,
    LoopbackOutboundObject,
    SHADOWSOCKS_METHOD, SHADOWSOCKS_NETWORK, ShadowsocksInboundObject, ShadowsocksOutboundObject, ShadowsocksServerObject,
    SocksOutboundObject, SocksInboundObject, SOCKS_AUTH, SocksServerObject, SocksUserObject,
    TrojanClientObject, TrojanServerObject, TrojanInboundObject, TrojanOutboundObject,
    VlessUserObject, VlessServerObject, VlessClientObject, VlessInboundObject, VlessOutboundObject,
    VmessUserObject, VMESS_SECURITY, VmessOutboundObject, VmessInboundObject, VmessClientObject, DetourObject, DefaultObject, VmessServerObject,

    NoneHeaderObject, HttpHeaderobject, TcpObject,
    KcpObject,
    WebSocketObject,
    HTTP_METHOD, HttpObject,
    QUIC_SECURITY, QUICObject,
    DomainSocketObject,
    grpcObject,
    TPROXY, SockoptObject
} from "./src";

/** v2ray */
export class v2ray {
    /** 日志配置，表示 V2Ray 如何输出日志 */
    log: LogObject = new LogObject();

    /** 远程控制 */
    api: ApiObject = null;

    /** 内置的 DNS 服务器，若此项不存在，则默认使用本机的 DNS 设置 */
    dns: DnsObject = null;

    /** 路由功能 */
    routing: RoutingObject = null;

    /** 本地策略，可进行一些权限相关的配置 */
    policy: PolicyObject = new PolicyObject();

    /** 一个数组，每个元素是一个入站连接配置 */
    inbounds: InboundObject[];

    /** 一个数组，每个元素是一个出站连接配置。列表中的第一个元素作为主出站协议。当路由匹配不存在或没有匹配成功时，流量由主出站协议发出 */
    outbounds: OutboundObject[];

    /** 用于配置 V2Ray 如何与其它服务器建立和使用网络连接 */
    transport: TransportObject = null;

    /** 统计信息 */
    stats: StatsObject = new StatsObject();

    /** 反向代理 */
    reverse: ReverseObject = null;

    /** 虚拟 DNS 服务器 */
    fakedns: FakeDnsObject[] = [];

    /** 浏览器转发模块 */
    browserForwarder: BrowserForwarderObject = null;

    /** 连接观测模块 */
    observatory: ObservatoryObject = null;

    /**
     * v2ray
     * @param inbounds 入站连接配置
     * @param outbounds 出站连接配置
     */
    constructor(inbounds: InboundObject | InboundObject[], outbounds: OutboundObject | OutboundObject[]) {
        if (inbounds instanceof InboundObject) inbounds = [inbounds];
        if (outbounds instanceof OutboundObject) outbounds = [outbounds];

        this.inbounds = inbounds;
        this.outbounds = outbounds;
    }
}

import {
    PROTOCOL, NETWORK, SECURITY,
    StreamSettingsObject,
    HEADER_OBJECT,
    AccountObject,
    FallbackObject
} from "./lib";

export {
    ApiObject, ApiService,
    BrowserForwarderObject,
    DnsServerObject, QUERY_STRATEGY, DnsObject,
    FakeDnsObject,
    DESTOVERRIDE, SniffingObject, INBOUND_STRATEGY, AllocateObject, InboundObject,
    LOGLEVEL, LogObject,
    ObservatoryObject,
    OutboundObject, ProxySettingsObject, MuxObject,
    PolicyObject, LevelPolicyObject, SystemPolicyObject,
    ReverseObject, BridgeObject, PortalObject,
    RoutingObject, DOMAIN_MATCHER, DOMAIN_STRATEGY, RULE_NETWORK, RULE_PROTOCOL, RuleObject, BALANCER_STRATEGY, BalancerObject,
    StatsObject,
    TransportObject,

    BLACKHOLE_RESPONSE, BlackholeOutboundObject,
    DNS_NETWORK, DnsOutboundObject,
    DOKODEMODOOR_NETWORK, DokodemodoorInboundObject,
    FREEDOM_STRATEGY, FreedomOutboundObject,
    HTTPInboundObject, HTTPOutboundObject, HTTPUserObject, HTTPServerObject,
    LoopbackOutboundObject,
    SHADOWSOCKS_METHOD, SHADOWSOCKS_NETWORK, ShadowsocksInboundObject, ShadowsocksOutboundObject, ShadowsocksServerObject,
    SocksOutboundObject, SocksInboundObject, SOCKS_AUTH, SocksServerObject, SocksUserObject,
    TrojanClientObject, TrojanServerObject, TrojanInboundObject, TrojanOutboundObject,
    VlessUserObject, VlessServerObject, VlessClientObject, VlessInboundObject, VlessOutboundObject,
    VmessUserObject, VMESS_SECURITY, VmessOutboundObject, VmessInboundObject, VmessClientObject, DetourObject, DefaultObject, VmessServerObject,

    NoneHeaderObject, HttpHeaderobject, TcpObject,
    KcpObject,
    WebSocketObject,
    HTTP_METHOD, HttpObject,
    QUIC_SECURITY, QUICObject,
    DomainSocketObject,
    grpcObject,
    TPROXY, SockoptObject,

    PROTOCOL, NETWORK, SECURITY,
    StreamSettingsObject,
    HEADER_OBJECT,
    AccountObject,
    FallbackObject
}