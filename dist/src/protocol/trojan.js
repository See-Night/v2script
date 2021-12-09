"use strict";
/**
 * 一种无法识别的机制，可以帮助您绕过GFW
 * Trojan 通过TLS提供多种协议，可避免主动/被动检测和ISP QoS限制
 * Trojan 程序不是固定的程序或协议
 * 这是一个想法，一个模仿最常见的服务的想法
 * 在某种程度上，它的行为相同，可以帮助你永久地越过长城防火墙，永远不会被识别出来
 * 我们是烈火；我们运送特洛伊木马
 *
 * 以上机翻自 https://github.com/trojan-gfw/trojan
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrojanOutboundObject = exports.TrojanInboundObject = exports.TrojanServerObject = exports.TrojanClientObject = void 0;
var TrojanClientObject = /** @class */ (function () {
    /**
     * TrojanClientObject
     * @param email 邮件地址
     * @param password 密码
     */
    function TrojanClientObject(email, password) {
        this.level = 0;
        this.password = password;
        this.email = email;
    }
    return TrojanClientObject;
}());
exports.TrojanClientObject = TrojanClientObject;
var TrojanServerObject = /** @class */ (function () {
    /**
     * TrojanServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     * @param email 邮件地址
     * @param password 密码
     */
    function TrojanServerObject(address, port, email, password) {
        this.level = 0;
        this.address = address;
        this.port = port;
        this.email = email;
        this.password = password;
    }
    return TrojanServerObject;
}());
exports.TrojanServerObject = TrojanServerObject;
var TrojanInboundObject = /** @class */ (function () {
    function TrojanInboundObject() {
        this.clients = [];
        this.fallbacks = [];
    }
    return TrojanInboundObject;
}());
exports.TrojanInboundObject = TrojanInboundObject;
var TrojanOutboundObject = /** @class */ (function () {
    function TrojanOutboundObject() {
        this.servers = [];
    }
    return TrojanOutboundObject;
}());
exports.TrojanOutboundObject = TrojanOutboundObject;
//# sourceMappingURL=trojan.js.map