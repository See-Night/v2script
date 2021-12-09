/**
 * Loopback 是一个出站协议，可使出站连接被重新路由
 */
export declare class LoopbackOutboundObject {
    /** 匹配入站来源的标识 */
    inboundTag: string;
    /**
     * LoopbackOutboundObject
     * @param inboundTag 匹配入站来源的标识
     */
    constructor(inboundTag: string);
}
