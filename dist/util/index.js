"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallbackObject = exports.AccountObject = exports.StreamSettingsObject = void 0;
var streamsetting_1 = require("./streamsetting");
Object.defineProperty(exports, "StreamSettingsObject", { enumerable: true, get: function () { return streamsetting_1.StreamSettingsObject; } });
var protocal_1 = require("./protocal");
Object.defineProperty(exports, "AccountObject", { enumerable: true, get: function () { return protocal_1.AccountObject; } });
/** 回落分流配置 */
var FallbackObject = /** @class */ (function () {
    /**
     * FallbackObject
     * @param dest 决定 TLS 解密后 TCP 流量的去向
     */
    function FallbackObject(dest) {
        /**
         * 尝试匹配 TLS ALPN 协商结果，空为任意
         *
         * 有需要时，VLESS 才会尝试读取 TLS ALPN 协商结果，若成功，输出 info realAlpn = 到日志
         *
         * 用途：解决了 Nginx 的 h2c 服务不能同时兼容 http/1.1 的问题，Nginx 需要写两行 listen，分别用于 1.1 和 h2c
         *
         * 注意：fallbacks alpn 存在 "h2" 时，Inbound TLS 需设置 "alpn":["h2","http/1.1"]，以支持 h2 访问
         */
        this.alpn = "";
        /** 尝试匹配首包 HTTP PATH */
        this.path = "";
        /**
         * 发送 [PROXY protocol](https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt)，
         * 专用于传递请求的真实来源 IP 和端口，填版本 1 或 2，默认为 0，即不发送。若有需要建议填 1
         *
         * 目前填 1 或 2，功能完全相同，只是结构不同，且前者可打印，后者为二进制。V2Ray 的 TCP 和 WS 入站均已支持接收 PROXY protocol。
         */
        this.xver = 0;
        this.dest = dest;
    }
    return FallbackObject;
}());
exports.FallbackObject = FallbackObject;
//# sourceMappingURL=index.js.map