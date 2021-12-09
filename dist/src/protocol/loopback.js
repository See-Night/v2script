"use strict";
/**
 * Loopback 是一个出站协议，可使出站连接被重新路由
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoopbackOutboundObject = void 0;
var LoopbackOutboundObject = /** @class */ (function () {
    /**
     * LoopbackOutboundObject
     * @param inboundTag 匹配入站来源的标识
     */
    function LoopbackOutboundObject(inboundTag) {
        this.inboundTag = inboundTag;
    }
    return LoopbackOutboundObject;
}());
exports.LoopbackOutboundObject = LoopbackOutboundObject;
//# sourceMappingURL=loopback.js.map