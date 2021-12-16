# FakeDNS DNS欺骗

## FakeDnsObject

```typescript
class FakeDnsObject {
    ipPool: string;

    poolSize: number;

    constructor(ipPool: string, poolSize: number) {
        this.ipPool = ipPool;
        this.poolSize = poolSize;
    }
}
```

* `ipPool`: **string**

  FakeDNS 分配 IP 的地址空间。由 FakeDNS 分配的地址会符合这个 CIDR 表达式。

* `poolSize`: **number**

  FakeDNS 所记忆的「IP - 域名映射」数量。当域名数量超过此数值时，会依据 [LRU](https://zh.wikipedia.org/wiki/快取文件置換機制) 规则淘汰老旧域名。

* `constructor()`: **FakeDnsObject**

  构造函数。

  参数：

  * `ipPool`: **string**

    FakeDNS 分配 IP 的地址空间。

  * `poolSize`: **number**

    FakeDNS 所记忆的「IP - 域名映射」数量。

  !> poolSize 必须小于或等于 ipPool 的地址总数，否则将无法启动。

  > 自 v4.38.1 起，若配置文件中的 `dns` 项显式设置了 `fakedns`，而配置文件中没有显式设置 `fakedns` 项，V2Ray 会根据 DNS 组件中 `queryStrategy` 项的值来初始化 `fakedns` 项的配置，即 FakeDNS 是否支持对不同类型 DNS 查询（A 记录和 AAAA 记录）返回相应的 IPv4 或 IPv6 类型的 IP 地址。
  >
  > `queryStrategy` 为 `UseIPv4` 时，默认的 `ipPool` 为 `198.18.0.0/15`、`poolSize` 为 `65535`。
  >
  > `queryStrategy` 为 `UseIPv6` 时，默认的 `ipPool` 为 `fc00::/18`，`poolSize` 为 `65535`。
  >
  > `queryStrategy` 为 `UseIP` 时，默认用于 IPv4 的 `ipPool` 为 `198.18.0.0/15`、`poolSize` 为 `32768`；用于 IPv6 的 `ipPool` 为 `fc00::/18`、`poolSize` 为 `32768`。

具体的运行机制请移步 [v2fly.org](https://www.v2fly.org/config/fakedns.html#运行机制及配置方式) 。