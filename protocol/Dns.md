# DNS

DNS 是一个出站协议，主要用于拦截和转发 DNS 查询。此出站协议只能接收 DNS 流量（包含基于 UDP 和 TCP 协议的查询），其它类型的流量会导致错误。

在处理 DNS 查询时，此出站协议会将 IP 查询（即 A 和 AAAA）转发给内置的 [DNS 服务器](https://www.v2fly.org/config/dns.html)。其它类型的查询流量将被转发至它们原本的目标地址。

DNS 出站协议在 V2Ray 4.15 中引入。

## DnsOutboundObject

```typescript
class DnsOutboundObject {
    network: DNS_NETWORK;

    address: string;

    port: number;

    constructor(network: DNS_NETWORK, address: string, port: number) {
        this.network = network;
        this.address = address;
        this.port = port;
    }
}
```

* `network`: **[DNS_NETWORK](#DNS_NETWORK)**

  修改 DNS 流量的传输层协议。

* `address`: **string**

  修改 DNS 服务器地址。

* `port`: **number**

  修改 DNS 服务器端口。

* `constructor()`: **DnsOutboundObject**

  构造函数。

  参数：

  * `network`: **[DNS_NETWORK](#DNS_NETWORK)**

    修改 DNS 流量的传输层协议。

  * `address`: **string**

    修改 DNS 服务器地址。

  * `port`: **number**

    修改 DNS 服务器端口。

## DNS_NETWORK

```typescript
const enum DNS_NETWORK {
    tcp = "tcp",
    udp = "udp"
}
```

