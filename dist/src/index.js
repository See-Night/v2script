"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v2ray = void 0;
var configuration_1 = require("./configuration");
/** v2ray */
var v2ray = /** @class */ (function () {
    /**
     * v2ray
     * @param inbounds 入站连接配置
     * @param outbounds 出站连接配置
     */
    function v2ray(inbounds, outbounds) {
        /** 日志配置，表示 V2Ray 如何输出日志 */
        this.log = new configuration_1.LogObject();
        /** 远程控制 */
        this.api = null;
        /** 内置的 DNS 服务器，若此项不存在，则默认使用本机的 DNS 设置 */
        this.dns = null;
        /** 路由功能 */
        this.routing = null;
        /** 本地策略，可进行一些权限相关的配置 */
        this.policy = new configuration_1.PolicyObject();
        /** 用于配置 V2Ray 如何与其它服务器建立和使用网络连接 */
        this.transport = null;
        /** 统计信息 */
        this.stats = new configuration_1.StatsObject();
        /** 反向代理 */
        this.reverse = null;
        /** 虚拟 DNS 服务器 */
        this.fakedns = [];
        /** 浏览器转发模块 */
        this.browserForwarder = null;
        /** 连接观测模块 */
        this.observatory = null;
        if (inbounds instanceof configuration_1.InboundObject)
            inbounds = [inbounds];
        if (outbounds instanceof configuration_1.OutboundObject)
            outbounds = [outbounds];
        this.inbounds = inbounds;
        this.outbounds = outbounds;
    }
    return v2ray;
}());
exports.v2ray = v2ray;
//# sourceMappingURL=index.js.map