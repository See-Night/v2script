"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserForwarderObject = void 0;
/** 浏览器转发模块可以使用浏览器网页页面转发受到支持的连接 */
var BrowserForwarderObject = /** @class */ (function () {
    /**
     * BrowserForwarderObject
     * @param addr 浏览器转发页面的本地监听地址
     * @param port 浏览器转发页面的本地监听端口
     */
    function BrowserForwarderObject(addr, port) {
        this.listenAddr = addr;
        this.listenPort = port;
    }
    return BrowserForwarderObject;
}());
exports.BrowserForwarderObject = BrowserForwarderObject;
//# sourceMappingURL=browserforwarder.js.map