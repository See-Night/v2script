/**
 * Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据
 */

const enum FREEDOM_STRATEGY {
    AsIs = "AsIs",
    UseIP = "UseIP",
    UseIPv4 = "UseIPv4",
    UseIPv6 = "UseIPv6"
}

class FreedomOutboundObject {
    domainStrategy: FREEDOM_STRATEGY = FREEDOM_STRATEGY.AsIs;
    redirect: string;
    userLevel: string;

    /**
     * FreedomOutboundObject
     * @param redirect Freedom 会强制将所有数据发送到指定地址
     * @param userLevel 用户等级
     */
    constructor(redirect: string, userLevel?:string) {
        this.redirect = redirect;
        this.userLevel = userLevel || this.userLevel;
    }
}

export { FREEDOM_STRATEGY, FreedomOutboundObject };