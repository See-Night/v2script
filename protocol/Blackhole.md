# Blackhole

Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站，配合 [路由](Routing.md) 一起使用，可以达到禁止访问某些网站的效果。

## BlackholeOutboundObject

```typescript
class BlackholeOutboundObject {
    response: {type: BLACKHOLE_RESPONSE } = {
        type: BLACKHOLE_RESPONSE.none
    };
}
```

* `response`: {type: [BLACKHOLE_RESPONSE](#BLACKHOLE_RESPONSE) }

  配置黑洞的响应数据。Blackhole 会在收到待转发数据之后，发送指定的响应数据，然后关闭连接。待转发的数据将被丢弃。如不指定此项，Blackhole 将直接关闭连接。

## BLACKHOLE_RESPONSE

```typescript
const enum BLACKHOLE_RESPONSE {
    none = "none",
    http = "http"
}
```

* `none`

  Blackhole 将直接关闭连接。

* `http`

  Blackhole 会发回一个简单的 HTTP 403 数据包，然后关闭连接。