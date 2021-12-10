/** HTTP 连接方式 */
const enum HTTP_METHOD {
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    DELETE = "DELETE",
    PUT = "PUT"
}

/**
 * V2Ray 3.17 中加入了基于 HTTP/2 的传输方式。它完整按照 HTTP/2 标准实现，可以通过其它的 HTTP 服务器（如 Nginx）进行中转。
 * 
 * 由 HTTP/2 的建议，客户端和服务器必须同时开启 TLS 才可以正常使用这个传输方式。
 * 
 * V2Ray 4.20 中对服务端的 TLS 配置的强制条件移除，为了在特殊用途的分流部署环境中，由外部网关组件完成 TLS 层对话，
 * V2Ray 作为后端应用，网关和 V2Ray 间使用称为 h2c 的明文 http/2 进行通讯。
 */
class HttpObject {
    /** 
     * 一个字符串数组，每一个元素是一个域名
     * 
     * 客户端会随机从列表中选出一个域名进行通信，服务器会验证域名是否在列表中 
     */
    host: string[] = [];

    /** 
     * HTTP 路径，由 / 开头
     * 
     * 客户端和服务器必须一致 
     */
    path: string = "/";

    /** HTTP 方法 */
    method: HTTP_METHOD = HTTP_METHOD.PUT;

    /** HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是一个数组 */
    headers: any = {};
}

export { HTTP_METHOD, HttpObject };