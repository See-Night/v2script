/**
 * 当前连接的 WebSocket 配置，仅当此连接使用 WebSocket 时有效
 *
 * 使用标准的 WebSocket 来传输数据。WebSocket 连接可以被其它 HTTP 服务器（如 Nginx）分流，也可以被 VLESS fallbacks path 分流
 */
export declare class WebSocketObject {
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
    /** WebSocket 所使用的 HTTP 协议路径 */
    path: string;
    /** 自定义 HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是字符串 */
    headers: any;
    /**
     * 所要发送的前置数据的最长长度。用于减少连接建立的时间(v4.37.0+)
     *
     * 数据会以 Base64 RawURLEncoding 的形式附加在 path 之后，转发时需要根据前缀进行匹配
     *
     * 如果设置 earlyDataHeaderName 则会将前置数据放置于该 HTTP 头(v4.39.0+)
     *
     * 对于接收端，设置为任何非 0 数值都代表启用前置数据支持
     */
    maxEarlyData: number;
    /**
     * 是否启用浏览器转发
     *
     * 如果启用浏览器转发，相应的 WebSockets 连接就会经过浏览器转发模块进行转发后再发送至互联网(v4.37.0+)
     *
     * v4.37.0+ 服务器端程序会自动适配客户端的浏览器转发功能，无需额外设置
     *
     * 只兼容基于基于路径的前置数据或者 HTTP 头的名字为 `Sec-WebSocket-Protocol` 的启用基于 HTTP 头的前置数据
     */
    useBrowserForwarding: boolean;
    /**
     * 发送的前置数据的 HTTP 头的名字，设置后启用基于 HTTP 头的前置数据。如果留空则使用基于路径的前置数据(v4.39.0+)
     *
     * 当且仅当 HTTP 头的名字为 `Sec-WebSocket-Protocol` 时可以启用基于 HTTP 头的前置数据浏览器转发功能
     */
    earlyDataHeaderName: string;
}
