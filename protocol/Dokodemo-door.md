# Dokodemo-door

Dokodemo door（任意门）是一个入站数据协议，它可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果。

> 若需要出站连接被 V2Ray 重新路由，搭配使用 [Loopback 协议](https://www.v2fly.org/config/protocols/loopback.html)，性能更佳。

## DokodemodoorInboundObject

```typescript
class DokodemodoorInboundObject {
    address: string;

    port: number;

    network: DOKODEMODOOR_NETWORK = DOKODEMODOOR_NETWORK.tcp;

    timeout: number = 300;

    followRedirect: boolean = false;

    userLevel: number = 0;

    constructor(address: string, port: number) {
        this.address = address;
        this.port = port;
    }
}
```

* `address`: **string**

  将流量转发到此地址。可以是一个 IP 地址，形如 `"1.2.3.4"`，或者一个域名，形如 `"v2ray.com"`。字符串类型。

  当 `followRedirect` 为 `true` 时，`address` 可为空。

* `port`: **number**

  将流量转发到目标地址的指定端口，范围 [1, 65535]，数值类型。

* `network`: **[DOKODEMODOOR_NETWORK](#DOKODEMODOOR_NETWORK)**

  可接收的网络协议类型。

* `timeout`: **number**

  入站数据的时间限制（秒），默认值为 300。

  V2Ray 3.1 后等价于对应用户等级的 `connIdle` 策略

* `followRedirect`: **boolean**

  当值为 `true` 时，dokodemo-door 会识别出由 iptables 转发而来的数据，并转发到相应的目标地址。详见 [传输配置](/advanced/Transport.md#TransportObject) 中的 `tproxy` 设置。

* `userLevel`: **number**

  用户等级，所有连接都会使用这个用户等级。
  
* `constructor()`: **DokodemodoorInboundObject**

  构造函数。

  参数：

  * `address`: **string**

    将流量转发到此地址。

  * `port`: **number**

    将流量转发到目标地址的指定端口，范围 [1, 65535]，数值类型。

## DOKODEMODOOR_NETWORK

```typescript
const enum DOKODEMODOOR_NETWORK {
    tcp = "tcp",
    udp = "udp",
    tcp_udp = "tcp,udp"
}
```



##  