/**
 * HTTP 的配置分为两部分，InboundObject 和 OutboundObject，分别对应入站和出站协议配置中的 settings 项
 */

import { AccountObject } from "../../util";

class HTTPInboundObject {
    timeout: number = 300;
    accounts: AccountObject[] = [];
    allowTransparent: boolean = false;
    userLevel: number = 0;
}

class HTTPOutboundObject {
    servers: {
        address: string,
        port: number,
        users: AccountObject[]
    } [] = []
}

class HTTPUserObject {
    user: string;
    pass: string;
    userLevel: number = 0;

    /**
     * UserObject 
     * @param user 用户名
     * @param pass 密码
     */
    constructor(user: string, pass: string) {
        this.user = user;
        this.pass = pass;
    }
}

export { HTTPInboundObject, HTTPOutboundObject, HTTPUserObject };