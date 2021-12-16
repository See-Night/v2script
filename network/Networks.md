# 连接列表

**V2script** 支持 **v2ray** 所有支持的连接方式，但是有一定的滞后性（取决于我的偷懒程度）。

目前支持的连接方式如下所示：

| 连接方式                                 | 类                                                           |
| ---------------------------------------- | ------------------------------------------------------------ |
| [Tcp](/network/Tcp.md)                   | [`TcpObject`](/network/Tcp.md#TcpObject)                     |
| [mKcp](/network/Kcp.md)                  | [`KcpObject`](/network/Kcp.md#KcpObject)                     |
| [Websocket](/network/Websocket.md)       | [`WebsocketObject`](/network/Websocket.md#WebsocketObject)   |
| [HTTP/2](/network/HTTP2.md)              | [`HttpObject`](/network/HTTP2.md#HttpObject)                 |
| [QUIC](/network/QUIC.md)                 | [`QuicObject`](/network/QUIC.md#QuicObject)                  |
| [DomainSocket](/network/DomainSocket.md) | [`DomainSocketObject`](/network/DomainSocket.md#DomainSocketObject) |
| [gRCP](/network/grpc.md)                 | [`grpcObject`](/network/grpc.md#grcpObject)                  |
| [Sockopt](/network/Sockopt.md)           | [`SockoptObject`](/network/Sockopt.md#SockoptObject)         |

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

- `none`：默认值，不进行伪装，发送的数据是没有特征的数据包。
- `srtp`：伪装成 SRTP 数据包，会被识别为视频通话数据（如 FaceTime）。
- `utp`：伪装成 uTP 数据包，会被识别为 BT 下载数据。
- `wechat-video`：伪装成微信视频通话的数据包。
- `dtls`：伪装成 DTLS 1.2 数据包。
- `wireguard`：伪装成 WireGuard 数据包。（并不是真正的 WireGuard 协议）
