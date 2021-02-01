/**
 * MTProto 是一个 Telegram 专用的代理协议
 * 在 V2Ray 中可使用一组入站出站代理来完成 Telegram 数据的代理任务
 * 目前只支持转发到 Telegram 的 IPv4 地址。
 */

export class mtproto_inbound {
    users: {
        secret: string
    }[] = [];

    /**
     * @param secret 用户密钥。必须为 32 个字符，仅可包含0到9和a到f之间的字符
     */
    constructor(secret) {
        this.users.push({ secret: secret });
    }
}

export class mtproto_outbound {
    constructor() {}
}