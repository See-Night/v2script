/**
 * VMess 是一个加密传输协议
 * 它分为入站和出站两部分，通常作为 V2Ray 客户端和服务器之间的桥梁
 * 
 * VMess 依赖于系统时间
 * 请确保使用 V2Ray 的系统 UTC 时间误差在 90 秒之内，时区无关
 * 在 Linux 系统中可以安装ntp服务来自动同步系统时间
 */

import { VMESSSECURITY } from "../common";

export class vmess_outbound {
    vnext = [{
        address: "",
        port: 10080,
        users: [{
            id: "",
            alterId: 32,
            security: VMESSSECURITY.auto
        }]
    }]

    /**
     * 
     * @param address 服务器地址
     * @param port 服务器端口
     * @param id uuid
     * 
     */
    constructor(address, port, id, security = VMESSSECURITY.auto) {
        this.vnext[0].address = address;
        this.vnext[0].port = port;
        this.vnext[0].users[0].id = id;
        this.vnext[0].users[0].security = security;
    }
}

export class vmess_inbound {
    clients = [{
        id: "",
        alterId: 32,
    }];
    default = {
        alterId: 32
    }

    /**
     * 
     * @param id uuid
     * 
     */
    constructor(id) {
        this.clients[0].id = id;
    }
}