declare const enum TPROXY {
    redirect = "redirect",
    tproxy = "tproxy",
    off = "off"
}
/**
 * 用作透明代理的配置
 */
declare class SockoptObject {
    /**
     * 一个整数。当其值非零时，在出站连接上标记 SO_MARK
     * * 仅适用于 Linux 系统
     * * 需要 CAP_NET_ADMIN 权限。
     */
    mark: number;
    /**
     * 是否启用 [TCP Fast Open](https://zh.wikipedia.org/wiki/TCP%E5%BF%AB%E9%80%9F%E6%89%93%E5%BC%80)
     *
     * 当其值为 true 时，强制开启 TFO；当其值为 false 时，强制关闭 TFO；当此项不存在时，使用系统默认设置
     *
     * 可用于入站出站连接
     *
     * 仅在以下版本（或更新版本）的操作系统中可用:
     * * Windows 10 (1604)
     * * Mac OS 10.11 / iOS 9
     * * Linux 3.16：系统已默认开启，无需配置
     * * FreeBSD 10.3
     */
    tcpFastOpen: boolean;
    /** 入站连接的 [TCP Fast Open](https://zh.wikipedia.org/wiki/TCP%E5%BF%AB%E9%80%9F%E6%89%93%E5%BC%80) 队列长度 */
    tcpFastOpenQueueLength: number;
    /**
     * 是否开启透明代理（仅适用于 Linux）
     * * "redirect"：使用 Redirect 模式的透明代理。支持 TCP 和 UDP 连接
     * * "tproxy"：使用 TProxy 模式的透明代理。支持 TCP 和 UDP 连接
     * * "off"：关闭透明代理
     *
     * ! 透明代理需要 Root 或 CAP_NET_ADMIN 权限。
     */
    tproxy: TPROXY;
    /** TCP 保持活跃的数据包的发送间隔，以秒为单位（仅适用于 Linux） */
    tcpKeepAliveInterval: number;
}
export { TPROXY, SockoptObject };
