# 连接列表

**V2script** 支持 **v2ray** 所有支持的连接方式，但是有一定的滞后性（取决于我的偷懒程度）。

目前支持的连接方式如下所示：

| 连接方式                | 类                                       |
| ----------------------- | ---------------------------------------- |
| [Tcp](/network/Tcp.md)  | [`TcpObject`](/network/Tcp.md#TcpObject) |
| [mKcp](/network/Kcp.md) | [`KcpObject`](/network/Kcp.md#KcpObject) |
|                         |                                          |
|                         |                                          |
|                         |                                          |
|                         |                                          |
|                         |                                          |
|                         |                                          |

## NETWORK

```typescript
const enum NETWORK {
    tcp = "tcp",
    kcp = "kcp",
    websocket = "ws",
    http = "http",
    domainsocket = "domainsocket",
    quic = "quic",
    grpc = "grpc"
}
```

## SECURITY

```typescript
const enum SECURITY {
    none = "none",
    tls = "tls"
}
```

## HEADER_OBJECT

```typescript
const enum HEADER_OBJECT {
    none = "none",

    srtp = "srtp",

    utp = "utp",

    wechat_video = "wechat-video",

    dtls = "dtls",

    wireguard = "wireguard"
}
```

