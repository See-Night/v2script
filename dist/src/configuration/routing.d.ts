/**
 * V2Ray 内建了一个路由模块，可以将入站数据按需求由不同的出站连接发出，以达到按需代理的目的
 *
 * 这一功能的常见用法是分流国内外流量,
 * V2Ray 可以通过内部机制判断不同国家或地区的流量，然后将它们发送到不同的出站代理
 */
declare class RoutingObject {
    /**
     * 域名解析策略
     * * AsIs：只使用域名进行路由选择，默认值；
     * * IPIfNonMatch：当域名没有匹配任何基于域名的规则时，将域名解析成 IP（A 记录或 AAAA 记录），进行基于 IP 规则的匹配；
     * 当一个域名有多个 IP 地址时，会尝试匹配所有的 IP 地址，直到其中一个与某个 IP 规则匹配为止；
     * 解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名。
     * * IPOnDemand：当匹配时碰到任何基于 IP 的规则，立即将域名解析为 IP 进行匹配。
     */
    domainStrategy: DOMAIN_STRATEGY;
    /**
     * 选择要使用的域名匹配算法。
     * * linear：使用线性匹配算法，默认值；
     * * mph：使用最小完美散列（minimal perfect hash）算法（v4.36.1+）
     */
    domainMatcher: DOMAIN_MATCHER;
    /**
     * 对应一个数组，数组中每一项是一个规则
     *
     * 对于每一个连接，路由将根据这些规则依次进行判断，当一个规则生效时，
     * 即将这个连接转发至它所指定的 outboundTag（或 balancerTag，V2Ray 4.4+）
     *
     * 当没有匹配到任何规则时，流量默认被转发至第一个 outbound
     */
    rules: RuleObject[];
    /**
     * 一个数组，数组中每一项是一个负载均衡器的配置
     *
     * 当一个规则指向一个负载均衡器时，V2Ray 会通过此负载均衡器选出一个 outbound，然后由它转发流量
     */
    balancers: BalancerObject[];
    /**
     * RoutingObject
     * @param domainStrategy 域名解析策略
     */
    constructor(domainStrategy: DOMAIN_STRATEGY);
}
/**
 * 域名解析策略
 * * AsIs：只使用域名进行路由选择，默认值；
 * * IPIfNonMatch：当域名没有匹配任何基于域名的规则时，将域名解析成 IP（A 记录或 AAAA 记录），进行基于 IP 规则的匹配；
 * 当一个域名有多个 IP 地址时，会尝试匹配所有的 IP 地址，直到其中一个与某个 IP 规则匹配为止；
 * 解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名。
 * * IPOnDemand：当匹配时碰到任何基于 IP 的规则，立即将域名解析为 IP 进行匹配。
 */
declare const enum DOMAIN_STRATEGY {
    AsIs = "AsIs",
    IPIfNonMatch = "IPIfNonMatch",
    IPOnDemand = "IPOnDemand"
}
/**
 * 选择要使用的域名匹配算法。
 * * linear：使用线性匹配算法，默认值；
 * * mph：使用最小完美散列（minimal perfect hash）算法（v4.36.1+）
 */
