"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VlessOutboundObject = exports.VlessInboundObject = exports.VlessClientObject = exports.VlessServerObject = exports.VlessUserObject = void 0;
var util_1 = require("../../util");
/** Vless 服务器配置 */
var VlessServerObject = /** @class */ (function () {
    /**
     * VlessServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     * @param users 用户配置
     */
    function VlessServerObject(address, port, users) {
        this.address = address;
        this.port = port;
        if (users instanceof VlessUserObject)
            users = [users];
        this.users = users;
    }
    return VlessServerObject;
}());
exports.VlessServerObject = VlessServerObject;
/** 用户配置 */
var VlessUserObject = /** @class */ (function () {
    /**
     * VlessUserObject
     * @param id VLESS 的用户 ID
     */
    function VlessUserObject(id) {
        /** 现阶段需要填 "none"，不能留空。 */
        this.encryption = "none";
        /** 用户等级 */
        this.level = 0;
        this.id = id;
    }
    return VlessUserObject;
}());
exports.VlessUserObject = VlessUserObject;
/** Vless 出站配置 */
var VlessOutboundObject = /** @class */ (function () {
    /**
     * VlessOutboundObject
     * @param servers 服务器配置
     */
    function VlessOutboundObject(servers) {
        if (servers instanceof VlessServerObject)
            servers = [servers];
        this.vnext = servers;
    }
    return VlessOutboundObject;
}());
exports.VlessOutboundObject = VlessOutboundObject;
/** Vless 客户端配置 */
var VlessClientObject = /** @class */ (function () {
    /**
     * VlessClientObject
     * @param id VLESS 的用户 ID
     * @param email 用户邮箱
     */
    function VlessClientObject(id, email) {
        /** 用户等级 */
        this.level = 0;
        this.id = id;
        this.email = email;
    }
    return VlessClientObject;
}());
exports.VlessClientObject = VlessClientObject;
/** Vless 入站配置 */
var VlessInboundObject = /** @class */ (function () {
    /**
     * VlessInboundObject
     * @param clients 客户端列表
     * @param fallbacks 回落分流列表
     */
    function VlessInboundObject(clients, fallbacks) {
        if (clients instanceof VlessInboundObject)
            clients = [clients];
        if (fallbacks instanceof util_1.FallbackObject)
            fallbacks = [fallbacks];
        this.clients = clients;
        this.fallbacks = fallbacks;
    }
    return VlessInboundObject;
}());
exports.VlessInboundObject = VlessInboundObject;
//# sourceMappingURL=vless.js.map