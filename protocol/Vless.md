# VLess

VLESS 是一个无状态的轻量传输协议，它分为入站和出站两部分，可以作为 V2Ray 客户端和服务器之间的桥梁。

与 [VMess](/protocol/Vmess.md) 不同，VLESS 不依赖于系统时间，认证方式同样为 UUID，但不需要 `alterId`。

VLESS 的配置分为两部分，[`VlessInboundObject`](#VlessInboundObject) 和 [`VlessOutboundObject`](#VlessOutboundObject)，分别对应入站和出站协议配置中的 `settings` 项。

## VlessInboundObject

```typescript
class VlessInboundObject {
    clients: VlessClientObject[];

    fallbacks: FallbackObject[];

    constructor(clients: VlessClientObject | VlessClientObject[], fallbacks: FallbackObject | FallbackObject[]) {
        if (clients instanceof VlessInboundObject) clients = [clients];
        if (fallbacks instanceof FallbackObject) fallbacks = [fallbacks];

        this.clients = clients;
        this.fallbacks = fallbacks;
    }
}
```

* `clients`: **[VlessClientObject[]](#VlessClientObject)**

  客户端列表。一组服务端认可的用户。

* `fallbacks`: **[FallbackObject[]](/protocol/Fallback.md#FallbackObject)**

  一个数组，包含一系列强大的回落分流配置。

* `constructor()`: **VlessInboundObject**

  构造函数。

  参数：

  * `clients`: **[VlessClientObject](#VlessClientObject)** | **[VlessClientObject[]](#VlessClientObject)**

    客户端列表。其值为一个 [VlessInboundObject](#VlessInboundObject) 对象或一个 [VlessInboundObject[]](#VlessInboundObject) 数组。

  * `fallbacks`: **[FallbackObject](/protocol/Fallback.md#FallbackObject)** | **[FallbackObject[]](/protocol/Fallback.md#FallbackObject)**

    回落分流列表。其值为一个 [FallbackObject](/protocol/Fallback.md#FallbackObject) 对象或一个 [FallbackObject[]](/protocol/Fallback.md#FallbackObject) 数组。

## VlessOutboundObject

```typescript
class VlessOutboundObject {
    vnext: VlessServerObject[];

    constructor(servers: VlessServerObject | VlessServerObject[]) {
        if (servers instanceof VlessServerObject) servers = [servers];
        this.vnext = servers;
    }
}
```

* `vnext`: **[VlessServerObject[]](#VlessServerObject)**

  服务端的配置。

* `constructor()`: **VlessOutboundObject**

  构造函数。

  参数：

  * `servers`: **[VlessServerObject](#VlessServerObject)** | **[VlessServerObject[]](#VlessServerObject)**

    服务器配置。其值为一个 [VlessServerObject](#VlessServerObject) 对象或一个 [VlessServerObject[]](#VlessServerObject) 数组。

## VlessClientObject

```typescript
class VlessClientObject {
    id: string;

    level: number = 0;

    email: string;

    constructor(id: string, email: string) {
        this.id = id;
        this.email = email;
    }
}
```

* `id`: **string**

  VLESS 的用户 ID，必须是一个合法的 UUID。

* `level`: **number**

  用户等级。

* `email`: **string**

  用户邮箱，用于区分不同用户的流量（日志、统计）。

* `constructor()`: **VlessClientObject**

  构造函数。

  参数：

  * `id`: **string**

    VLESS 的用户 ID，必须是一个合法的 UUID。

  * `email`: **string**

    用户邮箱，用于区分不同用户的流量（日志、统计）。

## VlessServerObject

```typescript
class VlessServerObject {
    address: string;

    port: number;

    users: VlessUserObject[];

    constructor(address: string, port: number, users: VlessUserObject | VlessUserObject[]) {
        this.address = address;
        this.port = port;

        if (users instanceof VlessUserObject) users = [users];
        this.users = users;
    }
}
```

* `address`: **string**

  服务器地址。

* `port`: **number**

  服务器端口。

* `users`: **[VlessUserObject[]](#VlessUserObject)**

  一组服务端认可的用户。

* `constructor()`: **VlessServerObject**

  构造函数。

  参数：

  * `address`: **string**

    服务器地址。

  * `port`: **number**

    服务器端口。

  * `users`: **[VlessUserObject](#VlessUserObject)** | **[VlessUserObject[]](#VlessUserObject)**

    一组服务端认可的用户。其值为一个 [VlessUserObject](#VlessUserObject) 对象或一个 [VlessUserObject[]](#VlessUserObject) 数组。

## VlessUserObject

```typescript
class VlessUserObject {
    id: string;

    encryption: "none" = "none";

    level: number = 0;

    constructor(id: string) {
        this.id = id;
    }
}
```

* `id`: **string**

  VLESS 的用户 ID，必须是一个合法的 UUID。

* `encryption`: **`"none"`**

  现阶段需要填 `"none"`，不能留空。该要求是为了提醒使用者没有加密，也为了以后出加密方式时，防止使用者填错属性名或填错位置导致裸奔。
  若未正确设置 encryption 的值，使用 v2ray 或 -test 时会收到错误信息。

* `level`: **`number`**

  用户等级。

* `constructor()`: **VlessUserObject**

  构造函数。

  参数：

  * `id`: **string**

    VLESS 的用户 ID。