/**
 * Shadowsocks (opens new window)协议，包含入站和出站两部分，兼容大部分其它版本的实现
 * 与官方版本的兼容性：
 * 支持 TCP 和 UDP 数据包转发，其中 UDP 可选择性关闭
 * 加密方式：
 * - AES-256-GCM
 * - AES-128-GCM
 * - ChaCha20-Poly1305 或称 ChaCha20-IETF-Poly1305
 * - none 或称 plain（V2Ray 4.27.0+）
 */
declare const enum SHADOWSOCKS_METHOD {
    aes_256_gcm = "aes-256-gcm",
    aes_128_gcm = "aes-128-gcm",
    chacha20_poly1305 = "chacha20-poly1305",
    chacha20_ietf_poly1305 = "chacha20-ietf-poly1305",
    none = "none"
}
declare const enum SHADOWSOCKS_NETWORK {
    tcp = "tcp",
    udp = "udp",
    tcp_udp = "tcp,udp"
}
declare class ShadowsocksInboundObject {
    email: string;
    method: SHADOWSOCKS_METHOD;
    password: string;
    level: number;
    network: SHADOWSOCKS_NETWORK;
    /**
     * ShadowsocksInboundObject
     * @param email 邮件地址
     * @param password 密码
     * @param method 加密方式
     */
    constructor(email: string, password: string, method: SHADOWSOCKS_METHOD);
}
declare class ShadowsocksServerObject {
    email: string;
    address: string;
    port: number;
    method: SHADOWSOCKS_METHOD;
    password: string;
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
declare class ShadowsocksOutboundObject {
    servers: ShadowsocksServerObject[];
}
export { SHADOWSOCKS_METHOD, SHADOWSOCKS_NETWORK, ShadowsocksInboundObject, ShadowsocksOutboundObject, ShadowsocksServerObject };
