# v2script

[![NODEJS](https://img.shields.io/badge/Nodejs->=10-green)](https://nodejs.org) [![NPM](https://img.shields.io/badge/npm-orange)](https://www.npmjs.com) [![TYPESCRIPT](https://img.shields.io/badge/typescript-4.1.3-informational)](https://www.typescriptlang.org/) 

> Change Language: [English](./README.en.md)

## 介绍

**v2script** 是一个基于 TypeScript 开发的 v2ray 配置生成包。

通常情况下，配置 v2ray 需要直接修改 `config.json` 文件，而 **v2script** 支持使用编程的方法来配置 `config.json`。因此它更适用于构建 v2ray 自动化脚本或者可视化应用。

**v2script** 的所有配置都是按照 [v2ray官方](https://www.v2fly.org/) 的文档进行设计和开发的，因此如果 **v2script** 的说明不够精确或者详细，您完全可以移步官网查看详细配置内容。

当然，**v2script** 仍有一些不足之处。如果您有更好的想法和建议，欢迎您贡献代码。

## 准备

在使用 **v2script** 之前，你需要在你的电脑上安装  **Nodejs（>=10）**，**npm**，以及 **TypeScript（>=4.1.3）**。

由于不同操作系统安装它们的方式各有不同，在此不做详细说明。如有疑问，请自行检索相关词条。

## 安装

使用 Nodejs 包管理器（npm，yarn等）安装 **v2script**。

```shell
# npm
$ npm install --save v2script

# yarn
$ yarn add v2script
```

## 开始使用

**v2script** 包含一个主类 `v2ray` 和其他结构类、协议类、传输类等，您可以直接导入它们。

```typescript
// v2ray
import { v2ray } from "v2script";

// 结构类
import { LogObject } from "v2script";

// 协议类
import { VmessInboundObject } from "v2script";

// 传输类
import { TcpObject } from "v2script";
```

本文只介绍一些基础的类和使用方法，详细内容请移步 [v2script Wiki](https://1145141919810.wang/v2script) 。

### 结构

```typescript
class v2ray {
    /** 日志配置，表示 V2Ray 如何输出日志 */
    log: LogObject = new LogObject();

    /** 远程控制 */
    api: ApiObject = null;

    /** 内置的 DNS 服务器，若此项不存在，则默认使用本机的 DNS 设置 */
    dns: DnsObject = null;

    /** 路由功能 */
    routing: RoutingObject = null;

    /** 本地策略，可进行一些权限相关的配置 */
    policy: PolicyObject = new PolicyObject();

    /** 一个数组，每个元素是一个入站连接配置 */
    inbounds: InboundObject[];

    /** 一个数组，每个元素是一个出站连接配置。列表中的第一个元素作为主出站协议。当路由匹配不存在或没有匹配成功时，流量由主出站协议发出 */
    outbounds: OutboundObject[];

    /** 用于配置 V2Ray 如何与其它服务器建立和使用网络连接 */
    transport: TransportObject = null;

    /** 统计信息 */
    stats: StatsObject = new StatsObject();

    /** 反向代理 */
    reverse: ReverseObject = null;

    /** 虚拟 DNS 服务器 */
    fakedns: FakeDnsObject[] = [];

    /** 浏览器转发模块 */
    browserForwarder: BrowserForwarderObject = null;

    /** 连接观测模块 */
    observatory: ObservatoryObject = null;
}
```

与 [v2ray 官网](https://www.v2fly.org/) 提供的配置相同，**v2script** 同样遵循此结构，并将每个结构特化为一个结构类（例如 `log` 对应 `LogObject` 类）。在此基础上，**v2script** 默认将一些不常用的键值设置为 `null`，以此优化新手体验。

### 协议

v2ray 提供了丰富的出/入站传输协议，在 **v2script** 中，每个传输协议的入站、出站分别特化为一个传输类，对应原配置中入站、出站配置的 `settings` 项。在这里以 Vmess 协议为例进行说明。

#### 出站

```typescript
class VmessOutboundObject {
    /** 一个数组，包含一系列的服务器配置 */
    vnext: VmessServerObject[];
}
```

#### 入站

```typescript
class VmessInboundObject {
    /** 一组服务器认可的用户。clients 可以为空。当此配置用作动态端口时，V2Ray 会自动创建用户。 */
    clients: VmessClientObject[];

    /** 指示对应的出站协议使用另一个服务器 */
    detour: DetourObject = null;

    /** clients 的默认配置。仅在配合detour时有效 */
    default: DefaultObject = null;

    /** 是否禁止客户端使用不安全的加密方式 */
    disableInsecureEncryption: boolean = false;
}
```

#### 协议列表

支持的协议如下：

| 协议名称      | 出站 / 入站   | 类                                                     |
| ------------- | ------------- | ------------------------------------------------------ |
| Blackhole     | `出站`        | `BlackholeOutboundObject`                              |
| DNS           | 出站          | `DnsOutboundObject`                                    |
| Dododemo-door | `入站`        | `DokodemodoorInboundObject`                            |
| Freedom       | `出站`        | `FreedomOutboundObject`                                |
| HTTP          | `出站` `入站` | `HTTPOutboundObject` `HTTPInboundObject`               |
| Shadowsocks   | `出站` `入站` | `ShadowsocksInboundObject` `ShadowsocksOutboundObject` |
| Socks         | `出站` `入站` | `SocksOutboundObject`  `SocksInboundObject`            |
| Trojan        | `出站` `入站` | `TrojanInboundObject` `TrojanOutboundObject`           |
| VLess         | `出站` `入站` | `VlessOutboundObject` `VlessInboundObject`             |
| VMess         | `出站` `入站` | `VmessOutboundObject` `VmessInboundObject`             |
| Loopback      | `出站`        | `LoopbackOutboundObject`                               |

### 传输方式

> 底层传输方式（transport）是当前 V2Ray 节点和其它节点对接的方式。底层传输方式提供了稳定的数据传输通道。通常来说，一个网络连接的两端需要有对称的传输方式。比如一端用了 WebSocket，那么另一个端也必须使用 WebSocket，否则无法建立连接。
>
> 底层传输（transport）配置分为两部分，一是全局设置（[TransportObject](https://www.v2fly.org/config/transport.html#transportobject)），二是分协议配置（[StreamSettingsObject](https://www.v2fly.org/config/transport.html#streamsettingsobject)）。分协议配置可以指定每个单独的入站出站协议用怎样的方式传输。通常来说客户端和服务器对应的出站入站协议需要使用同样的传输方式。当分协议传输配置指定了一种传输方式，但没有填写其设置时，此传输方式会使用全局配置中的设置。
>
>  —— 摘自 [v2fly]([Transport | V2Fly.org](https://www.v2fly.org/config/transport.html))

在 **v2script** 中，全局设置和分协议配置分别特化为 `TransportObject` 和 `StreamSettingsObject` 两个类，其配置如下：

#### 全局设置

```typescript
class TransportObject {
    /** 针对 TCP 连接的配置 */
    tcpSettings: TcpObject = null;

    /** 针对 mKCP 连接的配置 */
    kcpSettings: KcpObject = null;

    /** 针对 WebSocket 连接的配置 */
    wsSettings: WebSocketObject = null;

    /** 针对 HTTP/2 连接的配置 */
    httpSettings: HttpObject = null;

    /** 针对 QUIC 连接的配置 */
    quicSettings: QUICObject = null;

    /** 针对 Domain Socket 连接的配置 */
    dsSettings: DomainSocketObject = null;

    /** 针对 gRPC 连接的配置 */
    grpcSettings: grpcObject = null;
}
```

#### 分协议配置

```typescript
class StreamSettingsObject {
    /** 数据流所使用的网络类型，默认值为 `"tcp"` */
    network: NETWORK = NETWORK.tcp;

    /** 是否启用传输层加密，支持的选项有 `"none"` 表示不加密（默认值），`"tls"` 表示使用 TLS  */
    security: SECURITY = SECURITY.none;

    /** TLS 配置。TLS 由 Golang 提供，支持 TLS 1.3，不支持 DTLS */
    tlsSettings: TLSObject = null;
    
    /** 针对 TCP 连接的配置 */
    tcpSettings: TcpObject = null;

    /** 针对 mKCP 连接的配置 */
    kcpSettings: KcpObject = null;

    /** 针对 WebSocket 连接的配置 */
    wsSettings: WebSocketObject = null;

    /** 针对 HTTP/2 连接的配置 */
    httpSettings: HttpObject = null;

    /** 针对 QUIC 连接的配置 */
    quicSettings: QUICObject = null;

    /** 针对 Domain Socket 连接的配置 */
    dsSettings: DomainSocketObject = null;

    /** 针对 gRPC 连接的配置 */
    grpcSettings: grpcObject = null;

    /** 用作透明代理的配置 */
    sockopt: SockoptObject = new SockoptObject();
}
```

#### 以 TCP 为例

此处以 TCP 连接为例进行配置。TCP 连接配置结构如下：

```typescript
class TcpObject {
    /**
     * v4.27.1+，仅用于 inbound，是否接收 PROXY protocol
     * 
     * 填写 true 时，最底层 TCP 连接建立后，请求方必须先发送 PROXY protocol v1 或 v2，否则连接会被关闭
     */
    acceptProxyProtocol: boolean = false;

    /**
     * 数据包头部伪装设置
     * 
     * HTTP 伪装无法被其它 HTTP 服务器（如 Nginx）分流，但可以被 VLESS fallbacks path 分流
     */
    header: NoneHeaderObject | HttpHeaderObject = new NoneHeaderObject();
}
```

使用方法：

```typescript
import { TransportObject, TcpObject } from "v2script";

let transport: TransportObject = new TransportObject();
let tcp = new TcpObject();

tcp.acceptProxyProtocol = true;
transport.tcpSettings = tcp;
```

#### 传输方式列表

| 传输方式      | 类                   |
| ------------- | -------------------- |
| TCP           | `TcpObject`          |
| mKCP          | `KcpObject`          |
| Websocket     | `WebSocketObject`    |
| HTTP          | `HttpObject`         |
| Domain Socket | `DomainSocketObject` |
| QUIC          | `QUICObject`         |
| Sockopt       | `SockoptObject`      |
| gRPC          | `grpcObject`         |

## 开源协议

**v2script** 遵循 **MIT** 开源协议。

您可以克隆代码并在任何地方使用、修改以及发布，但我不希望您用它去从事违法犯罪的活动。

```
MIT License

Copyright (c) 2021 SeeNight

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 后续工作

后续可能会对代码结构进行优化。
