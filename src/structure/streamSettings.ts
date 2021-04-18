/**
 * 底层传输方式（transport）是当前 V2Ray 节点和其它节点对接的方式
 * 底层传输方式提供了稳定的数据传输通道
 * 通常来说，一个网络连接的两端需要有对称的传输方式
 * 比如一端用了 WebSocket，那么另一个端也必须使用 WebSocket，否则无法建立连接。
 * 
 * 底层传输（transport）配置分为两部分
 * 一是全局设置(TransportObject)，二是分协议配置(StreamSettingsObject)
 * 分协议配置可以指定每个单独的入站出站协议用怎样的方式传输
 * 通常来说客户端和服务器对应的出站入站协议需要使用同样的传输方式
 * 当分协议传输配置指定了一种传输方式，但没有填写其设置时，此传输方式会使用全局配置中的设置。
 */

import { NETWORK, NONE, SECURITY } from "../common";

let default_headers = {
    Host: ['www.baidu.com', 'www.bing.com'],
    "User-Agent": [
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A456 Safari/601.1.46"
    ],
    "Accpet-Encoding": ["gzip, deflate"],
    Connection: ["keep-alive"],
    Pragma: "no-cache"
}

export class tcpSettings {
    header = {
        type: "",
        request: {},
        response: {}
    }

    /**
     * 
     * @param type 伪装: none/http
     * 
     */

    constructor(type = NETWORK.none) {
        this.header.type = type;
        if (type == NETWORK.http) {
            this.header.request = {
                version: "1.1",
                method: "GET",
                path: ["/"],
                headers: default_headers
            };
            this.header.response = {
                version: "1.1",
                status: "200",
                reason: "OK",
                headers: {
                    "Content-Type": ["application/octet-stream", "video/mpeg"],
                    "Transfer-Encoding": ["chunked"],
                    Connection: ["keep-alive"],
                    Pragma: "no-cache"
                }
            };
        }
    }
}

export class kcpSettings {
    mtu: number = 1350;
    tti: number = 50;
    uplinkCapacity: number = 5;
    downlinkCapacity: number = 20;
    congestion: boolean = false;
    readBufferSize: number = 2;
    writeBufferSize: number = 2;
    header = { type: "none" };

    /**
     * 
     * @param type 伪装: none/srtp/utp/wechat-video/dtls/wireguard
     * 
     */
    constructor(type = NETWORK.none) {
        this.header.type = type;
    }
}

export class wsSettings {
    path: string = "/";
    headers: object = default_headers;

    /**
     * 
     * @param path WebSocket 所使用的 HTTP 协议路径，默认值为 "/"
     */
    constructor(path) {
        this.path = path;
    }
}

export class httpSettings {
    host: string[] = [];
    path: string;

    /**
     * 
     * @param hosts 一个字符串数组，每一个元素是一个域名。客户端会随机从列表中选出一个域名进行通信，服务器会验证域名是否在列表中。
     * @param path HTTP 路径，由/开头。客户端和服务器必须一致。可选参数，默认值为"/"。
     * 
     */
    constructor(hosts, path) {
        for (let i = 0; i < hosts.length; i++) {
            this.host.push(hosts[i]);
        }
        this.path = path;
    }
}

export class dsSettings {
    path: string;

    /**
     * 
     * @param path 一个合法的文件路径。在运行 V2Ray 之前，这个文件必须不存在。
     * 
     */
    constructor(path) {
        this.path = path;
    }
}

export class quicSettings {
    security: string = SECURITY.none;
    key: string;
    header = { type: NONE };

    /**
     * 
     * @param key 加密时所用的密钥。可以是任意字符串。当security不为"none"时有效。
     * @param security 加密方式。默认值为不加密。none/aes-128-gcm/chacha20-ploy1305
     * @param type 伪装: none/srtp/utp/wechat-video/dtls/wireguard
     */
    constructor(key, security = SECURITY.none, type = NONE) {
        this.key = key;
        this.security = security;
        this.header.type = type;
    }
}

export class tlsSettings {
    serverName: string;
    allowInsecure: boolean = false;
    alpn:string[] = ["http/1.1"];
    certificates = [{
        usage: "",
        certificateFile: "",
        keyFile: ""
    }];

    /**
     * 
     * @param servername 指定服务器端证书的域名，在连接由 IP 建立时有用
     * @param allowinsecure 是否允许不安全连接（用于客户端）。当值为true时，V2Ray 不会检查远端主机所提供的 TLS 证书的有效性
     * @param alpn 一个字符串数组，指定了 TLS 握手时指定的 ALPN 数值。默认值为["http/1.1"]
     * @param usage 证书用途，默认值为"encipherment"。encipherment/verify/issue
     * ------ "encipherment": 证书用于 TLS 认证和加密。
     * ------ "verify": 证书用于验证远端 TLS 的证书。当使用此项时，当前证书必须为 CA 证书。
     * ------ "issue": 证书用于签发其它证书。当使用此项时，当前证书必须为 CA 证书。
     * @param certificatefile 证书文件路径，如使用 OpenSSL 生成，后缀名为 .crt。
     * @param keyfile 密钥文件路径，如使用 OpenSSL 生成，后缀名为 .key。
     * 
     */
    constructor(servername, allowinsecure, alpn, usage, certificatefile, keyfile) {
        this.serverName = servername;
        this.allowInsecure = allowinsecure;
        this.alpn[0] = alpn;
        this.certificates[0].usage = usage;
        this.certificates[0].certificateFile = certificatefile;
        this.certificates[0].keyFile = keyfile;
    }
}

export class streamSettings {
    network: string = NETWORK.tcp;
    security: string = SECURITY.none;
    tcpSettings: any = null;
    kcpSettings: any = null;
    tlsSettings: any = null;
    wsSettings: any = null;
    httpSettings: any = null;
    dsSettings: any = null;
    quicSettings: any = null;

    constructor(
        network: string = NETWORK.tcp, 
        security: string = SECURITY.none, 
        settings?: tcpSettings | kcpSettings| wsSettings | httpSettings | dsSettings | quicSettings, 
        tlssettings?: tlsSettings
    ) {
        this.network = network;
        this.security = security;
        if (settings) {
            switch(network) {
                case NETWORK.tcp: this.tcpSettings = settings; break;
                case NETWORK.kcp: this.kcpSettings = settings; break;
                case NETWORK.websocket: this.wsSettings = settings; break;
                case NETWORK.http: this.httpSettings = settings; break;
                case NETWORK.domainsocket: this.dsSettings = settings; break;
                case NETWORK.quic: this.quicSettings = settings; break;
            }
        }
        switch(security) {
            case SECURITY.none: this.tlsSettings = null; break;
            case SECURITY.tls: this.tlsSettings = tlssettings; break;
        }
    } 

}