# Dns 域名解析

V2Ray 内建了一个 DNS 组件，其主要用途为：对目标地址（域名）进行 DNS 解析，同时为 IP 路由规则匹配提供判断依据。

具体的Dns 域名解析过程，请移步 [v2fly.org](https://www.v2fly.org/config/dns.html#支持的-dns-协议及其路由策略) 查看。

## DnsObject

`DnsObject` 对应配置文件的 `dns` 项。

```typescript
class DnsObject {
    hosts: Object;

    servers: (string | DnsServerObject)[];

    clientIp: string;

    queryStrategy: QUERY_STRATEGY = QUERY_STRATEGY.UseIP;

    private disableCache: boolean = false;

    private disableFallback: boolean = false;

    private disableFallbackIfMatch: boolean = false;

    tag: string = "dns";

    constructor(host: Map<string, string | string[]>, servers: (string | DnsServerObject)[], clientIp: string) {
        this.hosts = Object.fromEntries(host.entries());
        this.servers = servers;
        this.clientIp = clientIp;
    }

    cache(status: "disable" | "enable"): DnsObject {
        if (status === "disable") this.disableCache = true;
        else if (status === "enable") this.disableCache = false;
        return this;
    }

    fallback(status: "disable" | "enable"): DnsObject {
        if (status === "disable") this.disableFallback = true;
        else if (status === "enable") this.disableFallback = false;
        return this;
    }

    fallbackIfMatch(status: "disable" | "enable"): DnsObject {
        if (status === "disable") this.disableFallbackIfMatch = true;
        else if (status === "enable") this.disableFallbackIfMatch = false;
        return this;
    }
}
```

* `hosts`: **Object**

  域名与地址的映射，其值可为「域名与单个地址」的映射、「域名与多个地址（地址数组）的映射」(v4.37.3+)，其中地址可以是 IP 或域名。

  在解析域名时，如果域名匹配这个列表中的某一项，当该项的地址为 IP 时，则解析结果为该项的 IP，而不会进行后续的 DNS 解析；当该项的地址为域名时，会使用此域名进行后续的 DNS 解析，而不使用原始域名。

  > 当地址中同时设置了多个 IP 和域名，则只会返回第一个域名，其余 IP 和域名均被忽略。

  域名的格式有以下几种形式：

  - **纯字符串**：当此域名完整匹配目标域名时，该规则生效。例如 `v2ray.com` 匹配 `v2ray.com` 但不匹配 `www.v2ray.com`。

  - **正则表达式**：由 `regexp:` 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 `regexp:\.goo.*\.com$` 匹配 `www.google.com`、`fonts.googleapis.com`，但不匹配 `google.com`。

  - **子域名**：由 `domain:` 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 `domain:v2ray.com` 匹配 `www.v2ray.com`、`v2ray.com`，但不匹配 `xv2ray.com`。

  - **子串**：由 `keyword:` 开始，余下部分是一个字符串。当此字符串匹配目标域名中任意部分，该规则生效。比如 `keyword:sina.com` 可以匹配 `sina.com`、`sina.com.cn`、`www.sina.com` 和 `www.sina.company`，但不匹配 `sina.cn`。

  - **预定义域名列表**：由 `geosite:` 开头，余下部分是一个名称，如 `geosite:google` 或者 `geosite:cn`。名称及域名列表参考 [预定义域名列表](https://www.v2fly.org/config/routing.html#预定义域名列表)。

* `servers`: **(string | DnsServerObject)[]**

  DNS 服务器列表，有效的写法有两种：DNS 地址（字符串形式）和 [ServerObject](#DnsServerObject) 。

  详情查看[支持的 DNS 协议及其路由策略](https://www.v2fly.org/config/dns.html#支持的-dns-协议及其路由策略)。

* `clientIp`: **string**

  当前网络的 IP 地址。用于 DNS 查询时通知 DNS 服务器，客户端所在的地理位置（不能是私有 IP 地址）。

  > 此功能需要 DNS 服务器支持 EDNS Client Subnet（RFC7871）。

* `queryStrategy`: **[QUERY_STRATEGY](#QUERY_STRATEGY)**

  (4.37.0+) DNS 查询所使用的网络类型。默认值为 `QUERY_STRATEGY.UseIP`。

  > 建议没有 IPv6 网络的用户，设置为 `QUERY_STRATEGY.UseIPv4`。本选项与 `freedom` 协议 `outbound` 中的 `domainStrategy` 选项优先级相同，建议同时设置为 `QUERY_STRATEGY.UseIPv4`。

  !> 如果本选项设置为 `UseIPv4`，而 `freedom` 协议 `outbound` 中的 `domainStrategy` 选项设置为 `UseIPv6`，会导致从 `freedom` 协议 `outbound` 发出的连接的 DNS 查询被 Go 运行时接管，进而导致 DNS 泄漏；反之同理。

* `disableCache`: **boolean**

  (4.35.0+) 禁用 DNS 缓存。默认为 false，即为不禁用。**私有属性**。

* `disableFallback`: **boolean**

  (4.37.2+) 禁用 DNS 回退（fallback）查询。默认为 false，即为不禁用。详情见 [DNS 处理流程](https://www.v2fly.org/config/dns.html#dns-处理流程)。**私有属性**。

* `disableFallbackIfMatch`: **bool**

  (4.40.2+) 禁用在 DNS 服务器的优先匹配域名列表命中时执行 DNS 回退（fallback）查询。**私有属性**。

* `tag`: **string**

  （V2Ray 4.13+）由此 DNS 发出的查询流量，除 `localhost` 和 `DOHL_` 模式外，都会带有此标识，可在路由使用 `inboundTag` 进行匹配。默认值为：`dns`。

* `constructor()`: **DnsObject**

  构造函数。

  参数：

  * `host`: **Map<string, string | string[]>**

    域名与地址的映射
  
  * `servers`: **(string | DnsServerObject)[]**
  
    DNS 服务器列表 
  
  * `clientIp`: **string**
  
    当前网络的 IP 地址
  
* `cache()`: **DnsObject**

  开启/关闭DNS缓存。

  参数：

  * `status`: **"enable"** | **"disable"**

    状态。"enable" 为开启，"disable" 为关闭。

* `fallback()`: **"enable"** | **"disable"**

  开启/关闭DNS 回退（fallback）查询。

  参数：

  * `status`: **"enable"** | **"disable"**

    状态。"enable" 为开启，"disable" 为关闭。

* `fallbackIfMatch()`: **"enable"** | **"disable"**

  开启/关闭DNS 服务器的优先匹配域名列表命中时执行 DNS 回退（fallback）查询。

  参数：

  * `status`: **"enable"** | **"disable"**

    状态。"enable" 为开启，"disable" 为关闭。

## DnsServerObject

```typescript
class DnsServerObject {
    address: string;

    port: number;

    clientIp: string;

    skipFallback: boolean = false;

    domains: string[] = [];

    expectIPs: string[] = [];

    constructor(address: string, port: number, clientIp: string) {
        this.address = address;
        this.port = port;
        this.clientIp = clientIp;
    }
}
```

* `address`: **string**

  DNS 服务器地址，如 `8.8.8.8`、`tcp+local://8.8.8.8:53` 和 `https://dns.google/dns-query` 等，详情查看[支持的 DNS 协议及其路由策略](https://www.v2fly.org/config/dns.html#支持的-dns-协议及其路由策略)。

* `port`: **number**

  DNS 服务器端口，如 `53`。此项缺省时默认为 `53`。当使用 DOH、DOHL、DOQL 模式时，该项无效。非标准端口应在 URL 中指定。

* `clientIp`: **string**

  当前网络的 IP 地址。用于 DNS 查询时通知 DNS 服务器，客户端所在的地理位置（不能是私有 IP 地址）。此处 `clientIp` 的优先级高于外层配置的 `clientIp`，由此可实现「使用不同的 `clientIp` 从相同的 DNS 服务器获取同一域名在不同地区的解析结果」。 (4.34.0+)

* `skipFallback`: **boolean**

  (4.37.2+) 在 DNS 回退（fallback）查询过程中，是否跳过本 DNS。默认为 false，即为不跳过。详情见 [DNS 处理流程](https://www.v2fly.org/config/dns.html#dns-处理流程)。

* `domains`: **string[]**

  一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。域名格式和[路由配置](/advanced/Routing.md#RuleObject)中相同。

* `expectIPs`: **string[]**

  （V2Ray 4.22.0+）一个 IP 范围列表，格式和[路由配置](/advanced/Routing.md#RuleObject)中相同。

  当配置此项时，V2Ray DNS 会对返回的 IP 进行校验，只返回满足 expectIPs 列表的地址。如果未配置此项，会原样返回 IP 地址。

* `constructor()`: **DnsServerObject**

  构造函数。

  参数：

  * `address`: **string**

    DNS 服务器地址。

  * `port`: **number**

    DNS 服务器端口。

  * `clientIp`: **string**

    当前网络的 IP 地址。

## QUERY_STRATEGY

`QUERY_STRATEGY` 为 `DnsObject` 中 `queryStrategy` 属性的枚举值。

```typescript
const enum QUERY_STRATEGY {
    UseIP = "UseIP",
    UseIPv4 = "UseIPv4",
    UseIPv6 = "UseIPv6"
}
```

* `UseIP`

  DNS 同时查询域名的 A 和 AAAA 记录

* `UseIPv4`

  DNS只查询 A 记录

* `UseIPv6`

  DNS只查询 AAAA 记录
