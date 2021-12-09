"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUICObject = void 0;
/**
 * QUIC 全称 Quick UDP Internet Connection，是由 Google 提出的使用 UDP 进行多路并发传输的协议。其主要优势是:
 * * 减少了握手的延迟（1-RTT 或 0-RTT）
 * * 多路复用，并且没有 TCP 的阻塞问题
 * * 连接迁移，（主要是在客户端）当由 Wifi 转移到 4G 时，连接不会被断开。
 */
var QUICObject = /** @class */ (function () {
    function QUICObject() {
        /**
         * 加密方式。默认值为不加密
         *
         * 此加密是对 QUIC 数据包的加密，加密后数据包无法被探测
         */
        this.security = "none" /* none */;
        /**
         * 加密时所用的密钥。可以是任意字符串
         *
         * 当 security 不为 `none` 时有效
         */
        this.key = "";
        /** 数据包头部伪装设置 */
        this.header = "none" /* none */;
    }
    return QUICObject;
}());
exports.QUICObject = QUICObject;
//# sourceMappingURL=quic.js.map