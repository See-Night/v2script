/** Shadowsocks 加密方法 */
declare const enum SHADOWSOCKS_METHOD {
    aes_256_gcm = "aes-256-gcm",
    aes_128_gcm = "aes-128-gcm",
    chacha20_poly1305 = "chacha20-poly1305",
    chacha20_ietf_poly1305 = "chacha20-ietf-poly1305",
    none = "none"
}
/** Shadowssocks 可接收的网络连接类型 */
declare const enum SHADOWSOCKS_NETWORK {
    tcp = "tcp",
    udp = "udp",
    tcp_udp = "tcp,udp"
}
/** Shadowsocks 入站配置 */
declare class ShadowsocksInboundObject {
    /** 邮件地址，用于标识用户 */
    email: string;
    /** 加密方法 */
    method: SHADOWSOCKS_METHOD;
    /** 密码 */
    password: string;
    /** 用户等级 */
    level: number;
    /** 可接收的网络连接类型 */
    network: SHADOWSOCKS_NETWORK;
    /**
     * ShadowsocksInboundObject
     * @param email 邮件地址
     * @param password 密码
     * @param method 加密方式
     */
    constructor(email: string, password: string, method: SHADOWSOCKS_METHOD);
}
/** Shadowsocks 服务器配置 */
declare class ShadowsocksServerObject {
    /** 邮件地址，用于标识用户 */
    email: string;
    /** 服务器地址，支持 IPv4、IPv6 和域名 */
    address: string;
    /** 服务器端口 */
    port: number;
    /** 加密方法 */
    method: SHADOWSOCKS_METHOD;
    /** 密码 */
    password: string;
    /** 用户等级 */
    level: number;
    /**
     * ShadowsocksServerObject
     * @param email 邮件地址
     * @param address Shadowsocks 服务器地址，支持 IPv4、IPv6 和域名
     * @param port Shadowsocks 服务器端口
     * @param password 密码
     * @param method 加密方式
     */
    constructor(email: string, address: string, port: number, password: string, method: SHADOWSOCKS_METHOD);
}
/** Shadowsocks 出站配置 */
declare class ShadowsocksOutboundObject {
    /** 服务器列表 */
    servers: ShadowsocksServerObject[];
    /**
     * ShadowsocksOutboundObject
     * @param servers Shadowsocks服务
     */
    constructor(servers: ShadowsocksServerObject | ShadowsocksServerObject[]);
}
export { SHADOWSOCKS_METHOD, SHADOWSOCKS_NETWORK, ShadowsocksInboundObject, ShadowsocksOutboundObject, ShadowsocksServerObject };
