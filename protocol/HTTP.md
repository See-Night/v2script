# HTTP

HTTP 的配置分为两部分，[`HTTPInboundObject`](#HTTPInboundObject) 和 [`HTTPOutboundObject`](#HTTPOutboundObject)，分别对应入站和出站协议配置中的 `settings` 项。

## HTTPInboundObject

```typescript
class HTTPInboundObject {
    timeout: number = 300;

    accounts: AccountObject[] = [];

    allowTransparent: boolean = false;

    userLevel: number = 0;
}
```

* `timeout`: **number**

  从客户端读取数据的超时设置（秒），0 表示不限时。默认值为 300。 V2Ray 3.1 后等价于对应用户等级的 `connIdle` 策略。

* `accounts`: [AccountObject[]](/protocol/Account.md)

  一个数组，数组中每个元素为一个用户帐号。默认值为空。

  当 `accounts` 非空时，HTTP 代理将对入站连接进行 Basic Authentication 验证。

* `allowTransparent`: **boolean**

  当为 `true` 时，会转发所有 HTTP 请求，而非只是代理请求。若配置不当，开启此选项会导致死循环。

* `userLevel`: **number**

  用户等级，所有连接使用这一等级。

## HTTPOutboundObject

```typescript
class HTTPOutboundObject {
    servers: HTTPServerObject[];

    constructor(servers: HTTPServerObject | HTTPServerObject[]) {
        if (servers instanceof HTTPServerObject) servers = [servers];
        this.servers = servers;
    }
}
```

* `servers`: **[HTTPServerObject[]](#HTTPServerObject)**

  HTTP 代理服务器配置，若配置多个，循环使用 (RoundRobin)。

* `constructor()`: **HTTPOutboundObject**

  构造函数。

  参数：

  * `servers`: **[HTTPServerObject](#HTTPServerObject)** | **[HTTPServerObject[]](#HTTPServerObject)**

    HTTP 代理服务器配置。

## HTTPServerObject

```typescript
class HTTPServerObject {
    address: string;

    port: number;

    users: AccountObject[] = null;

    constructor(address: string, port: number, users?: AccountObject | AccountObject[]) {
        this.address = address;
        this.port = port;
        this.users = (users instanceof AccountObject)?[users]:users || null;
    }
}
```

* `address`: **string**

  HTTP 代理服务器地址。

* `port`: **number**

  HTTP 代理服务器端口。

* `users`: **[AccountObject[]](/protocol/Account.md)**

  一个数组，数组中每个元素为一个用户帐号。

* `constructor()`: **HTTPServerObject**

  构造函数。

  参数：

  * `address`: **string**

    HTTP 代理服务器地址。

  * `port`: **number**

    HTTP 代理服务器端口。

  * `users`: **[AccountObject](/protocol/Account.md)** | **[AccountObject[]](/protocol/Account.md)**

    一个数组，数组中每个元素为一个用户帐号。

