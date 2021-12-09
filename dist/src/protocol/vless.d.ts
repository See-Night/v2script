/**
 * VLESS 是一个无状态的轻量传输协议
 * 它分为入站和出站两部分，可以作为 V2Ray 客户端和服务器之间的桥梁
 * 与 VMess 不同，VLESS 不依赖于系统时间，认证方式同样为 UUID，但不需要 alterId
 */
import { FallbackObject } from "../../util";
declare class VlessServerObject {
    address: string;
    port: number;
    users: VlessUserObject[];
    /**
     * VlessServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     */
    constructor(address: string, port: number);
}
declare class VlessUserObject {
    id: string;
    encryption: "none";
    level: number;
    /**
     * VlessUserObject
     * @param id VLESS 的用户 ID
     */
    constructor(id: string);
}
declare class VlessOutboundObject {
    vnext: VlessServerObject[];
}
declare class VlessClientObject {
    id: string;
    level: number;
    email: string;
    /**
     * VlessClientObject
     * @param id VLESS 的用户 ID
     * @param email 用户邮箱
     */
    constructor(id: string, email: string);
}
declare class VlessInboundObject {
    clients: VlessClientObject[];
    fallbacks: FallbackObject[];
}
export { VlessUserObject, VlessServerObject, VlessClientObject, VlessInboundObject, VlessOutboundObject };
