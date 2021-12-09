/** 浏览器转发模块可以使用浏览器网页页面转发受到支持的连接 */
export declare class BrowserForwarderObject {
    /** 浏览器转发页面的本地监听地址 */
    listenAddr: string;
    /** 浏览器转发页面的本地监听端口 */
    listenPort: number;
    /**
     * BrowserForwarderObject
     * @param addr 浏览器转发页面的本地监听地址
     * @param port 浏览器转发页面的本地监听端口
     */
    constructor(addr: string, port: number);
}
