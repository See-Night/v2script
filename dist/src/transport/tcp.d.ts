/**
 * 当前连接的 TCP 配置，仅当此连接使用 TCP 时有效
 */
declare class NoneHeaderObject {
    type: string;
}
declare class HttpHeaderobject {
    type: string;
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
declare class TcpObject {
    acceptProxyProtocol: boolean;
    header: NoneHeaderObject | HttpHeaderobject;
}
export { NoneHeaderObject, HttpHeaderobject, TcpObject };
