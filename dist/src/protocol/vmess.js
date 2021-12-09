"use strict";
/**
 * VMess 是一个加密传输协议
 * 它分为入站和出站两部分，通常作为 V2Ray 客户端和服务器之间的桥梁
 * VMess 依赖于系统时间，请确保使用 V2Ray 的系统 UTC 时间误差在 90 秒之内，时区无关
 * 在 Linux 系统中可以安装ntp服务来自动同步系统时间
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VmessServerObject = exports.DefaultObject = exports.DetourObject = exports.VmessClientObject = exports.VmessInboundObject = exports.VmessOutboundObject = exports.VmessUserObject = void 0;
var VmessUserObject = /** @class */ (function () {
    /**
     * UserObject
     * @param user 用户名
     * @param pass 密码
     */
    function VmessUserObject(id) {
        this.alterId = 0;
        this.level = 0;
        this.security = "auto" /* auto */;
        this.id = id;
    }
    return VmessUserObject;
}());
exports.VmessUserObject = VmessUserObject;
var VmessServerObject = /** @class */ (function () {
    /**
     * ServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     */
    function VmessServerObject(address, port) {
        this.users = [];
        this.address = address;
        this.port = port;
    }
    return VmessServerObject;
}());
exports.VmessServerObject = VmessServerObject;
var VmessOutboundObject = /** @class */ (function () {
    function VmessOutboundObject() {
        this.vnext = [];
    }
    return VmessOutboundObject;
}());
exports.VmessOutboundObject = VmessOutboundObject;
var VmessClientObject = /** @class */ (function () {
    /**
     * VmessClientObject
     * @param id VMess 的用户 ID
     * @param email 用户邮箱地址，用于区分不同用户的流量
     */
    function VmessClientObject(id, email) {
        this.level = 0;
        this.alterId = 0;
        this.id = id;
        this.email = email;
    }
    return VmessClientObject;
}());
exports.VmessClientObject = VmessClientObject;
var DetourObject = /** @class */ (function () {
    /**
     * DetourObject
     * @param to 一个入站协议的tag，一个入站协议的tag
     */
    function DetourObject(to) {
        this.to = to;
    }
    return DetourObject;
}());
exports.DetourObject = DetourObject;
var DefaultObject = /** @class */ (function () {
    function DefaultObject() {
        this.level = 0;
        this.alterId = 0;
    }
    return DefaultObject;
}());
exports.DefaultObject = DefaultObject;
var VmessInboundObject = /** @class */ (function () {
    function VmessInboundObject() {
        this.clients = [];
        this.detour = null;
        this.default = null;
        this.disableInsecureEncryption = false;
    }
    return VmessInboundObject;
}());
exports.VmessInboundObject = VmessInboundObject;
//# sourceMappingURL=vmess.js.map