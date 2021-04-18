"use strict";
/**
 * VMess 是一个加密传输协议
 * 它分为入站和出站两部分，通常作为 V2Ray 客户端和服务器之间的桥梁
 *
 * VMess 依赖于系统时间
 * 请确保使用 V2Ray 的系统 UTC 时间误差在 90 秒之内，时区无关
 * 在 Linux 系统中可以安装ntp服务来自动同步系统时间
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.vmess_inbound = exports.vmess_outbound = void 0;
var common_1 = require("../common");
var vmess_outbound = /** @class */ (function () {
    /**
     *
     * @param address 服务器地址
     * @param port 服务器端口
     * @param id uuid
     *
     */
    function vmess_outbound(address, port, id, security) {
        if (security === void 0) { security = common_1.VMESSSECURITY.auto; }
        this.vnext = [{
                address: "",
                port: 10080,
                users: [{
                        id: "",
                        alterId: 32,
                        security: common_1.VMESSSECURITY.auto
                    }]
            }];
        this.vnext[0].address = address;
        this.vnext[0].port = port;
        this.vnext[0].users[0].id = id;
        this.vnext[0].users[0].security = security;
    }
    return vmess_outbound;
}());
exports.vmess_outbound = vmess_outbound;
var vmess_inbound = /** @class */ (function () {
    /**
     *
     * @param id uuid
     *
     */
    function vmess_inbound(id) {
        this.clients = [{
                id: "",
                alterId: 32,
            }];
        this.default = {
            alterId: 32
        };
        this.clients[0].id = id;
    }
    return vmess_inbound;
}());
exports.vmess_inbound = vmess_inbound;
//# sourceMappingURL=vmess.js.map