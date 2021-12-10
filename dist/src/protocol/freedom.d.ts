/**
 * 在目标地址为域名时，Freedom 可以直接向此域名发出连接（"AsIs"），或者将域名解析为 IP 之后再建立连接（"UseIP"、"UseIPv4" 和 "UseIPv6"）
 *
 * 解析 IP 的步骤会使用 V2Ray 内建的 DNS
 */
declare const enum FREEDOM_STRATEGY {
    AsIs = "AsIs",
    UseIP = "UseIP",
    UseIPv4 = "UseIPv4",
    UseIPv6 = "UseIPv6"
}
/**
 * Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据
 */
declare class FreedomOutboundObject {
    /**
     * 在目标地址为域名时，Freedom 可以直接向此域名发出连接（"AsIs"），或者将域名解析为 IP 之后再建立连接（"UseIP"、"UseIPv4" 和 "UseIPv6"）
     *
     * 解析 IP 的步骤会使用 V2Ray 内建的 DNS
     */
    domainStrategy: FREEDOM_STRATEGY;
    /**
     * Freedom 会强制将所有数据发送到指定地址（而不是入站协议指定的地址）
     *
     * 其值为一个字符串，样例：`127.0.0.1:80`，`:1234`。当地址不指定时，如 `:443`，Freedom 不会修改原先的目标地址
     *
     * 当端口为 0 时，如 `v2ray.com: 0`，Freedom 不会修改原先的端口
     */
    redirect: string;
    /** 用户等级，所有连接都使用这一等级 */
    userLevel: string;
    /**
     * FreedomOutboundObject
     * @param redirect Freedom 会强制将所有数据发送到指定地址
     * @param userLevel 用户等级
     */
    constructor(redirect: string, userLevel?: string);
}
export { FREEDOM_STRATEGY, FreedomOutboundObject };
