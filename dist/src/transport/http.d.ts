/**
 * 当前连接的 HTTP/2 配置，仅当此连接使用 HTTP/2 时有效
 */
declare const enum HTTP_METHOD {
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    DELETE = "DELETE",
    PUT = "PUT"
}
declare class HttpObject {
    host: string[];
    path: string;
    method: HTTP_METHOD;
    headers: any;
}
export { HTTP_METHOD, HttpObject };
