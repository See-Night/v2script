# Freedom

Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据。

## FreedomOutboundObject

```typescript
class FreedomOutboundObject {
    domainStrategy: FREEDOM_STRATEGY = FREEDOM_STRATEGY.AsIs;

    redirect: string;

    userLevel: string;

    constructor(redirect: string, userLevel?:string) {
        this.redirect = redirect;
        this.userLevel = userLevel || this.userLevel;
    }
}
```

* `domainStrategy`: **[FREEDOM_STRATEGY](#FREEDOM_STRATEGY)**

  在目标地址为域名时，Freedom 可以直接向此域名发出连接，或者将域名解析为 IP 之后再建立连接。

* `redirect`: **string**

  Freedom 会强制将所有数据发送到指定地址（而不是入站协议指定的地址）。其值为一个字符串，样例：`"127.0.0.1:80"`，`":1234"`。当地址不指定时，如 `":443"`，Freedom 不会修改原先的目标地址。当端口为 `0` 时，如 `"v2ray.com: 0"`，Freedom 不会修改原先的端口。

* `userLevel`: **number**

  用户等级，所有连接都使用这一等级。
  
* `constructor()`: **FreedomOutboundObject**

  构造函数。

  参数：

  * `redirect`: **string**

    Freedom 会强制将所有数据发送到指定地址（而不是入站协议指定的地址）。

  * `userLevel`: **number**

    用户等级，所有连接都使用这一等级。

## FREEDOM_STRATEGY

```typescript
const enum FREEDOM_STRATEGY {
    AsIs = "AsIs",
    UseIP = "UseIP",
    UseIPv4 = "UseIPv4",
    UseIPv6 = "UseIPv6"
}
```

* `AsIs`

  直接向此域名发出连接。

* `UseIP`

  (V2Ray 4.6+) 当使用 `"UseIP"` 模式，并且 [出站连接配置](/advanced/Outbounds.md#OutboundObject) 中指定了 `sendThrough` 时，Freedom 会根据 `sendThrough` 的值自动判断所需的 IP 类型，IPv4 或 IPv6。

* `UseIPv4`

  (V2Ray 4.7+)  当使用 `"UseIPv4"` 模式时，Freedom 会只使用对应的 IPv4。当 `sendThrough` 指定了不匹配的本地地址时，将导致连接失败。

* `UseIPv6`

  (V2Ray 4.7+)  当使用 `"UseIPv6"` 模式时，Freedom 会只使用对应的 IPv6。当 `sendThrough` 指定了不匹配的本地地址时，将导致连接失败。