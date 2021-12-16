# Trojan

[Trojan](https://trojan-gfw.github.io/trojan/protocol)协议设计指南

> Trojan 被设计工作在正确配置的加密 TLS 隧道中。

Trojan 的配置分为两部分，[`TrojanInboundObject`](#TrojanInboundObject) 和 [`TrojanOutboundObject`](#TrojanOutboundObject)，分别对应入站和出站协议配置中的 `settings` 项。

## TrojanInboundObject

```typescript
class TrojanInboundObject {
    clients: TrojanClientObject[];

    fallbacks: FallbackObject[];

    constructor(clients: TrojanClientObject | TrojanClientObject[], fallbacks: FallbackObject | FallbackObject[]) {
        if (clients instanceof TrojanClientObject) clients = [clients];
        if (fallbacks instanceof FallbackObject) fallbacks = [fallbacks];

        this.clients = clients;
        this.fallbacks = fallbacks;
    }
}
```

* `clients`: **[TrojanClientObject[]](#TrojanClientObject)**

  客户端列表。

* `fallbacks`: **[FallbackObject[]](/protocol/Fallback.md#FallbackObject)**

  回落分流列表。

* `constructor()`: **TrojanInboundObject**

  构造函数。

  参数：

  * `clients`: **[TrojanClientObject](#TrojanClientObject)** | **[TrojanClientObject[]](#TrojanClientObject)**

    客户端列表。其值为一个 [TrojanClientObject](#TrojanClientObject) 对象或一个 [TrojanClientObject[]](#TrojanClientObject) 数组。

  * `fallbacks`: **[FallbackObject](/protocol/Fallback.md#FallbackObject)** | **[FallbackObject[]](/protocol/Fallback.md#FallbackObject)**

    回落分流列表。其值为一个 [FallbackObject](/protocol/Fallback.md#FallbackObject) 对象或一个 [FallbackObject[]](/protocol/Fallback.md#FallbackObject) 数组。

## TrojanOutboundObject

```typescript
class TrojanOutboundObject {
    servers: TrojanServerObject[];

    constructor(servers: TrojanServerObject | TrojanServerObject[]) {
        if (servers instanceof TrojanServerObject) servers = [servers];
        this.servers = servers;
    }
}
```

* `servers`: **[TrojanServerObject[]](#TrojanServerObject)**

  服务器列表。

* `constructor()`: **TrojanOutboundObject**

  构造函数。

  参数：

  * `servers`: **[TrojanServerObject](#TrojanServerObject)** | **[TrojanServerObject[]](#TrojanServerObject)**

    服务器列表。其值为一个 [TrojanServerObject](#TrojanServerObject) 对象或一个 [TrojanServerObject[]](#TrojanServerObject) 数组。

## TrojanClientObject

```typescript
class TrojanClientObject {
    password: string;

    email: string;

    level: number = 0;

    constructor(email: string, password: string) {
        this.password = password;
        this.email = email;
    }
}
```

* `password`: **string**

  密码。

* `email`: **string**

  邮件地址。

* `level`: **number**

  用户等级，默认值为 `0`。

* `constructor()`: **TrojanClientObject**

  构造函数。

  参数：

  - `email`: **string**

    邮件地址。

  - `password`: **string**

    密码。

## TrojanServerObject

```typescript
class TrojanServerObject {
    address: string;

    port: number;

    email: string;

    password: string;

    level: number = 0;

    constructor(address: string, port: number, email: string, password: string) {
        this.address = address;
        this.port = port;
        this.email = email;
        this.password = password;
    }
}
```

* `address`: **string**

  服务器地址，支持 IPv4、IPv6 和域名。

* `port`: **number**

  服务器端口。

* `password`: **string**

  密码。

* `email`: **string**

  邮件地址。

* `level`: **number**

  用户等级。

* `constructor()`: **TrojanServerObject**

  构造函数。

  参数：

  * `address`: **string**

    服务器地址，支持 IPv4、IPv6 和域名。

  * `port`: **number**

    服务器端口。

  * `email`: **string**

    邮件地址。

  * `password`: **string**

    密码。