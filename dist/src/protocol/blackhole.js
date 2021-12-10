"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackholeOutboundObject = void 0;
/**
 * Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站
 * 配合路由（Routing）一起使用，可以达到禁止访问某些网站的效果
 */
var BlackholeOutboundObject = /** @class */ (function () {
    function BlackholeOutboundObject() {
        /**
         * 配置黑洞的响应数据
         *
         * Blackhole 会在收到待转发数据之后，发送指定的响应数据，然后关闭连接
         *
         * 待转发的数据将被丢弃。如不指定此项，Blackhole 将直接关闭连接
         */
        this.response = {
            type: "none" /* none */
        };
    }
    return BlackholeOutboundObject;
}());
exports.BlackholeOutboundObject = BlackholeOutboundObject;
//# sourceMappingURL=blackhole.js.map