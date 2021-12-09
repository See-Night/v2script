"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrojanOutboundObject = exports.TrojanInboundObject = exports.TrojanServerObject = exports.TrojanClientObject = void 0;
var lib_1 = require("../../lib");
/** Trojan 客户端配置 */
var TrojanClientObject = /** @class */ (function () {
    /**
     * TrojanClientObject
     * @param email 邮件地址
     * @param password 密码
     */
    function TrojanClientObject(email, password) {
        /** 用户等级 */
        this.level = 0;
        this.password = password;
        this.email = email;
    }
    return TrojanClientObject;
}());
exports.TrojanClientObject = TrojanClientObject;
/** Trojan 服务器配置 */
var TrojanServerObject = /** @class */ (function () {
    /**
     * TrojanServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     * @param email 邮件地址
     * @param password 密码
     */
    function TrojanServerObject(address, port, email, password) {
        /** 用户等级 */
        this.level = 0;
        this.address = address;
        this.port = port;
        this.email = email;
        this.password = password;
    }
    return TrojanServerObject;
}());
exports.TrojanServerObject = TrojanServerObject;
/** Trojan 入站配置 */
var TrojanInboundObject = /** @class */ (function () {
    /**
     * TrojanInboundObject
     * @param clients 客户端列表
     * @param fallbacks 回落分流列表
     */
    function TrojanInboundObject(clients, fallbacks) {
        if (clients instanceof TrojanClientObject)
            clients = [clients];
        if (fallbacks instanceof lib_1.FallbackObject)
            fallbacks = [fallbacks];
        this.clients = clients;
        this.fallbacks = fallbacks;
    }
    return TrojanInboundObject;
}());
exports.TrojanInboundObject = TrojanInboundObject;
/** Trojan 出站配置 */
var TrojanOutboundObject = /** @class */ (function () {
    /**
     * TrojanOutboundObject
     * @param servers 服务器配置
     */
    function TrojanOutboundObject(servers) {
        if (servers instanceof TrojanServerObject)
            servers = [servers];
        this.servers = servers;
    }
    return TrojanOutboundObject;
}());
exports.TrojanOutboundObject = TrojanOutboundObject;
//# sourceMappingURL=trojan.js.map