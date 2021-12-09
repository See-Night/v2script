"use strict";
/**
 * 当前连接的 WebSocket 配置，仅当此连接使用 WebSocket 时有效
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketObject = void 0;
var WebSocketObject = /** @class */ (function () {
    function WebSocketObject() {
        this.acceptProxyProtocol = false;
        this.path = "/";
        this.headers = {};
        this.maxEarlyData = 1024;
        this.useBrowserForwarding = false;
        this.earlyDataHeaderName = "";
    }
    return WebSocketObject;
}());
exports.WebSocketObject = WebSocketObject;
//# sourceMappingURL=websocket.js.map