"use strict";
/**
 * Dokodemo door（任意门）是一个入站数据协议
 * 它可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口
 * 从而达到端口映射的效果。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dokodemoDoor_inbound = void 0;
var common_1 = require("../common");
var dokodemoDoor_inbound = /** @class */ (function () {
    /**
     *
     * @param address 将流量转发到此地址
     * @param port 将流量转发到目标地址的指定端口
     * @param network 可接收的网络协议类型。tcp/upd/tcp,udp
     * @param timeout 入站数据的时间限制（秒）
     * @param followRedirect 当值为true时，dokodemo-door 会识别出由 iptables 转发而来的数据，并转发到相应的目标地址
     *
     */
    function dokodemoDoor_inbound(address, port, network, timeout, followRedirect) {
        if (network === void 0) { network = common_1.NETWORK.tcp; }
        if (timeout === void 0) { timeout = 300; }
        if (followRedirect === void 0) { followRedirect = false; }
        this.network = common_1.NETWORK.tcp;
        this.timeout = 300;
        this.followRedirect = false;
        this.address = address;
        this.port = port;
        this.network = network;
        this.timeout = timeout;
        this.followRedirect = followRedirect;
    }
    return dokodemoDoor_inbound;
}());
exports.dokodemoDoor_inbound = dokodemoDoor_inbound;
//# sourceMappingURL=dokodemoDoor.js.map