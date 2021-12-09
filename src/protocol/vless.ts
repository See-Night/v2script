import { FallbackObject } from "../../util";

/** Vless 服务器配置 */
class VlessServerObject {
    /** 服务器地址 */
    address: string;

    /** 服务器端口 */
    port: number;

    /** 用户列表 */
    users: VlessUserObject[];

    /**
     * VlessServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     * @param users 用户配置
     */
    constructor(address: string, port: number, users: VlessUserObject | VlessUserObject[]) {
        this.address = address;
        this.port = port;

        if (users instanceof VlessUserObject) users = [users];
        this.users = users;
    }
}

/** 用户配置 */
class VlessUserObject {
    /** VLESS 的用户 ID，必须是一个合法的 UUID */
    id: string;

    /** 现阶段需要填 "none"，不能留空。 */
    encryption: "none" = "none";

    /** 用户等级 */
    level: number = 0;

    /**
     * VlessUserObject
     * @param id VLESS 的用户 ID
     */
    constructor(id: string) {
        this.id = id;
    }
}

/** Vless 出站配置 */
class VlessOutboundObject {
    /** 服务器列表 */
    vnext: VlessServerObject[];

    /**
     * VlessOutboundObject
     * @param servers 服务器配置
     */
    constructor(servers: VlessServerObject | VlessServerObject[]) {
        if (servers instanceof VlessServerObject) servers = [servers];
        this.vnext = servers;
    }
}

/** Vless 客户端配置 */
class VlessClientObject {
    /** VLESS 的用户 ID，必须是一个合法的 UUID */
    id: string;

    /** 用户等级 */
    level: number = 0;

    /** 用户邮箱，用于区分不同用户的流量 */
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

/** Vless 入站配置 */
class VlessInboundObject {
    /** 客户端列表 */
    clients: VlessInboundObject[];

    /** 回落分流列表 */
    fallbacks: FallbackObject[];

    /**
     * VlessInboundObject
     * @param clients 客户端列表
     * @param fallbacks 回落分流列表
     */
    constructor(clients: VlessInboundObject | VlessInboundObject[], fallbacks: FallbackObject | FallbackObject[]) {
        if (clients instanceof VlessInboundObject) clients = [clients];
        if (fallbacks instanceof FallbackObject) fallbacks = [fallbacks];

        this.clients = clients;
        this.fallbacks = fallbacks;
    }
}

export { VlessUserObject, VlessServerObject, VlessClientObject, VlessInboundObject, VlessOutboundObject };