/**
 * Freedom 是一个出站协议
 * 可以用来向任意网络发送（正常的） TCP 或 UDP 数据。
 */
export declare class freedom_outbound {
    domainStrategy: string;
    redirect: string;
    /**
     *
     * @param redirect Freedom 会强制将所有数据发送到指定地址（而不是入站协议指定的地址）
     * @param domainStrategy 在目标地址为域名时，Freedom 可以直接向此域名发出连接（"AsIs"），或者将域名解析为 IP 之后再建立连接（"UseIP"、"UseIPv4"、"UseIPv6"）。
     *
     */
    constructor(redirect: string, domainStrategy?: string);
}
