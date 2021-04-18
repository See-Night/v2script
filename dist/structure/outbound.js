"use strict";
/**
 * 出站连接用于向远程网站或下一级代理服务器发送数据
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.outbound = void 0;
var outbound = /** @class */ (function () {
    /**
     *
     * @param tag 标识
     * @param protocol 连接协议
     * @param settings 设置参数[根据不同的传输协议其内部参数各有不同]
     * @param streamSettings 流参数
     * @param mux Mux 功能是在一条 TCP 连接上分发多个 TCP 连接的数据（带宽换稳定性）
     *
     */
    function outbound(tag, protocol, settings, streamSettings, mux) {
        if (mux === void 0) { mux = { enabled: true, concurrency: 8 }; }
        this.protocol = protocol;
        this.settings = settings;
        this.streamSettings = streamSettings;
        this.mux = mux;
        this.tag = tag;
    }
    return outbound;
}());
exports.outbound = outbound;
//# sourceMappingURL=outbound.js.map