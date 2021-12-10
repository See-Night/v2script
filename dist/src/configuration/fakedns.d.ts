/** 虚拟 DNS 服务器 */
export declare class FakeDnsObject {
    /** FakeDNS 分配 IP 的地址空间。由 FakeDNS 分配的地址会符合这个 CIDR 表达式 */
    ipPool: string;
    /**
     * FakeDNS 所记忆的「IP - 域名映射」数量。
     *
     * 当域名数量超过此数值时，会依据 [LRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)) 规则淘汰老旧域名
     */
    poolSize: number;
    /**
     * FakeDnsObject
     * @param ipPool FakeDNS 分配 IP 的地址空间
     * @param poolSize FakeDNS 所记忆的「IP - 域名映射」数量
     */
    constructor(ipPool: string, poolSize: number);
}