declare const enum DOMAIN_MATCHER {
    linear = "linear",
    mph = "mph"
}
/** 连接方式 */
declare const enum RULE_NETWORK {
    tcp = "tcp",
    udp = "udp",
    tcp_udp = "tcp,udp"
}
/** 协议 */
declare const enum RULE_PROTOCOL {
    http = "http",
    tls = "tls",
    bittorrent = "bittorrent"
}
/** 路由规则 */
declare class RuleObject {
    /**
     * 选择要使用的域名匹配算法。此处 domainMatcher 的优先级高于 RoutingObject 配置的 domainMatcher
     * * linear：使用线性匹配算法，默认值；
     * * mph：使用最小完美散列（minimal perfect hash）算法（v4.36.1+）
     */
    domainMathcer: DOMAIN_MATCHER;
    /** 目前只支持 field 这一个选项，因此其被设置为私有属性，不支持修改 */
    private type;
    /**
     * 一个数组，数组每一项是一个域名的匹配
     *
     * 有以下几种形式:
     * * 纯字符串：当此字符串匹配目标域名中任意部分，该规则生效。
     * 比如 `sina.com` 可以匹配 `sina.com`、`sina.com.cn`、`sina.company` 和 `www.sina.com`，但不匹配 `sina.cn`
     * * 正则表达式：由 `regexp:` 开始，余下部分是一个正则表达式。
     * 当此正则表达式匹配目标域名时，该规则生效。
     * 例如 `regexp:\.goo.*\.com$` 匹配 `www.google.com`、`fonts.googleapis.com`，但不匹配 `google.com`
     * * 子域名（推荐）：由 `domain:` 开始，余下部分是一个域名。
     * 当此域名是目标域名或其子域名时，该规则生效。
     * 例如 `domain:v2ray.com` 匹配 `www.v2ray.com`、`v2ray.com`，但不匹配 `xv2ray.com`
     * * 完整匹配：由 `full:` 开始，余下部分是一个域名。
     * 当此域名完整匹配目标域名时，该规则生效。
     * 例如 `full:v2ray.com` 匹配 `v2ray.com` 但不匹配 `www.v2ray.com`
     * * 预定义域名列表：由 `geosite:` 开头，余下部分是一个类别名称（域名列表）。
     * 如 `geosite:google` 或者 `geosite:cn`。名称及域名列表参考[预定义域名列表](https://www.v2fly.org/config/routing.html#预定义域名列表)
     * * 从文件中加载域名：形如 `ext:file:tag` ，必须以 `ext:` 开头，后面跟文件名和标签，文件存放在资源目录中，
     * 文件格式与 `geosite.dat` 相同，标签必须在文件中存在
     */
    domains: string[];
    /**
     * 一个数组，数组内每一项代表一个 IP 范围。当某一项匹配目标 IP 时，此规则生效。有以下几种形式：
     * * IP：形如 127.0.0.1
     * * [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)：形如 10.0.0.0/8
     * * GeoIP：
     *    * 形如 `geoip:cn` 为正向匹配，即为匹配「中国大陆 IP 地址」。后面跟双字符[国家或地区代码](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)，支持所有可以上网的国家和地区
     *    * 形如 `geoip:!cn` 为反向匹配，即为匹配「非中国大陆 IP 地址」。后面跟双字符[国家或地区代码](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)，支持所有可以上网的国家和地区
     *    * 特殊值：`geoip:private`（V2Ray 3.5+），包含所有私有地址，如 127.0.0.1
     * * 从文件中加载 IP：
     *    * 形如 `ext:file:tag` 和 `ext-ip:file:tag` 为正向匹配，即为匹配 「tag 内的 IP 地址」
     *    * 形如 `ext:file:!tag` 和 `ext-ip:file:!tag` 为反向匹配，即为匹配「非 tag 内的 IP 地址」
     *    * 必须以 `ext:` 或 `ext-ip:` 开头，后面跟文件名、标签或 !标签，文件存放在资源目录中，文件格式与 geoip.dat 相同，标签必须在文件中存在。
     */
    ip: string[];
    /**
     * 目标端口范围，有三种形式：
     * * a-b：a 和 b 均为正整数，且小于 65536。这个范围是一个前后闭合区间，当端口落在此范围内时，此规则生效
     * * a：a 为正整数，且小于 65536。当目标端口为 a 时，此规则生效
     * * （V2Ray 4.18+）以上两种形式的混合，以逗号 "," 分隔。形如：53,443,1000-2000。
     */
    port: number | string;
    /** 来源端口范围，格式同 `port` */
    sourcePort: number | string;
    /** 当连接方式是指定的方式时，此规则生效 */
    network: RULE_NETWORK;
    /**
     * 一个数组，数组内每一项代表一个 IP 范围，形式有 IP、CIDR、GeoIP 和从文件中加载 IP
     *
     * 当某一项匹配来源 IP 时，此规则生效
     */
    source: string[];
    /**
     * 一个数组，数组内每一项是一个邮箱地址
     *
     * 当某一项匹配来源用户时，此规则生效
     *
     * 当前 Shadowsocks 和 VMess 支持此规则。
     */
    user: string[];
    /**
     * 一个数组，数组内每一项是一个标识
     *
     * 当某一项匹配入站协议的标识时，此规则生效
     */
    inboundTag: string[];
    /**
     * 一个数组，数组内每一项表示一种协议
     *
     * 当某一个协议匹配当前连接的流量时，此规则生效
     *
     * 必须开启入站代理中的 sniffing 选项
     */
    protocol: RULE_PROTOCOL[];
    /**
     * （V2Ray 4.18+）一段脚本，用于检测流量的属性值。当此脚本返回真值时，此规则生效
     *
     * 脚本语言为 [Starlark](https://github.com/bazelbuild/starlark)，它的语法是 Python 的子集。脚本接受一个全局变量 attrs，其中包含了流量相关的属性
     *
     * 目前只有 HTTP 入站代理会设置这一属性
     *
     * 示例：
     * * 检测 HTTP GET：attrs[':method'] == 'GET'
     * * 检测 HTTP Path：attrs[':path'].startswith('/test')
     * * 检测 Content Type：attrs['accept'].index('text/html') >= 0
     */
    attrs: string;
    /** 对应一个额外 出站连接配置 的标识 */
    outboundTag: string;
    /**
     * 对应一个负载均衡器的标识
     *
     * balancerTag 和 outboundTag 须二选一
     *
     * 当同时指定时，outboundTag 生效
     */
    balancerTag: string;
    /**
     * RuleObject
     * @param network 连接方式，其值为 RULE_NETWORK 枚举值
     * @param protocol 一个数组，数组内每一项表示一种协议
     * @param port 目标端口范围
     * @param sourcePort 来源端口范围
     * @param inboundTag 一个数组，数组内每一项是一个标识
     * @param outboundTag 对应一个额外出站连接配置的标识
     * @param balancerTag 对应一个负载均衡器的标识
     */
    constructor(network: RULE_NETWORK, protocol: RULE_PROTOCOL[], port: number | string, sourcePort: number | string, inboundTag: string[], outboundTag: string, balancerTag: string);
}
/** 进行负载均衡的策略对象 */
declare const enum BALANCER_STRATEGY {
    random = "random",
    leastPing = "leastPing"
}
/** 负载均衡器 */
declare class BalancerObject {
    /**
     * 此负载均衡器的标识
     *
     * 用于匹配 RuleObject 中的 balancerTag
     */
    tag: string;
    /**
     * 一个字符串数组，其中每一个字符串将用于和出站协议标识的前缀匹配
     *
     * 在以下几个出站协议标识中：`[ "a", "ab", "c", "ba" ]`，`"selector": ["a"]` 将匹配到 `[ "a", "ab" ]`
     */
    selector: string[];
    /** 进行负载均衡的策略对象 */
    strategy: {
        type: BALANCER_STRATEGY;
    };
    /**
     * BalancerObject
     * @param tag 此负载均衡器的标识
     * @param selector 一个字符串数组，其中每一个字符串将用于和出站协议标识的前缀匹配
     * @param strategy_type 进行负载均衡的策略对象
     */
    constructor(tag: string, selector: string[], strategy_type: BALANCER_STRATEGY);
}
export { RoutingObject, DOMAIN_MATCHER, DOMAIN_STRATEGY, RULE_NETWORK, RULE_PROTOCOL, RuleObject, BALANCER_STRATEGY, BalancerObject };
