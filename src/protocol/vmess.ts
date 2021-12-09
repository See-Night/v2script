/**
 * VMess 是一个加密传输协议
 * 它分为入站和出站两部分，通常作为 V2Ray 客户端和服务器之间的桥梁
 * VMess 依赖于系统时间，请确保使用 V2Ray 的系统 UTC 时间误差在 90 秒之内，时区无关
 * 在 Linux 系统中可以安装ntp服务来自动同步系统时间
 */

const enum VMESS_SECURITY {
    aes_128_gcm = "aes-128-gcm",
    chacha20_poly1305 = "chacha20-poly1305",
    auto = "auto",
    none = "none",
    zero = "zero"
}

class VmessUserObject {
    id: string;
    alterId: number = 0;
    level: number = 0;
    security: VMESS_SECURITY = VMESS_SECURITY.auto;

    /**
     * UserObject 
     * @param user 用户名
     * @param pass 密码
     */
    constructor(id: string) {
        this.id = id;
    }
}

class VmessServerObject {
    address: string;
    port: number;
    users: VmessUserObject[] =[];

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

class VmessOutboundObject {
    vnext: VmessServerObject[];

    constructor(servers: VmessServerObject | VmessServerObject[]) {
        if (servers instanceof VmessServerObject) servers = [servers];
        this.vnext = servers;
    }
}

class VmessClientObject {
    id: string;
    level: number = 0;
    alterId: number = 0;
    email: string;

    /**
     * VmessClientObject
     * @param id VMess 的用户 ID
     * @param email 用户邮箱地址，用于区分不同用户的流量
     */
    constructor(id: string, email: string) {
        this.id = id;
        this.email = email;
    }
}

class DetourObject {
    to: string;

    /**
     * DetourObject
     * @param to 一个入站协议的tag，一个入站协议的tag
     */
    constructor(to: string) {
        this.to = to;
    }
}

class DefaultObject {
    level: number = 0;
    alterId: number = 0;
}

class VmessInboundObject {
    clients: VmessClientObject[];
    detour: DetourObject = null;
    default: DefaultObject = null;
    disableInsecureEncryption: boolean = false;

    constructor(clients: VmessClientObject | VmessClientObject[]) {
        if (clients instanceof VmessClientObject) clients = [clients];
        this.clients = clients;
    }
}

export { VmessUserObject, VMESS_SECURITY, VmessOutboundObject, VmessInboundObject, VmessClientObject, DetourObject, DefaultObject, VmessServerObject };