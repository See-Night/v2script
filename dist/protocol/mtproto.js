"use strict";
/**
 * MTProto 是一个 Telegram 专用的代理协议
 * 在 V2Ray 中可使用一组入站出站代理来完成 Telegram 数据的代理任务
 * 目前只支持转发到 Telegram 的 IPv4 地址。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mtproto_outbound = exports.mtproto_inbound = void 0;
var mtproto_inbound = /** @class */ (function () {
    /**
     * @param secret 用户密钥。必须为 32 个字符，仅可包含0到9和a到f之间的字符
     */
    function mtproto_inbound(secret) {
        this.users = [];
        this.users.push({ secret: secret });
    }
    return mtproto_inbound;
}());
exports.mtproto_inbound = mtproto_inbound;
var mtproto_outbound = /** @class */ (function () {
    function mtproto_outbound() {
    }
    return mtproto_outbound;
}());
exports.mtproto_outbound = mtproto_outbound;
//# sourceMappingURL=mtproto.js.map