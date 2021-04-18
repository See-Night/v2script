"use strict";
/**
 * 入站连接用于接收从客户端（浏览器或上一级代理服务器）发来的数据
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.inbound = void 0;
var inbound = /** @class */ (function () {
    /**
     *
     * @param port 端口
     * @param listen 监听地址
     * @param protocol 传输协议：vmess/socks/shadowsocks/mtproto/blackhole/dns/dokodemo-door/freedom/http
     * @param settings 设置参数[根据不同的传输协议其内部参数各有不同]
     * @param streamsettings 流参数
     * @param tag 标识
     *
     */
    function inbound(tag, port, listen, protocol, settings, streamsettings) {
        this.listen = "0.0.0.0";
        this.sniffing = {
            enabled: true,
            destOverride: ['http', 'tls']
        };
        this.streamSettings = null;
        this.tag = tag;
        this.port = port;
        this.listen = listen;
        this.protocol = protocol;
        this.settings = settings;
        if (streamsettings) {
            this.streamSettings = streamsettings;
        }
    }
    return inbound;
}());
exports.inbound = inbound;
//# sourceMappingURL=inbound.js.map