"use strict";
/**
 * Blackhole（黑洞）是一个出站数据协议
 * 它会阻碍所有数据的出站
 * 配合路由（Routing）一起使用，可以达到禁止访问某些网站的效果。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.blackhole_outbound = void 0;
var blackhole_outbound = /** @class */ (function () {
    function blackhole_outbound(type) {
        if (type === void 0) { type = "none"; }
        this.response = {
            type: 'none'
        };
        this.response.type = type;
    }
    return blackhole_outbound;
}());
exports.blackhole_outbound = blackhole_outbound;
//# sourceMappingURL=blackhole.js.map