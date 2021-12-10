"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalObject = exports.BridgeObject = exports.ReverseObject = void 0;
/** 反向代理是一个 V2Ray 的附加功能，可以把服务器端的流量向客户端转发，即逆向流量转发 */
var ReverseObject = /** @class */ (function () {
    function ReverseObject() {
        /** 一个数组，每一项表示一个 bridge */
        this.bridges = [];
        /** 一个数组，每一项表示一个 portal */
        this.portals = [];
    }
    return ReverseObject;
}());
exports.ReverseObject = ReverseObject;
/** bridge */
var BridgeObject = /** @class */ (function () {
    /**
     * BridgeObject
     * @param tag 标识
     * @param domain 域名
     */
    function BridgeObject(tag, domain) {
        this.tag = tag;
        this.domain = domain;
    }
    return BridgeObject;
}());
exports.BridgeObject = BridgeObject;
/** portal */
var PortalObject = /** @class */ (function () {
    /**
     * BridgeObject
     * @param tag 标识
     * @param domain 域名
     */
    function PortalObject(tag, domain) {
        this.tag = tag;
        this.domain = domain;
    }
    return PortalObject;
}());
exports.PortalObject = PortalObject;
//# sourceMappingURL=reverse.js.map