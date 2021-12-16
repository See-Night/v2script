# 传输协议列表

**V2script** 支持 **v2ray** 所有支持的传输协议，但是有一定的滞后性（取决于我的偷懒程度）。

目前支持的传输协议如下所示：

| 协议名称                                    | 方向                 | 类                                                           |
| ------------------------------------------- | -------------------- | ------------------------------------------------------------ |
| [Blackhole](/protocol/Blackhole.md)         | `Outbound`           | [`BlackholeOutboundObject`](/protocol/Blackhole.md#BlackholeOutboundObject) |
| [DNS](/protocol/DNS.md)                     | `Outbound`           | [`DnsOutboundObject`](/protocol/DNS.md#DnsOutboundObject)    |
| [Dokodemo-door](/protocol/Dokodemo-door.md) | `Inbound`            | [`DokodemodoorInboundObject`](/protocol/Dokodemo-door.md#DokodemodoorInboundObject) |
| [Freedom](/protocol/Freedom.md)             | `Outbound`           | [`FreedomOutboundObject`](/protocol/Freedom.md#FreedomOutboundObject) |
| [HTTP](/protocol/HTTP.md)                   | `Inbound` `Outbound` | [`HTTPInboundObject`](/protocol/HTTP.md#HTTPInboundObject) [`HTTPOutboundObject`](/protocol/HTTP.md#HTTPOutboundObject) |
| [Socks](/protocol/Socks.md)                 | `Inbound` `Outbound` | [`SocksInboundObject`](/protocol/Socks.md#SocksInboundObject) [`SocksOutboundObject`](/protocol/Socks.md#SocksOutboundObject) |
| [Shadowsocks](/protocol/Shadowsocks.md)     | `Inbound` `Outbound` | [`SocksInboundObject`](/protocol/Shadowsocks.md#ShadowsocksInboundObject) [`SocksOutboundObject`](/protocol/Shadowsocks.md#ShadowsocksOutboundObject) |
| [Trojan](/protocol/Trojan.md)               | `Inbound` `Outbound` | [`TrojanInboundObject`](/protocol/Trojan.md#TrojanInboundObject) [`TrojanOutboundObject`](/protocol/Trojan.md#TrojanOutboundObject) |
| [VMess](/protocol/Vmess.md)                 | `Inbound` `Outbound` | [`VmessInboundObject`](/protocol/Vmess.md#VmessInboundObject) [`VmessOutboundObject`](/protocol/Vmess.md#VmessOutboundObject) |
| [VLess](/protocol/Vless.md)                 | `Inbound` `Outbound` | [`VlessInboundObject`](/protocol/Vless.md#VlessInboundObject) [`VlessOutboundObject`](/protocol/Vless.md#VlessOutboundObject) |
| [Loopback](/protocol/Loopback.md)           | `Outbound`           | [`LoopbackOutboundObject`](/protocol/Loopback.md#LoopbackOutboundObject) |



## PROTOCOL

`PROTOCOL` 是传输协议的枚举值。

```typescript
const enum PROTOCOL {
    BlackHole = "blackhole",
    DNS = "dns",
    Dokodemo_door = "dokodemo-door",
    Freedom = "freedom",
    HTTP = "http",
    Socks = "socks",
    VMess = "vmess",
    Shadowsocks = "shadowsocks",
    Trojan = "trojan",
    VLess = "vless",
    Loopback = "loopback"
}
```

