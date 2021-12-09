"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemPolicyObject = exports.LevelPolicyObject = exports.PolicyObject = void 0;
/**
 * 本地策略可以配置一些用户相关的权限，比如连接超时设置
 *
 * V2Ray 处理的每一个连接都对应一个用户，按照用户的等级（level）应用不同的策略,
 * 本地策略可根据等级的不同而变化
 */
var PolicyObject = /** @class */ (function () {
    function PolicyObject() {
        /**
         * 一组键值对，每个键是一个字符串形式的数字（JSON 的要求）,
         * 比如 "0"、"1" 等，双引号不能省略，此数字对应用户等级
         *
         * 每一个值是一个 LevelPolicyObject
         *
         * 此属性为私有属性，不支持直接调用，如需更改请使用 `setLevel()` 或 `removeLevel()` 方法
         */
        this.levels = new Map([["0", new LevelPolicyObject()]]);
        this.system = new SystemPolicyObject();
    }
    /**
     * 设置本地策略
     * @param level 策略等级，其值为一个字符串
     * @param policy 策略内容，其值为一个 LevelPolicyObject 对象
     * @returns 当前对象
     */
    PolicyObject.prototype.setLevel = function (level, policy) {
        this.levels.set(level, policy);
        return this;
    };
    /**
     * 删除本地策略
     * @param level 策略等级，其值为一个字符串
     * @returns 当前对象
     */
    PolicyObject.prototype.removeLevel = function (level) {
        this.levels.delete(level);
        return this;
    };
    return PolicyObject;
}());
exports.PolicyObject = PolicyObject;
/**
 * 策略配置
 */
var LevelPolicyObject = /** @class */ (function () {
    function LevelPolicyObject() {
        /**
         * 连接建立时的握手时间限制
         *
         * 单位为秒。默认值为 4
         *
         * 在入站代理处理一个新连接时，在握手阶段（比如 VMess 读取头部数据，判断目标服务器地址），
         * 如果使用的时间超过这个时间，则中断该连接
         */
        this.handshake = 4;
        /**
         * 连接空闲的时间限制
         *
         * 单位为秒。默认值为 300
         *
         * 在入站出站代理处理一个连接时，如果在 connIdle 时间内，没有任何数据被传输（包括上行和下行数据），则中断该连接
         */
        this.connIdle = 300;
        /**
         * 当连接下行线路关闭后的时间限制
         *
         * 单位为秒。默认值为 2
         *
         * 当服务器（如远端网站）关闭下行连接时，出站代理会在等待 `uplinkOnly` 时间后中断连接
         */
        this.uplinkOnly = 2;
        /**
         * 当连接上行线路关闭后的时间限制
         *
         * 单位为秒。默认值为 5
         *
         * 当客户端（如浏览器）关闭上行连接时，入站代理会在等待 `downlinkOnly` 时间后中断连接
         */
        this.downlinkOnly = 5;
        /**
         * 当值为 `true` 时，开启当前等级的所有用户的上行流量统计
         */
        this.statsUserUplink = false;
        /**
         * 当值为 `true` 时，开启当前等级的所有用户的下行流量统计
         */
        this.statsUserDownlink = false;
        /**
         * 每个连接的内部缓存大小。单位为 kB。当值为 0 时，内部缓存被禁用
         *
         * 默认值 (V2Ray 4.4+):
         * * 在 ARM、MIPS、MIPSLE 平台上，默认值为 0。
         * * 在 ARM64、MIPS64、MIPS64LE 平台上，默认值为 4。
         * * 在其它平台上，默认值为 512。
         *
         * 默认值 (V2Ray 4.3-):
         * * 在 ARM、MIPS、MIPSLE、ARM64、MIPS64、MIPS64LE 平台上，默认值为 16。
         * * 在其它平台上，默认值为 2048。
         */
        this.bufferSize = 512;
    }
    return LevelPolicyObject;
}());
exports.LevelPolicyObject = LevelPolicyObject;
/**
 * V2Ray 系统的策略
 */
var SystemPolicyObject = /** @class */ (function () {
    function SystemPolicyObject() {
        /** 当值为 true 时，开启所有入站代理的上行流量统计 */
        this.statsInboundUplink = false;
        /** 当值为 true 时，开启所有入站代理的下行流量统计 */
        this.statsInboundDownlink = false;
        /** （ V2Ray 4.26.0+ ）当值为 true 时，开启所有出站代理的上行流量统计 */
        this.statsOutboundUplink = false;
        /** （ V2Ray 4.26.0+ ） 当值为 true 时，开启所有出站代理的下行流量统计 */
        this.statsOutboundDownlink = false;
    }
    return SystemPolicyObject;
}());
exports.SystemPolicyObject = SystemPolicyObject;
//# sourceMappingURL=policy.js.map