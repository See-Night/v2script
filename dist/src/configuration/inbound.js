"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboundObject = exports.AllocateObject = exports.SniffingObject = void 0;
/**
 * 尝试探测流量的类型
 */
var SniffingObject = /** @class */ (function () {
    /**
     * SniffingObject
     * @param enable 是否开启流量探测
     * @param destOverride 当流量为指定类型时，按其中包括的目标地址重置当前连接的目标
     * @param metadataOnly 是否仅使用元数据推断目标地址而不截取流量内容
     */
    function SniffingObject(enable, destOverride, metadataOnly) {
        this.enable = enable;
        this.destOverride = destOverride;
        this.metadataOnly = metadataOnly;
    }
    return SniffingObject;
}());
exports.SniffingObject = SniffingObject;
/**
 * 端口分配设置
 */
var AllocateObject = /** @class */ (function () {
    /**
     * AllocateObject
     * @param strategy 端口分配策略
     * @param refresh 随机端口刷新间隔，单位为分钟
     * @param concurrency 随机端口数量
     */
    function AllocateObject(strategy, refresh, concurrency) {
        this.strategy = strategy;
        this.refresh = refresh;
        this.concurrency = concurrency;
    }
    return AllocateObject;
}());
exports.AllocateObject = AllocateObject;
/**
 * 入站连接用于接收从客户端（浏览器或上一级代理服务器）发来的数据，可用的协议请见协议列表
 */
var InboundObject = /** @class */ (function () {
    /**
     * InboundObject
     * @param tag 此入站连接的标识，用于在其它的配置中定位此连接
     * @param listen 监听地址，只允许 IP 地址
     * @param port 端口
     * @param protocol 连接协议名称
     * @param settings 配置内容
     * @param streamSettings 底层传输配置
     * @param sniffing 尝试探测流量的类型
     * @param allocate 端口分配设置
     */
    function InboundObject(tag, listen, port, protocol, settings) {
        /**
         * 监听地址，只允许 IP 地址，默认值为 "0.0.0.0"，表示接收所有网卡上的连接。
         * 除此之外，必须指定一个现有网卡的地址
         *
         * v4.32.0+，支持填写 Unix domain socket，格式为绝对路径，形如 "/dev/shm/domain.socket"，
         * 可在开头加 "@" 代表 abstract (opens new window)，"@@" 则代表带 padding 的 abstract
         *
         * 填写 Unix domain socket 时，port 和 allocate 将被忽略，协议暂时可选 VLESS、VMess、Trojan，
         * 传输方式可选 TCP、WebSocket、HTTP/2
         */
        this.listen = "0.0.0.0";
        /** [底层传输配置](https://www.v2fly.org/config/transport.html#streamsettingsobject) */
        this.streamSettings = null;
        /** 尝试探测流量的类型 */
        this.sniffing = null;
        /** 端口分配设置 */
        this.allocate = null;
        this.listen = listen;
        this.port = port;
        this.protocol = protocol;
        this.settings = settings;
        this.tag = tag;
    }
    return InboundObject;
}());
exports.InboundObject = InboundObject;
//# sourceMappingURL=inbound.js.map