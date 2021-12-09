/**
 * VLESS 是一个无状态的轻量传输协议
 * 它分为入站和出站两部分，可以作为 V2Ray 客户端和服务器之间的桥梁
 * 与 VMess 不同，VLESS 不依赖于系统时间，认证方式同样为 UUID，但不需要 alterId
 */

import { FallbackObject } from "../../util";

class VlessServerObject {
    address: string;
    port: number;
    users: VlessUserObject[] = [];

    /**
     * VlessServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     */
    constructor(address: string, port: number) {
        this.address = address;
        this.port = port;
    }
}

class VlessUserObject {
    id: string;
    encryption: "none" = "none";
    level: number = 0;

    /**
     * VlessUserObject
     * @param id VLESS 的用户 ID
     */
    constructor(id: string) {
        this.id = id;
    }
}

class VlessOutboundObject {
    vnext: VlessServerObject[];

    constructor(servers: VlessServerObject | VlessServerObject[]) {
        if (servers instanceof VlessServerObject) servers = [servers];
        this.vnext = servers;
    }
}

class VlessClientObject {
    id: string;
    level: number = 0;
    email: string;

    /**
     * VlessClientObject
     * @param id VLESS 的用户 ID
     * @param email 用户邮箱
     */
    constructor(id: string, email: string) {
        this.id = id;
        this.email = email;
    }
}

class VlessInboundObject {
    clients: VlessClientObject[] = [];
    fallbacks: FallbackObject[] = [];

    constructor(clients: VlessClientObject | VlessClientObject[], fallbacks: FallbackObject | FallbackObject[]) {
        if (clients instanceof VlessClientObject) clients = [clients];
        if (fallbacks instanceof FallbackObject) fallbacks = [fallbacks];

        this.clients = clients;
        this.fallbacks = fallbacks;
    }
}

export { VlessUserObject, VlessServerObject, VlessClientObject, VlessInboundObject, VlessOutboundObject };