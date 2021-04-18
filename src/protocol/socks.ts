/**
 * 标准 Socks 协议实现
 * 兼容 Socks 4、Socks 4a 和 Socks 5
 */

import { AUTH } from "../common";

export class socks_inbound {
    auth: string = AUTH.noauth;
    udp: boolean = false;
    ip: string = null;

    /**
     * 
     * @param auth Socks 协议的认证方式: noauth匿名认证/password密码认证
     * @param accounts 账户信息，仅当auth为password时有效
     * @param udp 是否开启 UDP 协议的支持。默认值为 false
     * @param ip 当开启 UDP 时，V2Ray 需要知道本机的 IP 地址。默认值为"127.0.0.1"
     * 
     */
    constructor(auth: string = AUTH.noauth, accounts: {user: string, password: string} = null, udp: boolean = false, ip: string = null) {
        this.auth = auth;
        if (auth === 'password') {
            this['accounts'] = []
            this['accounts'].push({ user: accounts.user, password: accounts.password});
        }

        this.udp = udp;
        this.ip = ip;
    }
}

export class socks_outbound {
    servers = [{
        address: '127.0.0.1',
        port: 10080,
        users: []
    }]
    
    /**
     * 
     * @param address 服务器地址。
     * @param port 服务器端口
     * @param users 用户列表，其中每一项一个用户配置。
     * 
     */
    constructor(address: string = "127.0.0.1", port: number, users?: { user: string, pass: string}) {
        this.servers[0].address = address;
        this.servers[0].port = port;
        this.servers[0].users.push(users);
    }
}