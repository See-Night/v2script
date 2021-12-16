declare class NoneHeaderObject {
    type: "none";
}
declare class HttpHeaderObject {
    type: "http";
    request: {
        version: string;
        method: string;
        path: string[];
        headers: any;
    };
    response: {
        version: string;
        status: string;
        reason: string;
        headers: any;
    };
}
/**
 * 当前连接的 TCP 配置，仅当此连接使用 TCP 时有效
 */
declare class TcpObject {
    /**
     * v4.27.1+，仅用于 inbound，是否接收 PROXY protocol
     *
     * 填写 true 时，最底层 TCP 连接建立后，请求方必须先发送 PROXY protocol v1 或 v2，否则连接会被关闭
     *
     * [PROXY protocol](https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt)专用于传递请求的真实来源 IP 和端口，
     * 若你不了解它，请先忽略该项
     *
     * 常见的反代软件（如 HAProxy、Nginx）都可以配置发送它，VLESS fallbacks xver 也可以发送它
     */
    acceptProxyProtocol: boolean;
    /**
     * 数据包头部伪装设置
     *
     * HTTP 伪装无法被其它 HTTP 服务器（如 Nginx）分流，但可以被 VLESS fallbacks path 分流
     */
    header: NoneHeaderObject | HttpHeaderObject;
}
export { NoneHeaderObject, HttpHeaderObject, TcpObject };
