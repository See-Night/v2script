# Shadowsocks

[Shadowsocks](https://zh.wikipedia.org/wiki/Shadowsocks)协议，包含入站和出站两部分，兼容大部分其它版本的实现。

与官方版本的兼容性：

- 支持 TCP 和 UDP 数据包转发，其中 UDP 可选择性关闭；
- 加密方式：
  - AES-256-GCM
  - AES-128-GCM
  - ChaCha20-Poly1305 或称 ChaCha20-IETF-Poly1305
  - （V2Ray 4.27.0+） none 或称 plain

!> "none" 不加密方式下，服务器端不会验证 "password" 中的密码。一般需要加上 TLS 并在传输层使用安全配置，例如 WebSocket 配置较长的 path。

Shadowsocks 的配置分为两部分，[`ShadowsocksInboundObject`](/protocol/Shadowsocks.md#ShadowsocksInboundObject) 和 [`ShadowsocksOutboundObject`](/protocol/Shadowsocks.md#ShadowsocksOutboundObject)，分别对应入站和出站协议配置中的 `settings` 项。

## ShadowsocksInboundObject

```typescript
class ShadowsocksInboundObject {
    email: string;

    method: SHADOWSOCKS_METHOD;

    password: string;

    level: number = 0;

    network: SHADOWSOCKS_NETWORK = SHADOWSOCKS_NETWORK.tcp;

    constructor(email: string, password: string, method: SHADOWSOCKS_METHOD) {
        this.email = email;
        this.password = password;
        this.method = method;
    }
}
```

* `email`: **string**

  邮件地址，用于标识用户。

* `method`: **[SHADOWSOCKS_METHOD](#SHADOWSOCKS_METHOD)**

  加密方式。

* `password`: **string**

  密码。

* `level`: **number**

  用户等级，默认值为 `0`。

* `network`: **[SHADOWSOCKS_NETWORK](#SHADOWSOCKS_NETWORK)**

  可接收的网络类型。

* `constructor()`: **ShadowsocksInboundObject**

  构造函数。

  参数：

  * `email`: **string**

    邮件地址，用于标识用户。

  * `password`: **string**

    密码。

  * `method`: **[SHADOWSOCKS_METHOD](#SHADOWSOCKS_METHOD)**

    加密方式。

## ShadowsocksOutboundObject

```typescript
class ShadowsocksOutboundObject {
    servers: ShadowsocksServerObject[];

    constructor(servers: ShadowsocksServerObject | ShadowsocksServerObject[]) {
        if (servers instanceof ShadowsocksServerObject) servers = [servers];
        this.servers = servers;
    }
}
```

* `servers`: **[ShadowsocksServerObject[]](#ShadowsocksServerObject)**

  一个数组，其中每一项是一个[ShadowsocksServerObject](#ShadowsocksServerObject)

* `constructor()`: **ShadowsocksOutboundObject**

  构造函数。

  参数：

  * `servers`: **[ShadowsocksServerObject](#ShadowsocksServerObject)** | **[ShadowsocksServerObject[]](#ShadowsocksServerObject)**

    一个 [ShadowsocksServerObject](#ShadowsocksServerObject) 对象或一个 [ShadowsocksServerObject[]](#ShadowsocksServerObject) 数组。

## ShadowsocksServerObject

```typescript
class ShadowsocksServerObject {
    email: string;

    address: string;

    port: number;

    method: SHADOWSOCKS_METHOD;

    password: string;

    level: number = 0;

    constructor(email: string, address: string, port: number, password: string, method: SHADOWSOCKS_METHOD) {
        this.email = email;
        this.address = address;
        this.port = port;
        this.method = method;
        this.password = password;
    }
}
```

* `email`: **string**

  邮件地址，用于标识用户。

* `address`: **string**

  Shadowsocks 服务器地址，支持 IPv4、IPv6 和域名。

* `port`: **number**

  Shadowsocks 服务器端口。

* `method`: **[SHADOWSOCKS_METHOD](#SHADOWSOCKS_METHOD)**

  加密方式。

* `password`: **string**

  密码。

* `level`: **number**

  用户等级。

* `constructor()`: **ShadowsocksServerObject**

  构造函数。

  参数：

  * `email`: **string**

    邮件地址，用于标识用户。

  * `address`: **string**

    Shadowsocks 服务器地址，支持 IPv4、IPv6 和域名。

  * `port`: **number**

    Shadowsocks 服务器端口。

  * `password`: **string**

    密码。

  * `method`: **[SHADOWSOCKS_METHOD](#SHADOWSOCKS_METHOD)**

    加密方式。

## SHADOWSOCKS_METHOD

```typescript
const enum SHADOWSOCKS_METHOD {
    aes_256_gcm = "aes-256-gcm",
    aes_128_gcm = "aes-128-gcm",
    chacha20_poly1305 = "chacha20-poly1305",
    chacha20_ietf_poly1305 = "chacha20-ietf-poly1305",
    none = "none"
}
```

## SHADOWSOCKS_NETWORK

```typescript
const enum SHADOWSOCKS_NETWORK {
    tcp = "tcp",
    udp = "udp",
    tcp_udp = "tcp,udp"
}
```

