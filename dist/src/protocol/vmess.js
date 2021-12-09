"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VmessServerObject = exports.DefaultObject = exports.DetourObject = exports.VmessClientObject = exports.VmessInboundObject = exports.VmessOutboundObject = exports.VmessUserObject = void 0;
/** Vmess 用户配置 */
var VmessUserObject = /** @class */ (function () {
    /**
     * UserObject
     * @param user 用户名
     * @param pass 密码
     */
    function VmessUserObject(id) {
        /**
         * 为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID
         *
         * 这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD
         *
         * 不指定的话，默认值是 0。最大值 65535。这个值不能超过服务器端所指定的值。
         */
        this.alterId = 0;
        /** 用户等级 */
        this.level = 0;
        /** 加密方式，客户端将使用配置的加密方式发送数据，服务器端自动识别，无需配置 */
        this.security = "auto" /* auto */;
        this.id = id;
    }
    return VmessUserObject;
}());
exports.VmessUserObject = VmessUserObject;
/** Vmess 服务器配置 */
var VmessServerObject = /** @class */ (function () {
    /**
     * ServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     * @param users 用户配置
     */
    function VmessServerObject(address, port, users) {
        this.address = address;
        this.port = port;
        if (users instanceof VmessUserObject)
            users = [users];
        this.users = users;
    }
    return VmessServerObject;
}());
exports.VmessServerObject = VmessServerObject;
/** Vmess 出站配置 */
var VmessOutboundObject = /** @class */ (function () {
    /**
     * VmessOutboundObject
     * @param servers 服务器配置
     */
    function VmessOutboundObject(servers) {
        if (servers instanceof VmessServerObject)
            servers = [servers];
        this.vnext = servers;
    }
    return VmessOutboundObject;
}());
exports.VmessOutboundObject = VmessOutboundObject;
/** Vmess 客户端配置 */
var VmessClientObject = /** @class */ (function () {
    /**
     * VmessClientObject
     * @param id VMess 的用户 ID
     * @param email 用户邮箱地址，用于区分不同用户的流量
     */
    function VmessClientObject(id, email) {
        /** 用户等级 */
        this.level = 0;
        /**
         * 为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID
         *
         * 这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD
         *
         * 不指定的话，默认值是 0。最大值 65535。这个值不能超过服务器端所指定的值。
         */
        this.alterId = 0;
        this.id = id;
        this.email = email;
    }
    return VmessClientObject;
}());
exports.VmessClientObject = VmessClientObject;
/** 指示对应的出站协议使用另一个服务器 */
var DetourObject = /** @class */ (function () {
    /**
     * DetourObject
     * @param to 一个入站协议的tag
     */
    function DetourObject(to) {
        this.to = to;
    }
    return DetourObject;
}());
exports.DetourObject = DetourObject;
/** clients 的默认配置。仅在配合detour时有效 */
var DefaultObject = /** @class */ (function () {
    function DefaultObject() {
        /** 用户等级 */
        this.level = 0;
        /**
         * 为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID
         *
         * 这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD
         *
         * 不指定的话，默认值是 0。最大值 65535。这个值不能超过服务器端所指定的值。
         */
        this.alterId = 0;
    }
    return DefaultObject;
}());
exports.DefaultObject = DefaultObject;
/** Vmess 入站配置 */
var VmessInboundObject = /** @class */ (function () {
    /**
     * VmessInboundObject
     * @param clients 客户端配置
     */
    function VmessInboundObject(clients) {
        /** 指示对应的出站协议使用另一个服务器 */
        this.detour = null;
        /** clients 的默认配置。仅在配合detour时有效 */
        this.default = null;
        /**
         * 是否禁止客户端使用不安全的加密方式
         *
         * 当客户端指定下列加密方式时，服务器会主动断开连接
         * * `none`
         * * `aes-128-cfb`
         */
        this.disableInsecureEncryption = false;
        if (clients instanceof VmessClientObject)
            clients = [clients];
        this.clients = clients;
    }
    return VmessInboundObject;
}());
exports.VmessInboundObject = VmessInboundObject;
//# sourceMappingURL=vmess.js.map