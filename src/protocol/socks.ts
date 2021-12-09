/**
 * 标准 Socks 协议实现
 * 兼容 Socks 4 (opens new window)、Socks 4a 和 Socks 5 (opens new window)
 * Socks 的配置分为两部分
 * InboundObject 和 OutboundObject，分别对应入站和出站协议配置中的 settings 项
 */

import { AccountObject } from "../../util";

class SocksUserObject {
    user: string;
    pass: string;
    level: number = 0;

    /**
     * SocksUserObject
     * @param user 用户名
     * @param pass 密码
     */
    constructor(user: string, pass: string) {
        this.user = user;
        this.pass = pass;
    }
}

class SocksServerObject {
    address: string;
    port: number;
    users: SocksUserObject[] = [];

    /**
     * ServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     */
    constructor(address: string, port: number) {
        this.address = address;
        this.port = port;
    }
}

class SocksOutboundObject {
    servers: SocksServerObject[] = [];
    version: "5" | "4a" | "4";

    /**
     * SocksOutbound
     * @param version Socks 协议版本
     */
    constructor(version: "5" | "4a" | "4") {
        this.version = version;
    }
}

const enum SOCKS_AUTH {
    noauth = "noauth",
    password = "password"
}

class SocksInboundObject {
    auth: SOCKS_AUTH = SOCKS_AUTH.noauth;
    accounts: AccountObject[] = [];
    udp: boolean = false;
    ip: string = null;
    userLevel: number = 0;

    /**
     * SocksInboundObject
     * @param ip SOCKS5 通过 UDP ASSOCIATE 命令建立 UDP 会话。服务端在对客户端发来的该命令的回复中，指定客户端发包的目标地址
     */
    constructor(ip: string) {
        this.ip = ip;
    }
}

export { SocksOutboundObject, SocksInboundObject, SOCKS_AUTH, SocksServerObject, SocksUserObject };