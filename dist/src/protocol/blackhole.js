"use strict";
/**
 * Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站
 * 配合路由（Routing）一起使用，可以达到禁止访问某些网站的效果
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackholeOutboundObject = void 0;
var BlackholeOutboundObject = /** @class */ (function () {
    function BlackholeOutboundObject() {
        this.response = {
            type: "none" /* none */
        };
    }
    return BlackholeOutboundObject;
}());
exports.BlackholeOutboundObject = BlackholeOutboundObject;
//# sourceMappingURL=blackhole.js.map