/**
 * HTTP 的配置分为两部分，InboundObject 和 OutboundObject，分别对应入站和出站协议配置中的 settings 项
 */
import { AccountObject } from "../../util";
declare class HTTPInboundObject {
    timeout: number;
    accounts: AccountObject[];
    allowTransparent: boolean;
    userLevel: number;
}
declare class HTTPOutboundObject {
    servers: {
        address: string;
        port: number;
        users: AccountObject[];
    }[];
}
declare class HTTPUserObject {
    user: string;
    pass: string;
    userLevel: number;
    /**
     * UserObject
     * @param user 用户名
     * @param pass 密码
     */
    constructor(user: string, pass: string);
}
export { HTTPInboundObject, HTTPOutboundObject, HTTPUserObject };
