import { AccountObject } from "../../util";
/** 用户配置 */
declare class SocksUserObject {
    /** 用户名 */
    user: string;
    /** 密码 */
    pass: string;
    /** 用户等级 */
    level: number;
    /**
     * SocksUserObject
     * @param user 用户名
     * @param pass 密码
     */
    constructor(user: string, pass: string);
}
/** Socks 服务器配置 */
declare class SocksServerObject {
    /** 服务器地址 */
    address: string;
    /** 服务器端口 */
    port: number;
    /** 用户列表 */
    users: SocksUserObject[];
    /**
     * ServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     */
    constructor(address: string, port: number);
}
/** Socks 出站配置 */
declare class SocksOutboundObject {
    /** 服务器列表 */
    servers: SocksServerObject[];
    /** Socks 版本 */
    version: "5" | "4a" | "4";
    /**
     * SocksOutbound
     * @param version Socks 协议版本
     */
    constructor(version: "5" | "4a" | "4", servers: SocksServerObject | SocksServerObject[]);
}
/** Socks 认证方法 */
declare const enum SOCKS_AUTH {
    /** 不认证 */
    noauth = "noauth",
    /** 密码认证 */
    password = "password"
}
/** Socks 入站配置 */
declare class SocksInboundObject {
    /** 认证方法 */
    auth: SOCKS_AUTH;
    /**
     * 一个数组，数组中每个元素为一个用户帐号
     * 此选项仅当 auth 为 password 时有效。
     */
    accounts: AccountObject[];
    /** 是否开启 UDP 协议的支持 */
    udp: boolean;
    /**
     * SOCKS5 通过 UDP ASSOCIATE 命令建立 UDP 会话。服务端在对客户端发来的该命令的回复中，指定客户端发包的目标地址
     *
     * v4.34.0+: 默认值为空，此时对于通过本地回环 IPv4/IPv6 连接的客户端，
     * 回复对应的回环 IPv4/IPv6 地址；对于非本机的客户端，回复当前入站的监听地址
     *
     * v4.33.0 及更早版本: 默认值 127.0.0.1。
     * 你可以通过配置此项使 V2Ray 固定回复你配置的地址。如果你不知道此项的作用，留空即可
     */
    ip: string;
    /** 用户等级 */
    userLevel: number;
    /**
     * SocksInboundObject
     * @param auth 认证方法
     * @param account 用户列表
     */
    constructor(auth?: SOCKS_AUTH, account?: AccountObject | AccountObject[]);
}
export { SocksOutboundObject, SocksInboundObject, SOCKS_AUTH, SocksServerObject, SocksUserObject };
