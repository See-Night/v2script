"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamSettings = exports.tlsSettings = exports.quicSettings = exports.dsSettings = exports.httpSettings = exports.wsSettings = exports.kcpSettings = exports.tcpSettings = void 0;
var common_1 = require("../common");
var default_headers = {
    Host: ['www.baidu.com', 'www.bing.com'],
    "User-Agent": [
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A456 Safari/601.1.46"
    ],
    "Accpet-Encoding": ["gzip, deflate"],
    Connection: ["keep-alive"],
    Pragma: "no-cache"
};
var tcpSettings = /** @class */ (function () {
    /**
     *
     * @param type 伪装: none/http
     *
     */
    function tcpSettings(type) {
        if (type === void 0) { type = common_1.NETWORK.none; }
        this.header = {
            type: "",
            request: {},
            response: {}
        };
        this.header.type = type;
        if (type == common_1.NETWORK.http) {
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
    return tcpSettings;
}());
exports.tcpSettings = tcpSettings;
var kcpSettings = /** @class */ (function () {
    /**
     *
     * @param type 伪装: none/srtp/utp/wechat-video/dtls/wireguard
     *
     */
    function kcpSettings(type) {
        if (type === void 0) { type = common_1.NETWORK.none; }
        this.mtu = 1350;
        this.tti = 50;
        this.uplinkCapacity = 5;
        this.downlinkCapacity = 20;
        this.congestion = false;
        this.readBufferSize = 2;
        this.writeBufferSize = 2;
        this.header = { type: "none" };
        this.header.type = type;
    }
    return kcpSettings;
}());
exports.kcpSettings = kcpSettings;
var wsSettings = /** @class */ (function () {
    /**
     *
     * @param path WebSocket 所使用的 HTTP 协议路径，默认值为 "/"
     */
    function wsSettings(path) {
        this.path = "/";
        this.headers = default_headers;
        this.path = path;
    }
    return wsSettings;
}());
exports.wsSettings = wsSettings;
var httpSettings = /** @class */ (function () {
    /**
     *
     * @param hosts 一个字符串数组，每一个元素是一个域名。客户端会随机从列表中选出一个域名进行通信，服务器会验证域名是否在列表中。
     * @param path HTTP 路径，由/开头。客户端和服务器必须一致。可选参数，默认值为"/"。
     *
     */
    function httpSettings(hosts, path) {
        this.host = [];
        for (var i = 0; i < hosts.length; i++) {
            this.host.push(hosts[i]);
        }
        this.path = path;
    }
    return httpSettings;
}());
exports.httpSettings = httpSettings;
var dsSettings = /** @class */ (function () {
    /**
     *
     * @param path 一个合法的文件路径。在运行 V2Ray 之前，这个文件必须不存在。
     *
     */
    function dsSettings(path) {
        this.path = path;
    }
    return dsSettings;
}());
exports.dsSettings = dsSettings;
var quicSettings = /** @class */ (function () {
    /**
     *
     * @param key 加密时所用的密钥。可以是任意字符串。当security不为"none"时有效。
     * @param security 加密方式。默认值为不加密。none/aes-128-gcm/chacha20-ploy1305
     * @param type 伪装: none/srtp/utp/wechat-video/dtls/wireguard
     */
    function quicSettings(key, security, type) {
        if (security === void 0) { security = common_1.SECURITY.none; }
        if (type === void 0) { type = common_1.NONE; }
        this.security = common_1.SECURITY.none;
        this.header = { type: common_1.NONE };
        this.key = key;
        this.security = security;
        this.header.type = type;
    }
    return quicSettings;
}());
exports.quicSettings = quicSettings;
var tlsSettings = /** @class */ (function () {
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
    function tlsSettings(servername, allowinsecure, alpn, usage, certificatefile, keyfile) {
        this.allowInsecure = false;
        this.alpn = ["http/1.1"];
        this.certificates = [{
                usage: "",
                certificateFile: "",
                keyFile: ""
            }];
        this.serverName = servername;
        this.allowInsecure = allowinsecure;
        this.alpn[0] = alpn;
        this.certificates[0].usage = usage;
        this.certificates[0].certificateFile = certificatefile;
        this.certificates[0].keyFile = keyfile;
    }
    return tlsSettings;
}());
exports.tlsSettings = tlsSettings;
var streamSettings = /** @class */ (function () {
    function streamSettings(network, security, settings, tlssettings) {
        if (network === void 0) { network = common_1.NETWORK.tcp; }
        if (security === void 0) { security = common_1.SECURITY.none; }
        this.network = common_1.NETWORK.tcp;
        this.security = common_1.SECURITY.none;
        this.tcpSettings = null;
        this.kcpSettings = null;
        this.tlsSettings = null;
        this.wsSettings = null;
        this.httpSettings = null;
        this.dsSettings = null;
        this.quicSettings = null;
        this.network = network;
        this.security = security;
        if (settings) {
            switch (network) {
                case common_1.NETWORK.tcp:
                    this.tcpSettings = settings;
                    break;
                case common_1.NETWORK.kcp:
                    this.kcpSettings = settings;
                    break;
                case common_1.NETWORK.websocket:
                    this.wsSettings = settings;
                    break;
                case common_1.NETWORK.http:
                    this.httpSettings = settings;
                    break;
                case common_1.NETWORK.domainsocket:
                    this.dsSettings = settings;
                    break;
                case common_1.NETWORK.quic:
                    this.quicSettings = settings;
                    break;
            }
        }
        switch (security) {
            case common_1.SECURITY.none:
                this.tlsSettings = null;
                break;
            case common_1.SECURITY.tls:
                this.tlsSettings = tlssettings;
                break;
        }
    }
    return streamSettings;
}());
exports.streamSettings = streamSettings;
//# sourceMappingURL=streamSettings.js.map