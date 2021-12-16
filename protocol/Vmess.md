# VMess

[VMess](https://www.v2fly.org/developer/protocols/vmess.html) 是一个加密传输协议，它分为入站和出站两部分，通常作为 V2Ray 客户端和服务器之间的桥梁。

VMess 依赖于系统时间，请确保使用 V2Ray 的系统 UTC 时间误差在 90 秒之内，时区无关。在 Linux 系统中可以安装`ntp`服务来自动同步系统时间。

> 在 v4.28.1 版本后，客户端 AlterID 设置为 0 代表启用 VMessAEAD ；服务端为自动适配，可同时兼容启用和未开启 VMessAEAD 的客户端。
>
> 对于 VMess MD5 认证信息的兼容可以被关闭。(v4.35.0+)

VMess 的配置分为两部分，[`VmessInboundObject`](#VmessInboundObject) 和 [`VmessOutboundObject`](#VmessOutboundObject)，分别对应入站和出站协议配置中的`settings`项。

## VmessInboundObject

```typescript
class VmessInboundObject {
    clients: VmessClientObject[];

    detour: DetourObject = null;

    default: DefaultObject = null;

    disableInsecureEncryption: boolean = false;

    constructor(clients: VmessClientObject | VmessClientObject[]) {
        if (clients instanceof VmessClientObject) clients = [clients];
        this.clients = clients;
    }
}
```

* `client`: **[VmessClientObject[]](#VmessClientObject)**

  一组服务器认可的用户。clients 可以为空。当此配置用作动态端口时，V2Ray 会自动创建用户。

* `detour`: **[DetourObject](#DetourObject)**

  指示对应的出站协议使用另一个服务器。

* `default`: **[DefaultObject](#DefaultObject)**

  可选，clients 的默认配置。仅在配合`detour`时有效。

* `disableInsecureEncryption`: **boolean**

  是否禁止客户端使用不安全的加密方式，当客户端指定下列加密方式时，服务器会主动断开连接。默认值为`false`。

  - `"none"`
  - `"aes-128-cfb"`

* `constructor()`: **VmessInboundObject**

  构造函数。

  参数：

  * `client`: **[VmessClientObject](#VmessClientObject)** | **[VmessClientObject[]](#VmessClientObject)**

    一组服务器认可的用户。其值为一个 [VmessClientObject](#VmessClientObject) 对象或一个 [VmessClientObject[]](#VmessClientObject) 数组。

## VmessOutboundObject

```typescript
class VmessOutboundObject {
    vnext: VmessServerObject[];

    constructor(servers: VmessServerObject | VmessServerObject[]) {
        if (servers instanceof VmessServerObject) servers = [servers];
        this.vnext = servers;
    }
}
```

* `vnext`: **[VmessServerObject[]](#VmessServerObject)**

  一个数组，包含一系列的服务器配置。

* `constructor()`: **VmessOutboundObject**

  构造函数。

  参数：

  * `servers`: **[VmessServerObject](#VmessServerObject)** | **[VmessServerObject[]](#VmessServerObject)**

    服务器配置。其值为一个 [VmessServerObject](#VmessServerObject) 对象或一个 [VmessServerObject[]](#VmessServerObject) 数组。

## VmessClientObject

```typescript
class VmessClientObject {
    id: string;

    level: number = 0;

    alterId: number = 0;

    email: string;

    constructor(id: string, email: string) {
        this.id = id;
        this.email = email;
    }
}
```

* `id`: **string**

  VMess 的用户 ID。必须是一个合法的 UUID。

* `level`: **number**

  用户等级。

* `alterId`: **number**

  为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID。这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD。不指定的话，默认值是 `0`。最大值 `65535`。这个值不能超过服务器端所指定的值。

* `email`: **string**

  用户邮箱地址，用于区分不同用户的流量。

* `constructor()`: **VmessClientObject**

  构造函数。

  参数：

  * `id`: **string**

    VMess 的用户 ID。

  * `email`: **string**

    用户邮箱地址，用于区分不同用户的流量。

## DetourObject

```typescript
class DetourObject {
    to: string;

    constructor(to: string) {
        this.to = to;
    }
}
```

* `to`: **string**

  一个入站协议的 `tag`。

* `constructor()`: **DetourObject**

  构造函数。

  参数：

  * `to`: **string**

    一个入站协议的 `tag`。

## DefaultObject

```typescript
class DefaultObject {
    level: number = 0;

    alterId: number = 0;
}
```

* `level`: **number**

  用户等级。默认值为`0`。

* `alterId`: **number**

  动态端口的默认`alterId`，默认值为`0`。

## VmessServerObject

```typescript
class VmessServerObject {
    address: string;

    port: number;

    users: VmessUserObject[];

    constructor(address: string, port: number, users: VmessUserObject | VmessUserObject[]) {
        this.address = address;
        this.port = port;

        if (users instanceof VmessUserObject) users = [users];
        this.users = users;
    }
}
```

* `address`: **string**

  服务器地址，支持 IP 地址或者域名。

* `port`: **number**

  服务器端口号。

* `users`: **[VmessUserObject[]](#VmessUserObject)**

  一组服务器认可的用户。

* `constructor()`: **VmessServerObject**

  构造函数。

  参数：

  * `address`: **string**

    服务器地址，支持 IP 地址或者域名。

  * `port`: **number**

    服务器端口号。

  * `users`: **[VmessUserObject](#VmessUserObject)** | **[VmessUserObject[]](#VmessUserObject)**

    服务器认可的用户。其值为一个 [VmessUserObject](#VmessUserObject) 对象或一个 [VmessUserObject[]](#VmessUserObject) 数组。

## VmessUserObject

```typescript
class VmessUserObject {
    id: string;

    alterId: number = 0;

    level: number = 0;

    security: VMESS_SECURITY = VMESS_SECURITY.auto;

    constructor(id: string) {
        this.id = id;
    }
}
```

* `id`: **string**

  VMess 用户的主 ID。必须是一个合法的 UUID。

* `alterId`: **number**

  为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID。这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD。不指定的话，默认值是 `0`。最大值 `65535`。这个值不能超过服务器端所指定的值。

  > 客户端可通过设置环境变量 `V2RAY_VMESS_AEAD_DISABLED=true` 强行禁用 VMessAEAD （不推荐，仅用于兼容服务端版本在 v4.28.1 前**且**设置了 `alterId=0` ）

* `level`: **number**

  用户等级。

* `security`: **[VMESS_SECURITY](#VMESS_SECURITY)**

  加密方式，客户端将使用配置的加密方式发送数据，服务器端自动识别，无需配置。

* `constructor()`: **VmessUserObject**

  构造函数。

  参数：

  * `id`: **string**

    VMess 用户的主 ID。

## VMESS_SECURITY

```typescript
const enum VMESS_SECURITY {
    aes_128_gcm = "aes-128-gcm",

    chacha20_poly1305 = "chacha20-poly1305",

    auto = "auto",

    none = "none",

    zero = "zero"
}
```

- `aes-128-gcm`：推荐在 PC 上使用
- `chacha20-poly1305`：推荐在手机端使用
- `auto`：默认值，自动选择（运行框架为 AMD64、ARM64 或 s390x 时为 aes-128-gcm 加密方式，其他情况则为 Chacha20-Poly1305 加密方式）
- `none`：不加密
- `zero`：不加密，也不进行消息认证 (v4.35.0+)

> 推荐使用`auto`加密方式，这样可以永久保证安全性和兼容性。
>
> `none` 伪加密方式会计算并验证数据包的校验数据，由于认证算法没有硬件支持，在部分平台可能速度比有硬件加速的 `aes-128-gcm` 还慢。
>
> `zero` 伪加密方式不会加密消息也不会计算数据的校验数据，因此理论上速度会高于其他任何加密方式。实际速度可能受到其他因素影响。
>
> 不推荐在未开启 TLS 加密并强制校验证书的情况下使用 `"none"` `"zero"` 伪加密方式。 如果使用 CDN 或其他会解密 TLS 的中转平台或网络环境建立连接，不建议使用 `none` `zero` 伪加密方式。
>
> 无论使用哪种加密方式， VMess 的包头都会受到加密和认证的保护。





