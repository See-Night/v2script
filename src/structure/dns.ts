/**
 * V2Ray 内置了一个 DNS 服务器
 * 其有两大主要用途:
 * 根据域名的解析IP匹配路由规则
 * 以及像传统的DNS功能，解析目标地址进行连接。
 */

export class dns {
    /**
     * 
     * @param servers 一个 DNS 服务器列表，其值为DNS地址（字符串形式）
     * @param hosts 静态 IP 列表，其值为一系列的"域名":"地址"
     * @param clientIp 当前系统的 IP 地址，用于 DNS 查询时，通知服务器客户端的所在位置。不能是私有地址
     * @param tag 由此 DNS 发出的查询流量，除localhost 和 DOHL_ 模式外，都会带有此标识，可在路由使用inboundTag进行匹配
     * 
     */
    constructor(servers?: string[], hosts?: object, clientIp?: string, tag?: string) {
        if (hosts) {
            this['hosts'] = {};
            for (let i in hosts) {
                this['hosts'][i] = hosts[i];
            }
        }

        if (servers) {
            this['servers'] = [];
            for (let i in servers) {
                this['servers'].push(servers[i]);
            }
        }

        if (clientIp) this['clientIp'] = clientIp;
        if (tag) this['tag'] = tag;
    }
}