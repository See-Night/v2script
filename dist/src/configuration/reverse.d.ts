/** 反向代理是一个 V2Ray 的附加功能，可以把服务器端的流量向客户端转发，即逆向流量转发 */
declare class ReverseObject {
    /** 一个数组，每一项表示一个 bridge */
    bridges: BridgeObject[];
    /** 一个数组，每一项表示一个 portal */
    portals: PortalObject[];
}
/** bridge */
declare class BridgeObject {
    /** 一个标识，所有由 bridge 发出的连接，都会带有这个标识。可以在 路由 中使用 inboundTag 进行识别 */
    tag: string;
    /** 一个域名。bridge 向 portal 建立的连接，都会使用这个域名进行发送。这个域名只作为 bridge 和 portal 的通信用途，不必真实存在 */
    domain: string;
    /**
     * BridgeObject
     * @param tag 标识
     * @param domain 域名
     */
    constructor(tag: string, domain: string);
}
/** portal */
declare class PortalObject {
    /** portal 的标识。在 路由 中使用 outboundTag 将流量转发到这个 portal */
    tag: string;
    /** 一个域名。当 portal 接收到流量时，如果流量的目标域名是此域名，则 portal 认为当前连接上 bridge 发来的通信连接。而其它流量则会被当成需要转发的流量。portal 所做的工作就是把这两类连接进行识别并拼接 */
    domain: string;
    /**
     * BridgeObject
     * @param tag 标识
     * @param domain 域名
     */
    constructor(tag: string, domain: string);
}
export { ReverseObject, BridgeObject, PortalObject };
