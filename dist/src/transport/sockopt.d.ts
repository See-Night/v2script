/**
 * 用作透明代理的配置
 */
declare const enum TPROXY {
    redirect = "redirect",
    tproxy = "tproxy",
    off = "off"
}
declare class SockoptObject {
    mark: number;
    tcpFastOpen: boolean;
    tcpFastOpenQueueLength: number;
    tproxy: TPROXY;
    tcpKeepAliveInterval: number;
}
export { TPROXY, SockoptObject };
