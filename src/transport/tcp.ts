class NoneHeaderObject {
    type: "none" = "none";
}

class HttpHeaderObject {
    type: "http" = "http";
    request: {
        version: string,
        method: string,
        path: string[],
        headers: any
    } = {
        version: "1.1",
        method: "GET",
        path: [
            "/"
        ],
        headers: {
            "User-Agent": [
                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
                "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A456 Safari/601.1.46"
            ],
            "Accept-Encoding": [
                "gzip, deflate"
            ],
            "Connection": [
                "keep-alive"
            ],
            "Pragma": "no-cache"
        }
    };
    response: {
        version: string,
        status: string,
        reason: string,
        headers: any
    } = {
        version: "1.1",
        status: "200",
        reason: "OK",
        headers: {
            "Content-Type": [
                "application/octet-stream",
                "video/mpeg"
            ],
            "Transfer-Encoding": [
                "chunked"
            ],
            "Connection": [
                "keep-alive"
            ],
            "Pragma": "no-cache"
        }
    };
}

/**
 * 当前连接的 TCP 配置，仅当此连接使用 TCP 时有效
 */
class TcpObject {
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
    acceptProxyProtocol: boolean = false;

    /**
     * 数据包头部伪装设置
     * 
     * HTTP 伪装无法被其它 HTTP 服务器（如 Nginx）分流，但可以被 VLESS fallbacks path 分流
     */
    header: NoneHeaderObject | HttpHeaderObject = new NoneHeaderObject();
}

export { NoneHeaderObject, HttpHeaderObject, TcpObject };
