/**
 * VMess 是一个加密传输协议
 * 它分为入站和出站两部分，通常作为 V2Ray 客户端和服务器之间的桥梁
 *
 * VMess 依赖于系统时间
 * 请确保使用 V2Ray 的系统 UTC 时间误差在 90 秒之内，时区无关
 * 在 Linux 系统中可以安装ntp服务来自动同步系统时间
 */
export declare class vmess_outbound {
    vnext: {
        address: string;
        port: number;
        users: {
            id: string;
            alterId: number;
            security: string;
        }[];
    }[];
    /**
     *
     * @param address 服务器地址
     * @param port 服务器端口
     * @param id uuid
     *
     */
    constructor(address: any, port: any, id: any, security?: string);
}
export declare class vmess_inbound {
    clients: {
        id: string;
        alterId: number;
    }[];
    default: {
        alterId: number;
    };
    /**
     *
     * @param id uuid
     *
     */
    constructor(id: any);
}
