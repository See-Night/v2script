/**
 * 当前连接的 TCP 配置，仅当此连接使用 TCP 时有效
 */

class NoneHeaderObject {
    type: string = "none";
}

class HttpHeaderobject {
    type: string = "http";
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

class TcpObject {
    acceptProxyProtocol: boolean = false;
    header: NoneHeaderObject | HttpHeaderobject = new NoneHeaderObject();
}

export { NoneHeaderObject, HttpHeaderobject, TcpObject };
