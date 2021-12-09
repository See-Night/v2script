"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DokodemodoorInboundObject = void 0;
/**
 * Dokodemo door（任意门）是一个入站数据协议
 * 它可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果
 */
var DokodemodoorInboundObject = /** @class */ (function () {
    /**
     * DokodemodoorInboundObject
     * @param address 将流量转发到此地址
     * @param port 将流量转发到目标地址的指定端口
     * @param userLevel 用户等级(可选)
     */
    function DokodemodoorInboundObject(address, port) {
        /** 可接收的网络协议类型。比如当指定为 `tcp` 时，任意门仅会接收 TCP 流量 */
        this.network = "tcp" /* tcp */;
        /** 入站数据的时间限制（秒），默认值为 300 */
        this.timeout = 300;
        /**
         * 当值为 `true` 时，dokodemo-door 会识别出由 iptables 转发而来的数据，并转发到相应的目标地址。
         *
         * 详见[传输配置](https://www.v2fly.org/config/transport.html)
         */
        this.followRedirect = false;
        /**
         * 用户等级，所有连接都会使用这个用户等级
         */
        this.userLevel = 0;
        this.address = address;
        this.port = port;
    }
    return DokodemodoorInboundObject;
}());
exports.DokodemodoorInboundObject = DokodemodoorInboundObject;
//# sourceMappingURL=dokodemodoor.js.map