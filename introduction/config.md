# 配置

新建好 v2ray 实例后，我们就可以对其进行配置了。

在 **v2script** 中，所有的结构、传输协议配置、连接方式配置均为类，需要实例化后才能对其进行赋值。这些类的大部分属性均为公有属性，可以随意修改，但是也有一小部分为私有属性，想要修改它们的值需要调用类中的方法。

V2ray 的配置中有很多复杂繁琐的配置，而新手一般不会用到这些功能，因此 **v2script** 将这些配置属性预设了官方推荐的默认值。如果你想要对其进行配置，可以随之修改。

详细内容请查看各个类中的定义。

## 预置枚举值

由于 v2ray 配置中有相当多的值为字符串类型，且重复性强，为了优化编程体验，**v2script** 将部分配置值设置为枚举值，用全字母大写标识。例如，连接方式为：`NETWORK`：

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

你可以通过 `NETWORK.tcp` 去作为 `“tcp”` 字符串使用。在 IDE 中，这样的设置更方便自动补全功能的实现。

## 配置一个简单的 v2ray 实例

一个最简单的 v2ray 实例包括一个入站连接和出站连接，其他配置均取默认值即可。也因此 `v2ray` 类的实例化时需要 `inbound` 和 `outbound` 两个参数。

```typescript
import { 
    v2ray, 
    InboundObject, 
    PROTOCOL, 
    VmessInboundObject, 
    VmessClientObject, 
    OutboundObject, 
    VmessOutboundObject, 
    VmessServerObject, 
    VmessUserObject 
} from "ts2ray";

let v = new v2ray(    
    new InboundObject(
        "in", 
        "127.0.0.1", 
        10080, 
        PROTOCOL.Vmess, 
        new VmessInboundObject(
            new VmessClientObject("uuid", "test@test.com")
        )
    ), 
    new OutboundObject(
        "out", 
        PROTOCOL.VMess, 
        new VmessOutboundObject(
            new VmessServerObject(
                "1.1.1.1", 
                123456, 
                new VmessUserObject("a")
            )
        ), 
        false
    )
);
```

## 导出配置

在 Typescript 中可以使用 `JSON` 对象将其 `v2ray` 实例转换为 JSON 格式的文本。

```typescript
JSON.stringify(v, null, 4);
```
