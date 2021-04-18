/**
 * Freedom 是一个出站协议
 * 可以用来向任意网络发送（正常的） TCP 或 UDP 数据。
 */

import { DOMAINSTRATEGY } from "../common";

export class freedom_outbound {
    domainStrategy: string = DOMAINSTRATEGY.Asls;
    redirect: string;

    /**
     * 
     * @param redirect Freedom 会强制将所有数据发送到指定地址（而不是入站协议指定的地址）
     * @param domainStrategy 在目标地址为域名时，Freedom 可以直接向此域名发出连接（"AsIs"），或者将域名解析为 IP 之后再建立连接（"UseIP"、"UseIPv4"、"UseIPv6"）。
     * 
     */
    constructor(redirect: string, domainStrategy: string = DOMAINSTRATEGY.Asls) {
        this.redirect = redirect;
        this.domainStrategy = domainStrategy;
    }
}