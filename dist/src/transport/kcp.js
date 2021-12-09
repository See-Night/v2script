"use strict";
/**
 * 当前连接的 mKCP 配置，仅当此连接使用 mKCP 时有效
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KcpObject = void 0;
var KcpObject = /** @class */ (function () {
    function KcpObject() {
        this.mtu = 1350;
        this.tti = 50;
        this.uplinkCapacity = 5;
        this.downlinkCapacity = 20;
        this.congestion = false;
        this.readBufferSize = 2;
        this.writeBufferSize = 2;
        this.header = { type: "none" /* none */ };
    }
    return KcpObject;
}());
exports.KcpObject = KcpObject;
//# sourceMappingURL=kcp.js.map