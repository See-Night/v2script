"use strict";
/**
 * VLESS 是一个无状态的轻量传输协议
 * 它分为入站和出站两部分，可以作为 V2Ray 客户端和服务器之间的桥梁
 * 与 VMess 不同，VLESS 不依赖于系统时间，认证方式同样为 UUID，但不需要 alterId
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VlessOutboundObject = exports.VlessInboundObject = exports.VlessClientObject = exports.VlessServerObject = exports.VlessUserObject = void 0;
var VlessServerObject = /** @class */ (function () {
    /**
     * VlessServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     */
    function VlessServerObject(address, port) {
        this.users = [];
        this.address = address;
        this.port = port;
    }
    return VlessServerObject;
}());
exports.VlessServerObject = VlessServerObject;
var VlessUserObject = /** @class */ (function () {
    /**
     * VlessUserObject
     * @param id VLESS 的用户 ID
     */
    function VlessUserObject(id) {
        this.encryption = "none";
        this.level = 0;
        this.id = id;
    }
    return VlessUserObject;
}());
exports.VlessUserObject = VlessUserObject;
var VlessOutboundObject = /** @class */ (function () {
    function VlessOutboundObject() {
        this.vnext = [];
    }
    return VlessOutboundObject;
}());
exports.VlessOutboundObject = VlessOutboundObject;
var VlessClientObject = /** @class */ (function () {
    /**
     * VlessClientObject
     * @param id VLESS 的用户 ID
     * @param email 用户邮箱
     */
    function VlessClientObject(id, email) {
        this.level = 0;
        this.id = id;
        this.email = email;
    }
    return VlessClientObject;
}());
exports.VlessClientObject = VlessClientObject;
var VlessInboundObject = /** @class */ (function () {
    function VlessInboundObject() {
        this.clients = [];
        this.fallbacks = [];
    }
    return VlessInboundObject;
}());
exports.VlessInboundObject = VlessInboundObject;
//# sourceMappingURL=vless.js.map