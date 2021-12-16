# Loopback

Loopback 是一个出站协议，可使出站连接被重新路由。

## LoopbackOutboundObject

```typescript
class LoopbackOutboundObject {
    inboundTag: string;

    constructor(inboundTag: string) {
        this.inboundTag = inboundTag;
    }
}
```

* `inboundTag`: **string**

  匹配入站来源的标识。

* `constructor()`: **LoopbackOutboundObject**

  构造函数。

  参数：

  * `inboundTag`: **string**

    匹配入站来源的标识。
