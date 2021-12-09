"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservatoryObject = void 0;
/**
 * 连接观测组件通过定时通过指定的出站连接建立连接来确定出站代理的状态
 *
 * (v4.38.0+) 连接观测组件的观测结果可以被其他组件使用，如负载均衡程序及API
 *
 * 默认连接 api.v2fly.org 进行连接状态检测
 *
 * 由于探测连接会定时发出，此功能可能会使处于特权网络路径的攻击者获得更多信息，请酌情使用
 */
var ObservatoryObject = /** @class */ (function () {
    /**
     * ObservatoryObject
     * @param probeURL 用于检测连接状态的网址
     * @param probeInterval 发起探测的间隔
     */
    function ObservatoryObject(probeURL, probeInterval) {
        /**
         * 一个字符串数组，其中每一个字符串将用于和出站协议标识的前缀匹配
         *
         * 在以下几个出站协议标识中：`[ "a", "ab", "c", "ba" ]`，`"selector": ["a"]` 将匹配到 `[ "a", "ab" ]`。
         * 被匹配到的出站连接将被定时连接以确定是否可用
         */
        this.subjectSelector = [];
        this.probeInterval = probeInterval;
        this.probeURL = probeURL;
    }
    return ObservatoryObject;
}());
exports.ObservatoryObject = ObservatoryObject;
//# sourceMappingURL=observatory.js.map