"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancerObject = exports.RuleObject = exports.RoutingObject = void 0;
/**
 * V2Ray 内建了一个路由模块，可以将入站数据按需求由不同的出站连接发出，以达到按需代理的目的
 *
 * 这一功能的常见用法是分流国内外流量,
 * V2Ray 可以通过内部机制判断不同国家或地区的流量，然后将它们发送到不同的出站代理
 */
var RoutingObject = /** @class */ (function () {
    /**
     * RoutingObject
     * @param domainStrategy 域名解析策略
     */
    function RoutingObject(domainStrategy) {
        /**
         * 域名解析策略
         * * AsIs：只使用域名进行路由选择，默认值；
         * * IPIfNonMatch：当域名没有匹配任何基于域名的规则时，将域名解析成 IP（A 记录或 AAAA 记录），进行基于 IP 规则的匹配；
         * 当一个域名有多个 IP 地址时，会尝试匹配所有的 IP 地址，直到其中一个与某个 IP 规则匹配为止；
         * 解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名。
         * * IPOnDemand：当匹配时碰到任何基于 IP 的规则，立即将域名解析为 IP 进行匹配。
         */
        this.domainStrategy = "AsIs" /* AsIs */;
        /**
         * 选择要使用的域名匹配算法。
         * * linear：使用线性匹配算法，默认值；
         * * mph：使用最小完美散列（minimal perfect hash）算法（v4.36.1+）
         */
        this.domainMatcher = "linear" /* linear */;
        /**
         * 对应一个数组，数组中每一项是一个规则
         *
         * 对于每一个连接，路由将根据这些规则依次进行判断，当一个规则生效时，
         * 即将这个连接转发至它所指定的 outboundTag（或 balancerTag，V2Ray 4.4+）
         *
         * 当没有匹配到任何规则时，流量默认被转发至第一个 outbound
         */
        this.rules = [];
        /**
         * 一个数组，数组中每一项是一个负载均衡器的配置
         *
         * 当一个规则指向一个负载均衡器时，V2Ray 会通过此负载均衡器选出一个 outbound，然后由它转发流量
         */
        this.balancers = [];
        this.domainStrategy = domainStrategy;
    }
    return RoutingObject;
}());
exports.RoutingObject = RoutingObject;
/** 路由规则 */
var RuleObject = /** @class */ (function () {
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
    function RuleObject(network, protocol, port, sourcePort, inboundTag, outboundTag, balancerTag) {
        /**
         * 选择要使用的域名匹配算法。此处 domainMatcher 的优先级高于 RoutingObject 配置的 domainMatcher
         * * linear：使用线性匹配算法，默认值；
         * * mph：使用最小完美散列（minimal perfect hash）算法（v4.36.1+）
         */
        this.domainMathcer = "linear" /* linear */;
        /** 目前只支持 field 这一个选项，因此其被设置为私有属性，不支持修改 */
        this.type = "field";
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
        this.domains = [];
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
        this.ip = [];
        /**
         * 一个数组，数组内每一项代表一个 IP 范围，形式有 IP、CIDR、GeoIP 和从文件中加载 IP
         *
         * 当某一项匹配来源 IP 时，此规则生效
         */
        this.source = [];
        /**
         * 一个数组，数组内每一项是一个邮箱地址
         *
         * 当某一项匹配来源用户时，此规则生效
         *
         * 当前 Shadowsocks 和 VMess 支持此规则。
         */
        this.user = [];
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
        this.attrs = "";
        this.network = network;
        this.protocol = protocol;
        this.inboundTag = inboundTag;
        this.outboundTag = outboundTag;
        this.balancerTag = balancerTag;
        this.port = port;
        this.sourcePort = sourcePort;
    }
    return RuleObject;
}());
exports.RuleObject = RuleObject;
/** 负载均衡器 */
var BalancerObject = /** @class */ (function () {
    /**
     * BalancerObject
     * @param tag 此负载均衡器的标识
     * @param selector 一个字符串数组，其中每一个字符串将用于和出站协议标识的前缀匹配
     * @param strategy_type 进行负载均衡的策略对象
     */
    function BalancerObject(tag, selector, strategy_type) {
        this.tag = tag;
        this.selector = selector;
        this.strategy = {
            type: strategy_type
        };
    }
    return BalancerObject;
}());
exports.BalancerObject = BalancerObject;
//# sourceMappingURL=routing.js.map