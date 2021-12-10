import { FallbackObject } from "../../lib";
/** Trojan 客户端配置 */
declare class TrojanClientObject {
    /** 密码 */
    password: string;
    /** 邮件地址，用于标识用户 */
    email: string;
    /** 用户等级 */
    level: number;
    /**
     * TrojanClientObject
     * @param email 邮件地址
     * @param password 密码
     */
    constructor(email: string, password: string);
}
/** Trojan 服务器配置 */
declare class TrojanServerObject {
    /** 服务器地址，支持 IPv4、IPv6 和域名 */
    address: string;
    /** 服务器端口 */
    port: number;
    /** 邮件地址，用于标识用户 */
    email: string;
    /** 密码 */
    password: string;
    /** 用户等级 */
    level: number;
    /**
     * TrojanServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     * @param email 邮件地址
     * @param password 密码
     */
    constructor(address: string, port: number, email: string, password: string);
}
/** Trojan 入站配置 */
declare class TrojanInboundObject {
    /** 客户端列表 */
    clients: TrojanClientObject[];
    /** 回落分流列表 */
    fallbacks: FallbackObject[];
    /**
     * TrojanInboundObject
     * @param clients 客户端列表
     * @param fallbacks 回落分流列表
     */
    constructor(clients: TrojanClientObject | TrojanClientObject[], fallbacks: FallbackObject | FallbackObject[]);
}
/** Trojan 出站配置 */
declare class TrojanOutboundObject {
    /** 服务器列表 */
    servers: TrojanServerObject[];
    /**
     * TrojanOutboundObject
     * @param servers 服务器配置
     */
    constructor(servers: TrojanServerObject | TrojanServerObject[]);
}
export { TrojanClientObject, TrojanServerObject, TrojanInboundObject, TrojanOutboundObject };
