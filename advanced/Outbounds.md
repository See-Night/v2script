# Outbounds 出站连接

出站连接用于向远程网站或下一级代理服务器发送数据，可用的协议请见[协议列表](/protocol/Protocols.md)。

## OutboundObject

`OutboundObject` 对应配置文件中 `outbounds` 项的一个子元素。

```typescript
class OutboundObject {
    sendThrough: string = "0.0.0.0";

    protocol: PROTOCOL;

    settings: BlackholeOutboundObject | DnsOutboundObject | FreedomOutboundObject | HTTPOutboundObject | LoopbackOutboundObject | ShadowsocksOutboundObject | SocksOutboundObject | TrojanOutboundObject | VlessOutboundObject | VmessOutboundObject;

    tag: string;

    streamSettings: StreamSettingsObject = null;

    proxySettings: ProxySettingsObject = null;

    mux: MuxObject = null;

    constructor(
        tag: string,
        Protocol: PROTOCOL, 
        settings: BlackholeOutboundObject | DnsOutboundObject | FreedomOutboundObject | HTTPOutboundObject | LoopbackOutboundObject | ShadowsocksOutboundObject | SocksOutboundObject | TrojanOutboundObject | VlessOutboundObject | VmessOutboundObject,
        mux: boolean
    ) {
        this.tag = tag;
        this.protocol = Protocol;
        this.settings = settings;

        if (mux) this.mux = new MuxObject();
    }
}
```

* `sendThrough`: **string**

  用于发送数据的 IP 地址，当主机有多个 IP 地址时有效，默认值为 `"0.0.0.0"`。

* `protocol`: **[PROTOCOL](/protocol/Protocols.md#PROTOCOL)**

  连接协议名称，可选的值见[协议列表](/protocol/Protocols.md)。

* `settings`: **[BlackholeOutboundObject](/protocol/Blackhole.md#BlackholeOutboundObject)** | **[DnsOutboundObject](/protocol/DNS.md#DnsOutboundObject)** | **[FreedomOutboundObject](/protocol/Freedom.md#FreedomOutboundObject)** | **[HTTPOutboundObject](/protocol/HTTP.md#HTTPOutboundObject)** | **[LoopbackOutboundObject](/protocol/Loopback.md#LoopbackOutboundObject)** | **[ShadowsocksOutboundObject](/protocol/Shadowsocks.md#ShadowsocksOutboundObject)** | **[SocksOutboundObject](/protocol/Socks.md#SocksOutboundObject)** | **[TrojanOutboundObject](/protocol/Trojan.md#TrojanOutboundObject)** | **[VlessOutboundObject](/protocol/VLess.md#VlessOutboundObject)** | **[VmessOutboundObject](/protocol/VMess.md#VmessOutboundObject)**

  具体的配置内容，视协议不同而不同。详见每个协议中的 `OutboundObject`。

* `tag`: **string**

  此出站连接的标识，用于在其它的配置中定位此连接。当其值不为空时，必须在所有 tag 中唯一。

* `streamSettings`: **[StreamSettingsObject](/advanced/Transport.md#StreamSettingsObject)**

  [底层传输配置](/advanced/Transport.md)。

* `proxySettings`: **[ProxySettingsObject](#ProxySettingsObject)**

  出站代理配置。当出站代理生效时，此出站协议的 `streamSettings` 将不起作用。

* `mux`: **[MuxObject](#MuxObject)**

  多路复用配置。

* `constructor()`: **OutboundObject**

  构造函数。

  参数：

  * `tag`: **string**

    此出站连接的标识。

  * `protocol`: **[PROTOCOL](/protocol/Protocols.md#PROTOCOL)**

    连接协议名称。

  * `settings`: **[BlackholeOutboundObject](/protocol/Blackhole.md#BlackholeOutboundObject)** | **[DnsOutboundObject](/protocol/DNS.md#DnsOutboundObject)** | **[FreedomOutboundObject](/protocol/Freedom.md#FreedomOutboundObject)** | **[HTTPOutboundObject](/protocol/HTTP.md#HTTPOutboundObject)** | **[LoopbackOutboundObject](/protocol/Loopback.md#LoopbackOutboundObject)** | **[ShadowsocksOutboundObject](/protocol/Shadowsocks.md#ShadowsocksOutboundObject)** | **[SocksOutboundObject](/protocol/Socks.md#SocksOutboundObject)** | **[TrojanOutboundObject](/protocol/Trojan.md#TrojanOutboundObject)** | **[VlessOutboundObject](/protocol/VLess.md#VlessOutboundObject)** | **[VmessOutboundObject](/protocol/VMess.md#VmessOutboundObject)**

    具体的配置内容，视协议不同而不同。

  * `mux`: **boolean**

    是否开启多路复用。

## ProxySettingsObject

```typescript
class ProxySettingsObject {
    tag: string;

    transportLayer: boolean;

    constructor(tag: string, transportLayer: boolean) {
        this.tag = tag;
        this.transportLayer = transportLayer;
    }
}
```

* `tag`: **string**

  当指定另一个出站连接的标识时，此出站连接发出的数据，将被转发至所指定的出站连接发出。

* `transportLayer`: **boolean**

  是否启用传输层转发支持。在启用后,此出站连接的传输层协议将保持生效（如果传输层协议支持）。(v4.35.0+)

  如果不启用此选项, 在转发时传输层协议将失效，只能使用默认的 TCP 传输协议。

* `constructor()`: **ProxySettingsObject**

  构造函数。

  参数：

  * `tag`: **string**

    当指定另一个出站连接的标识时，此出站连接发出的数据，将被转发至所指定的出站连接发出。

  * `transportLayer`: **boolean**

    是否启用传输层转发支持。

## MuxObject

```typescript
class MuxObject {
    enable: boolean = false;

    concurrency: number = 8;
}
```

* `enabled`: **boolean**

  是否启用 Mux 转发请求，默认值 `false`。

* `concurrency`: **number**

  最大并发连接数。最小值 `1`，最大值 `1024`，默认值 `8`。

  填负数，如 `-1`，不加载 mux 模块（v4.22.0+）。

  这个数值表示了一个 TCP 连接上最多承载的 Mux 连接数量。当客户端发出了 8 个 TCP 请求，而 `concurrency=8` 时，V2Ray 只会发出一条实际的 TCP 连接，客户端的 8 个请求全部由这个 TCP 连接传输。