/**
 * V2Ray 内建了一个 DNS 组件
 *
 * 其主要用途为：对目标地址（域名）进行 DNS 解析，同时为 IP 路由规则匹配提供判断依据
 */
declare class DnsObject {
    /**
     * 域名与地址的映射，
     * 其值可为「域名与单个地址」的映射、「域名与多个地址（地址数组）的映射」(v4.37.3+)，其中地址可以是 IP 或域名
     *
     * 在解析域名时，如果域名匹配这个列表中的某一项，当该项的地址为 IP 时，则解析结果为该项的 IP，而不会进行后续的 DNS 解析
     *
     * 当该项的地址为域名时，会使用此域名进行后续的 DNS 解析，而不使用原始域名
     */
    hosts: Object;
    /** DNS 服务器列表，有效的写法有两种：DNS 地址（字符串形式）和 DnsServerObject */
    servers: (string | DnsServerObject)[];
    /** 当前网络的 IP 地址。用于 DNS 查询时通知 DNS 服务器，客户端所在的地理位置（不能是私有 IP 地址） */
    clientIp: string;
    /**
     * DNS 查询所使用的网络类型。默认值为 UseIP，即 DNS 同时查询域名的 A 和 AAAA 记录
     *
     * UseIPv4 和 UseIPv6 分别为只查询 A 记录、只查询 AAAA 记录
     */
    queryStrategy: QUERY_STRATEGY;
    /**
     * 禁用 DNS 缓存。默认为 `false`，即为不禁用
     *
     * 此属性为私有属性，不允许直接进行调用，如需修改属性值请通过 `cache()` 方法进行修改
     */
    private disableCache;
    /**
     * 禁用 DNS 回退（fallback）查询。默认为 `false`，即为不禁用
     *
     * 此属性为私有属性，不允许直接进行调用，如需修改属性值请通过 `fallback()` 方法进行修改
     */
    private disableFallback;
    /**
     *  禁用在 DNS 服务器的优先匹配域名列表命中时执行 DNS 回退（fallback）查询
     *
     * 此属性为私有属性，不允许直接进行调用，如需修改属性值请通过 `fallbackIfMatch()` 方法进行修改
     */
    private disableFallbackIfMatch;
    /**
     * 由此 DNS 发出的查询流量，除 localhost 和 DOHL_ 模式外，都会带有此标识，可在路由使用 inboundTag 进行匹配
     *
     * 其默认值为 `"dns"`
     */
    tag: string;
    /**
     * DnsObject
     * @param host 域名与地址的映射
     * @param servers DNS 服务器列表
     * @param clientIp 当前网络的 IP 地址
     */
    constructor(host: Map<string, string | string[]>, servers: (string | DnsServerObject)[], clientIp: string);
    /**
     * 设置DNS缓存是否开启
     * @param status DNS缓存状态，其值为 `disable` | `enable`
     * @returns 当前对象
     */
    cache(status: "disable" | "enable"): DnsObject;
    /**
     * 设置DNS回退查询是否开启
     * @param status DNS回退查询状态，其值为 `disable` | `enable`
     * @returns 当前对象
     */
    fallback(status: "disable" | "enable"): DnsObject;
    /**
     * 设置在DNS服务器的优先匹配域名列表命中时执行DNS回退查询
     * @param status 回退查询状态，其值为 `disable` | `enable`
     * @returns 当前对象
     */
    fallbackIfMatch(status: "disable" | "enable"): DnsObject;
}
/**
 * DNS 服务器对象
 */
declare class DnsServerObject {
    /** DNS 服务器地址，如 `8.8.8.8`、`tcp+local://8.8.8.8:53` 和 `https://dns.google/dns-query` 等 */
    address: string;
    /**
     * DNS 服务器端口，如 `53`
     *
     * 此项缺省时默认为 `53`
     *
     * 当使用 DOH、DOHL、DOQL 模式时，该项无效
     *
     * 非标准端口应在 URL 中指定
     */
    port: number;
    /**
     * 当前网络的 IP 地址
     *
     * 用于 DNS 查询时通知 DNS 服务器，客户端所在的地理位置（不能是私有 IP 地址）
     *
     * 此处 `clientIp` 的优先级高于外层配置的 `clientIp`，由此可实现「使用不同的 clientIp 从相同的 DNS 服务器获取同一域名在不同地区的解析结果」
     */
    clientIp: string;
    /**
     * 在 DNS 回退（fallback）查询过程中，是否跳过本 DNS
     *
     * 默认为 false，即为不跳过
     */
    skipFallback: boolean;
    /**
     * 一个域名列表，此列表包含的域名，将优先使用此服务器进行查询
     *
     * 域名格式和路由配置中相同
     */
    domains: string[];
    /**
     * 一个 IP 范围列表，格式和路由配置中相同
     *
     * 当配置此项时，V2Ray DNS 会对返回的 IP 进行校验，只返回满足 expectIPs 列表的地址。如果未配置此项，会原样返回 IP 地址
     */
    expectIPs: string[];
    /**
     * DnsServerObject
     * @param address DNS 服务器地址
     * @param port DNS 服务器端口
     * @param clientIp 当前网络的 IP 地址
     */
    constructor(address: string, port: number, clientIp: string);
}
/**
 * DNS 查询所使用的网络类型。默认值为 UseIP，即 DNS 同时查询域名的 A 和 AAAA 记录
 *
 * UseIPv4 和 UseIPv6 分别为只查询 A 记录、只查询 AAAA 记录
 */
declare const enum QUERY_STRATEGY {
    UseIP = "UseIP",
    UseIPv4 = "UseIPv4",
    UseIPv6 = "UseIPv6"
}
export { DnsServerObject, QUERY_STRATEGY, DnsObject };
