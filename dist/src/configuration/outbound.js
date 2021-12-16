"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuxObject = exports.ProxySettingsObject = exports.OutboundObject = void 0;
/**
 * 出站连接用于向远程网站或下一级代理服务器发送数据，可用的协议请见协议列表
 */
var OutboundObject = /** @class */ (function () {
    /**
     * OutboundObject
     * @param tag 此出站连接的标识
     * @param protocol 连接协议名称
     * @param settings 具体的配置内容
     * @param mux 是否启用多路复用
     */
    function OutboundObject(tag, protocol, settings, mux) {
        /** 用于发送数据的 IP 地址，当主机有多个 IP 地址时有效，默认值为 `"0.0.0.0"`*/
        this.sendThrough = "0.0.0.0";
        /** [底层传输配置](https://www.v2fly.org/config/transport.html#streamsettingsobject) */
        this.streamSettings = null;
        /** 出站代理配置。当出站代理生效时，此出站协议的 streamSettings 将不起作用 */
        this.proxySettings = null;
        /** 多路复用（Mux）配置 */
        this.mux = null;
        this.tag = tag;
        this.protocol = protocol;
        this.settings = settings;
        if (mux)
            this.mux = new MuxObject();
    }
    return OutboundObject;
}());
exports.OutboundObject = OutboundObject;
/**
 * 出站代理配置
 */
var ProxySettingsObject = /** @class */ (function () {
    /**
     * ProxySettingsObject
     * @param tag 另一个出站连接的标识
     * @param transportLayer 是否启用传输层转发支持
     */
    function ProxySettingsObject(tag, transportLayer) {
        this.tag = tag;
        this.transportLayer = transportLayer;
    }
    return ProxySettingsObject;
}());
exports.ProxySettingsObject = ProxySettingsObject;
/**
 * 多路复用配置
 */
var MuxObject = /** @class */ (function () {
    function MuxObject() {
        /** 是否启用 Mux 转发请求，默认值 `false` */
        this.enable = false;
        /**
         * 最大并发连接数。最小值 1，最大值 1024，默认值 8
         *
         * 填负数，如 -1，不加载 mux 模块（v4.22.0+）
         *
         * 这个数值表示了一个 TCP 连接上最多承载的 Mux 连接数量。
         * 当客户端发出了 8 个 TCP 请求，而 concurrency=8 时，V2Ray 只会发出一条实际的 TCP 连接，客户端的 8 个请求全部由这个 TCP 连接传输
         */
        this.concurrency = 8;
    }
    return MuxObject;
}());
exports.MuxObject = MuxObject;
//# sourceMappingURL=outbound.js.map