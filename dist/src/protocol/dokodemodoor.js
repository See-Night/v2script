"use strict";
/**
 * Dokodemo door（任意门）是一个入站数据协议
 * 它可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DokodemodoorInboundObject = void 0;
var DokodemodoorInboundObject = /** @class */ (function () {
    /**
     * DokodemodoorInboundObject
     * @param address 将流量转发到此地址
     * @param port 将流量转发到目标地址的指定端口
     * @param userLevel 用户等级(可选)
     */
    function DokodemodoorInboundObject(address, port) {
        this.network = "tcp" /* tcp */;
        this.timeout = 300;
        this.followRedirect = false;
        this.userLevel = 0;
        this.address = address;
        this.port = port;
    }
    return DokodemodoorInboundObject;
}());
exports.DokodemodoorInboundObject = DokodemodoorInboundObject;
//# sourceMappingURL=dokodemodoor.js.map