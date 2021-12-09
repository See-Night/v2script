/**
 * 用作透明代理的配置
 */

const enum TPROXY {
    redirect = "redirect",
    tproxy = "tproxy",
    off = "off"
}

class SockoptObject {
    mark: number = 0;
    tcpFastOpen: boolean = false;
    tcpFastOpenQueueLength: number = 4096;
    tproxy: TPROXY = TPROXY.off;
    tcpKeepAliveInterval: number = 0;
}

export { TPROXY, SockoptObject };