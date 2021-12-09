/**
 * 一种无法识别的机制，可以帮助您绕过GFW
 * Trojan 通过TLS提供多种协议，可避免主动/被动检测和ISP QoS限制
 * Trojan 程序不是固定的程序或协议
 * 这是一个想法，一个模仿最常见的服务的想法
 * 在某种程度上，它的行为相同，可以帮助你永久地越过长城防火墙，永远不会被识别出来
 * 我们是烈火；我们运送特洛伊木马
 * 
 * 以上机翻自 https://github.com/trojan-gfw/trojan
 */

import { FallbackObject } from "../../util";

class TrojanClientObject {
    password: string;
    email: string;
    level: number = 0;

    /**
     * TrojanClientObject
     * @param email 邮件地址
     * @param password 密码
     */
    constructor(email: string, password: string) {
        this.password = password;
        this.email = email;
    }
}

class TrojanServerObject {
    address: string;
    port: number;
    email: string;
    password: string;
    level: number = 0;

    /**
     * TrojanServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     * @param email 邮件地址
     * @param password 密码
     */
    constructor(address: string, port: number, email: string, password: string) {
        this.address = address;
        this.port = port;
        this.email = email;
        this.password = password;
    }
}

class TrojanInboundObject {
    clients: TrojanClientObject[];
    fallbacks: FallbackObject[];

    constructor(clients: TrojanClientObject | TrojanClientObject[], fallbacks: FallbackObject | FallbackObject[]) {
        if (clients instanceof TrojanClientObject) clients = [clients];
        if (fallbacks instanceof FallbackObject) fallbacks = [fallbacks];

        this.clients = clients;
        this.fallbacks = fallbacks;
    }
}

class TrojanOutboundObject {
    servers: TrojanServerObject[];

    constructor(servers: TrojanServerObject | TrojanServerObject[]) {
        if (servers instanceof TrojanServerObject) servers = [servers];
        this.servers = servers;
    }
}

export { TrojanClientObject, TrojanServerObject, TrojanInboundObject, TrojanOutboundObject };