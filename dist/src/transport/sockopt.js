"use strict";
/**
 * 用作透明代理的配置
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SockoptObject = void 0;
var SockoptObject = /** @class */ (function () {
    function SockoptObject() {
        this.mark = 0;
        this.tcpFastOpen = false;
        this.tcpFastOpenQueueLength = 4096;
        this.tproxy = "off" /* off */;
        this.tcpKeepAliveInterval = 0;
    }
    return SockoptObject;
}());
exports.SockoptObject = SockoptObject;
//# sourceMappingURL=sockopt.js.map