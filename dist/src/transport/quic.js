"use strict";
/**
 * 当前连接的 QUIC 配置，仅当此连接使用 QUIC 时有效
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUICObject = void 0;
var QUICObject = /** @class */ (function () {
    function QUICObject() {
        this.security = "none" /* none */;
        this.key = "";
        this.header = "none" /* none */;
    }
    return QUICObject;
}());
exports.QUICObject = QUICObject;
//# sourceMappingURL=quic.js.map