"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamSettingsObject = exports.TLSObject = exports.CertificateObject = void 0;
var transport_1 = require("../src/transport");
var CertificateObject = /** @class */ (function () {
    /**
     * CertificateObject
     * @param certificateFile 证书文件路径，如使用 OpenSSL 生成，后缀名为 .crt
     * @param keyFile 密钥文件路径，如使用 OpenSSL 生成，后缀名为 .key
     */
    function CertificateObject(certificateFile, keyFile) {
        /**
         * 证书用途，默认值为 `encipherment`
         * * `encipherment`：证书用于 TLS 认证和加密
         * * `verify`：证书用于验证远端 TLS 的证书。当使用此项时，当前证书必须为 CA 证书
         * * `issue`：证书用于签发其它证书。当使用此项时，当前证书必须为 CA 证书
         * * `verifyclient`：用于验证客户端身份的证书颁发机构证书。当使用此项时，当前证书必须为 CA 证书 (4.42.0+)
         */
        this.usage = "encipherment" /* encipherment */;
        this.certificateFile = certificateFile;
        this.keyFile = keyFile;
    }
    return CertificateObject;
}());
exports.CertificateObject = CertificateObject;
/** TLS 配置 */
var TLSObject = /** @class */ (function () {
    /**
     * TLSObject
     * @param serverName 指定服务器端证书的域名
     */
    function TLSObject(serverName) {
        /**
         * 一个字符串数组，指定了 TLS 握手时指定的 ALPN 数值
         *
         * 默认值为 `["h2", "http/1.1"]`
         */
        this.alpn = ["h2", "http/1.1"];
        /**
         * 是否允许不安全连接（仅用于客户端）
         *
         * 默认值为 `false`。当值为 `true` 时，V2Ray 不会检查远端主机所提供的 TLS 证书的有效性
         */
        this.allowInsecure = false;
        /**
         * 是否禁用操作系统自带的 CA 证书
         *
         * 默认值为 false
         * * 当值为 true 时，V2Ray 只会使用 certificates 中指定的证书进行 TLS 握手
         * * 当值为 false 时，V2Ray 只会使用操作系统自带的 CA 证书进行 TLS 握手
         */
        this.disableSystemRoot = false;
        /** 证书列表，其中每一项表示一个证书 */
        this.certificates = [];
        /**
         * 在连接时进行客户端证书认证
         *
         * 在打开此选项后，客户端将需要配置客户端证书才能连接到服务器端
         *
         * (4.42.0+) 客户端证书必须由程序内配置的客户端证书颁发机构签发。系统内置证书颁发机构以及用于认证服务器端的证书颁发机构不会自动被信任
         */
        this.verifyClientCertificate = false;
        this.serverName = serverName;
    }
    return TLSObject;
}());
exports.TLSObject = TLSObject;
/**
 * StreamSettingsObject 对应出站入站协议中的 streamSettings 项
 * 每一个入站、出站连接都可以分别配置不同的传输配置，都可以设置 streamSettings 来进行一些传输的配置
 */
var StreamSettingsObject = /** @class */ (function () {
    function StreamSettingsObject() {
        /** 数据流所使用的网络类型，默认值为 `"tcp"` */
        this.network = "tcp" /* tcp */;
        /** 是否启用传输层加密，支持的选项有 `"none"` 表示不加密（默认值），`"tls"` 表示使用 TLS  */
        this.security = "none" /* none */;
        /** TLS 配置。TLS 由 Golang 提供，支持 TLS 1.3，不支持 DTLS */
        this.tlsSettings = null;
        /** 针对 TCP 连接的配置 */
        this.tcpSettings = null;
        /** 针对 mKCP 连接的配置 */
        this.kcpSettings = null;
        /** 针对 WebSocket 连接的配置 */
        this.wsSettings = null;
        /** 针对 HTTP/2 连接的配置 */
        this.httpSettings = null;
        /** 针对 QUIC 连接的配置 */
        this.quicSettings = null;
        /** 针对 Domain Socket 连接的配置 */
        this.dsSettings = null;
        /** 针对 gRPC 连接的配置 */
        this.grpcSettings = null;
        /** 用作透明代理的配置 */
        this.sockopt = new transport_1.SockoptObject();
    }
    return StreamSettingsObject;
}());
exports.StreamSettingsObject = StreamSettingsObject;
//# sourceMappingURL=streamsetting.js.map