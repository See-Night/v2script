# QUIC

QUIC 全称 Quick UDP Internet Connection，是由 Google 提出的使用 UDP 进行多路并发传输的协议。其主要优势是:

1. 减少了握手的延迟（1-RTT 或 0-RTT）
2. 多路复用，并且没有 TCP 的阻塞问题
3. 连接迁移，（主要是在客户端）当由 Wifi 转移到 4G 时，连接不会被断开。

QUIC 目前处于实验期，使用了正在标准化过程中的 IETF 实现，不能保证与最终版本的兼容性。

## QuicObject

```typescript
class QUICObject {
    security: QUIC_SECURITY = QUIC_SECURITY.none;

    key: string = "";

    header: { type: HEADER_OBJECT } = { type: HEADER_OBJECT.none };
}
```

* `security`: **[QUIC_SECURITY](#QUIC_SECURITY)**

  加密方式。默认值为不加密。

  此加密是对 QUIC 数据包的加密，加密后数据包无法被探测。

* `key`: **string**

  加密时所用的密钥。可以是任意字符串。当 `security` 不为 `"none"` 时有效。

* `header`: **{ type: [HEADER_OBJECT](/network/Networks.md#HEADER_OBJECT) }**

  数据包头部伪装设置。

## QUIC_SECURITY

```typescript
const enum QUIC_SECURITY {
    none = "none",
    aes_128_gcm = "aes-128-gcm",
    chacha20_poly1305 = "chacha20-poly1305"
}
```

