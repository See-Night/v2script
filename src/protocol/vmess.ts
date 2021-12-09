/** VMESS 加密方法 */
const enum VMESS_SECURITY {
    /** 推荐在 PC 上使用 */
    aes_128_gcm = "aes-128-gcm",

    /** 推荐在手机端使用 */
    chacha20_poly1305 = "chacha20-poly1305",

    /** 自动选择（运行框架为 AMD64、ARM64 或 s390x 时为 aes-128-gcm 加密方式，其他情况则为 Chacha20-Poly1305 加密方式） */
    auto = "auto",

    /** 不加密 */
    none = "none",

    /** 不加密，也不进行消息认证 (v4.35.0+) */
    zero = "zero"
}

/** Vmess 用户配置 */
class VmessUserObject {
    /** VMess 用户的主 ID。必须是一个合法的 UUID */
    id: string;

    /** 
     * 为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID
     * 
     * 这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD
     * 
     * 不指定的话，默认值是 0。最大值 65535。这个值不能超过服务器端所指定的值。 
     */
    alterId: number = 0;

    /** 用户等级 */
    level: number = 0;

    /** 加密方式，客户端将使用配置的加密方式发送数据，服务器端自动识别，无需配置 */
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

/** Vmess 服务器配置 */
class VmessServerObject {
    /** 服务器地址 */
    address: string;

    /** 服务器端口 */
    port: number;

    /** 用户列表 */
    users: VmessUserObject[];

    /**
     * ServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     * @param users 用户配置
     */
    constructor(address: string, port: number, users: VmessUserObject | VmessUserObject[]) {
        this.address = address;
        this.port = port;

        if (users instanceof VmessUserObject) users = [users];
        this.users = users;
    }
}

/** Vmess 出站配置 */
class VmessOutboundObject {
    /** 一个数组，包含一系列的服务器配置 */
    vnext: VmessServerObject[];

    /**
     * VmessOutboundObject
     * @param servers 服务器配置
     */
    constructor(servers: VmessServerObject | VmessServerObject[]) {
        if (servers instanceof VmessServerObject) servers = [servers];
        this.vnext = servers;
    }
}

/** Vmess 客户端配置 */
class VmessClientObject {
    /** VMess 的用户 ID。必须是一个合法的 UUID */
    id: string;

    /** 用户等级 */
    level: number = 0;

    /**
     * 为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID
     *
     * 这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD
     *
     * 不指定的话，默认值是 0。最大值 65535。这个值不能超过服务器端所指定的值。
     */
    alterId: number = 0;

    /** 用户邮箱地址，用于区分不同用户的流量 */
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

/** 指示对应的出站协议使用另一个服务器 */
class DetourObject {
    /** 一个入站协议的tag */
    to: string;

    /**
     * DetourObject
     * @param to 一个入站协议的tag
     */
    constructor(to: string) {
        this.to = to;
    }
}

/** clients 的默认配置。仅在配合detour时有效 */
class DefaultObject {
    /** 用户等级 */
    level: number = 0;

    /**
     * 为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID
     *
     * 这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD
     *
     * 不指定的话，默认值是 0。最大值 65535。这个值不能超过服务器端所指定的值。
     */
    alterId: number = 0;
}

/** Vmess 入站配置 */
class VmessInboundObject {
    /** 一组服务器认可的用户。clients 可以为空。当此配置用作动态端口时，V2Ray 会自动创建用户。 */
    clients: VmessClientObject[];

    /** 指示对应的出站协议使用另一个服务器 */
    detour: DetourObject = null;

    /** clients 的默认配置。仅在配合detour时有效 */
    default: DefaultObject = null;

    /** 
     * 是否禁止客户端使用不安全的加密方式
     * 
     * 当客户端指定下列加密方式时，服务器会主动断开连接
     * * `none`
     * * `aes-128-cfb`
     */
    disableInsecureEncryption: boolean = false;

    /**
     * VmessInboundObject
     * @param clients 客户端配置
     */
    constructor(clients: VmessClientObject | VmessClientObject[]) {
        if (clients instanceof VmessClientObject) clients = [clients];
        this.clients = clients;
    }
}

export { VmessUserObject, VMESS_SECURITY, VmessOutboundObject, VmessInboundObject, VmessClientObject, DetourObject, DefaultObject, VmessServerObject };