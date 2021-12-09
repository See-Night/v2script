import { AccountObject } from "../../lib";
/** HTTP 入站配置 */
declare class HTTPInboundObject {
    /** 从客户端读取数据的超时设置（秒），`0` 表示不限时 */
    timeout: number;
    /**
     * 一个数组，数组中每个元素为一个用户帐号。默认值为空
     *
     * 当 accounts 非空时，HTTP 代理将对入站连接进行 `Basic Authentication` 验证
     */
    accounts: AccountObject[];
    /** 当为 `true` 时，会转发所有 HTTP 请求，而非只是代理请求。若配置不当，开启此选项会导致死循环 */
    allowTransparent: boolean;
    /** 用户等级，所有连接使用这一等级 */
    userLevel: number;
}
/** HTTP 出站配置 */
declare class HTTPOutboundObject {
    /** HTTP 代理服务器配置，若配置多个，循环使用 (RoundRobin) */
    servers: HTTPServerObject[];
    /**
     * HTTPOutboundObject
     * @param servers HTTP 代理服务器配置
     */
    constructor(servers: HTTPServerObject | HTTPServerObject[]);
}
/** HTTP 代理服务器配置 */
declare class HTTPServerObject {
    /** HTTP 代理服务器地址 */
    address: string;
    /** HTTP 代理服务器端口 */
    port: number;
    /** 一个数组，数组中每个元素为一个用户帐号 */
    users: AccountObject[];
    /**
     * HTTPServerObject
     * @param address HTTP 代理服务器地址
     * @param port HTTP 代理服务器端口
     * @param users 用户帐号
     */
    constructor(address: string, port: number, users?: AccountObject | AccountObject[]);
}
/** 用户帐号 */
declare class HTTPUserObject {
    /** 用户名 */
    user: string;
    /** 密码 */
    pass: string;
    /** 用户等级 */
    userLevel: number;
    /**
     * UserObject
     * @param user 用户名
     * @param pass 密码
     */
    constructor(user: string, pass: string);
}
export { HTTPInboundObject, HTTPOutboundObject, HTTPUserObject, HTTPServerObject };
