# Socks

标准 Socks 协议实现，兼容 [Socks 4](http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol)、Socks 4a 和 [Socks 5](http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol)。

Socks 的配置分为两部分，[`SocksInboundObject`](#SocksInboundObject) 和 [`SocksOutboundObject`](#SocksOutboundObject)，分别对应入站和出站协议配置中的 `settings` 项。

!> 如果你将 Socks5 代理在不安全的网络环境中分享给其他人使用，建议搭配防火墙使用。Rfc: [SOCKS 5 的认证在使用 UDP 时可被绕过](https://github.com/v2fly/v2fly-github-io/issues/104)

## SocksInboundObject

```typescript
class SocksInboundObject {
    auth: SOCKS_AUTH = SOCKS_AUTH.noauth;

    accounts: AccountObject[] = null;

    udp: boolean = false;

    ip: string = null;

    userLevel: number = 0;

    constructor(auth?: SOCKS_AUTH, account?: AccountObject | AccountObject[]) {
        this.auth = auth || this.auth;

        if (account instanceof AccountObject) account = [account];
        this.accounts = account || null;
    }
}
```

* `auth`: **[SOCKS_AUTH](#SOCKS_AUTH)**

  Socks 协议的认证方式。

* `accounts`: **[AccountObject[]](/protocol/Account.md)**

  一个数组，数组中每个元素为一个用户帐号。默认值为空。此选项仅当 `auth` 为 `SOCKS_AUTH.password` 时有效。

* `udp`: **boolean**

  是否开启 UDP 协议的支持。默认值为 `false`。

* `ip`: **string**

  SOCKS5 通过 `UDP ASSOCIATE` 命令建立 UDP 会话。服务端在对客户端发来的该命令的回复中，指定客户端发包的目标地址。

  - v4.34.0+: 默认值为空，此时对于通过本地回环 IPv4/IPv6 连接的客户端，回复对应的回环 IPv4/IPv6 地址；对于非本机的客户端，回复当前入站的监听地址。
  - v4.33.0 及更早版本: 默认值 `127.0.0.1`。

  你可以通过配置此项使 V2Ray 固定回复你配置的地址。如果你不知道此项的作用，留空即可。

* `userLevel`: **number**

  用户等级，所有连接使用这一等级。

* `constructor()`: **SocksInboundObject**

  构造函数。

  参数：

  * `auth`: **[SOCKS_AUTH](#SOCKS_AUTH)**

    Socks 协议的认证方式。

  * `accounts`: **[AccountObject](/protocol/Account.md)** | **[AccountObject[]](/protocol/Account.md)**

    一个 [AccountObject](/protocol/Account.md) 对象或 [AccountObject](/protocol/Account.md) 数组，数组中每个元素为一个用户帐号。

## SocksOutboundObject

```typescript
class SocksOutboundObject {
    servers: SocksServerObject[];

    version: "5" | "4a" | "4";

    constructor(version: "5" | "4a" | "4", servers: SocksServerObject | SocksServerObject[]) {
        this.version = version;

        if (servers instanceof SocksServerObject) servers = [servers];
        this.servers = servers;
    }
}
```

* `servers`: **[SocksServerObject[]](#SocksServerObject)**

  Socks 服务器列表，其中每一项是一个服务器配置。

* `version`: "5" | "4a" | "4"

  Socks 协议版本。

* `constructor()`: **SocksOutboundObject**

  构造函数。

  参数：

  * `version`: "5" | "4a" | "4"

    Socks 协议版本。

  * `servers`: **[SocksServerObject](#SocksServerObject)** | **[SocksServerObject[]](#SocksServerObject)**

    Socks 服务器列表。

## SOCKS_AUTH

```typescript
const enum SOCKS_AUTH {
    noauth = "noauth",

    password = "password"
}
```

* `noauth`

  不认证。

* `password`

  密码验证。

## SocksServerObject

```typescript
class SocksServerObject {
    address: string;

    port: number;

    users: SocksUserObject[] = [];

    constructor(address: string, port: number) {
        this.address = address;
        this.port = port;
    }
}
```

* `address`: **string**

  服务器地址。

* `port`: **number**

  服务器端口。

* `users`: **[SocksUserObject[]](#SocksUserObject)**

  用户列表，其中每一项一个用户配置。当列表不为空时，Socks 客户端会使用此用户信息进行认证；如未指定，则不进行认证。

* `constructor()`: **SocksServerObject**

  构造函数。

  参数：

  * `address`: **string**

    服务器地址。

  * `port`: **number**

    服务器端口。

## SocksUserObject

```typescript
class SocksUserObject {
    user: string;

    pass: string;

    level: number = 0;

    constructor(user: string, pass: string) {
        this.user = user;
        this.pass = pass;
    }
}
```

* `user`: **string**

  用户名。

* `pass`: **string**

  密码。

* `level`: **number**

  用户等级。

* `constructor()`: **SocksUserObject**

  构造函数。

  参数：

  * `user`: **string**

    用户名。

  * `pass`: **string**

    密码。

  