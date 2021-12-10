"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportObject = void 0;
/**
 * 底层传输方式（transport）是当前 V2Ray 节点和其它节点对接的方式
 *
 * 底层传输方式提供了稳定的数据传输通道。通常来说，一个网络连接的两端需要有对称的传输方式。
 * 比如一端用了 WebSocket，那么另一个端也必须使用 WebSocket，否则无法建立连接。
 */
var TransportObject = /** @class */ (function () {
    function TransportObject() {
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
    }
    return TransportObject;
}());
exports.TransportObject = TransportObject;
//# sourceMappingURL=transport.js.map