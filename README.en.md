# v2script

[![NODEJS](https://img.shields.io/badge/Nodejs->=10-green)](https://nodejs.org) [![NPM](https://img.shields.io/badge/npm-orange)](https://www.npmjs.com) [![TYPESCRIPT](https://img.shields.io/badge/typescript-4.1.3-informational)](https://www.typescriptlang.org/) 

> 切换语言: [简体中文](./README.md)

## Introduce

**V2script** is a typescript-based v2ray configuration generation package.

In general, configuring v2ray requires directly modifying the `config.json` file, whereas **v2script** supports programmatically configuring `config.json`. Therefore, it is more suitable for building v2ray automation scripts or visualization applications.

All configurations of **v2script** are designed and developed according to the official documents of  [v2ray](https://www.v2fly.org/) . Therefore, if **v2script** is not precise or detailed, you can refer to the official website for detailed configurations.

Of course, **v2script** still has some shortcomings. If you have better ideas and suggestions, you are welcome to contribute code.

## Prepare

To use **v2script**, you need to install **Nodejs (>=10)**, NPM, and **TypeScript (>=4.1.3)** on your computer.

Because different operating systems install them in different ways, I will not go into details here. If in doubt, please search the relevant terms.

## Install

Install **v2script** using Nodejs package manager (NPM, YARN, etc.).

```shell
# npm
$ npm install --save v2script

# yarn
$ yarn add v2script
```

## Begin to Use

**V2script** contains a main class `v2Ray`, and other structure classes, protocol classes, transport classes, and so on that you can import directly.

```typescript
// v2ray
import { v2ray } from "v2script";

// structure classes
import { LogObject } from "v2script";

// protocol classes
import { VmessInboundObject } from "v2script";

// transport classes
import { TcpObject } from "v2script";
```

This article only introduce some basic classes and using method, details please click [v2script Wiki](https://1145141919810.wang/v2script).

### Structure

```typescript
class v2ray {
    /** Log configuration, instructing V2Ray how to print logs */
    log: LogObject = new LogObject();

    /** Remote control */
    api: ApiObject = null;

    /** Build-in DNS servers. If this field does not exist, use local DNS by default */
    dns: DnsObject = null;

    /** Routing */
    routing: RoutingObject = null;

    /** Local policy, permission-related configurations */
    policy: PolicyObject = new PolicyObject();

    /** An array, each element of which is an inbound connection configuration */
    inbounds: InboundObject[];

    /** 
     * An array, each element of which is an outbound connection configuration. 
     * The first element in the list is the primary outbound connection. 
     * When the route matching cannot be found or the matching is invalid, 
     * the traffic is routed to the primary outbound connection 
     */
    outbounds: OutboundObject[];

    /** Telling V2Ray how to establish and keep connections with other servers */
    transport: TransportObject = null;

    /** Statistics */
    stats: StatsObject = new StatsObject();

    /** The reverse proxy */
    reverse: ReverseObject = null;

    /** Virtual DNS server */
    fakedns: FakeDnsObject[] = [];

    /** Browser forwarding module */
    browserForwarder: BrowserForwarderObject = null;

    /** Connecting observation module */
    observatory: ObservatoryObject = null;
}
```

**V2script** follows the same structure as the configuration provided on the [v2Ray](https://www.v2fly.org/) website, and each structure is specialized into a structure class (for example, `log` for `LogObject`). Based on this, **v2script** defaults to `null` for some infrequently used keys to optimize the novice experience.

### Protocol

V2ray provides a variety of inbound and outbound transport protocols. In **v2script**, the inbound and outbound transport protocols of each transport protocol are specialized into a transport class, corresponding to the `settings` of the inbound and outbound configurations in the original configuration. The Vmess protocol is used as an example.

#### Outbound

```typescript
class VmessOutboundObject {
    /** An array containing a list of server configurations */
    vnext: VmessServerObject[];
}
```

#### Inbound

```typescript
class VmessInboundObject {
    /** 
     * A set of server-approved users. 
     * Clients can be null. 
     * When this configuration is used as a dynamic port, V2Ray automatically creates users 
     */
    clients: VmessClientObject[];

    /** Indicates that the corresponding outbound protocol uses another server */
    detour: DetourObject = null;

    /** Clients default configuration. Only available in conjunction with Detour */
    default: DefaultObject = null;

    /** Whether to forbid clients from using insecure encryption methods */
    disableInsecureEncryption: boolean = false;
}
```

#### Protocols List

The supported protocols are as follows：

| Protocol Name | Outbound / Inbound   | Class                                                  |
| ------------- | -------------------- | ------------------------------------------------------ |
| Blackhole     | `Outbound`           | `BlackholeOutboundObject`                              |
| DNS           | `Outbound`           | `DnsOutboundObject`                                    |
| Dododemo-door | `Inbound`            | `DokodemodoorInboundObject`                            |
| Freedom       | `Outbound`           | `FreedomOutboundObject`                                |
| HTTP          | `Outbound` `Inbound` | `HTTPOutboundObject` `HTTPInboundObject`               |
| Shadowsocks   | `Outbound` `Inbound` | `ShadowsocksInboundObject` `ShadowsocksOutboundObject` |
| Socks         | `Outbound` `Inbound` | `SocksOutboundObject`  `SocksInboundObject`            |
| Trojan        | `Outbound` `Inbound` | `TrojanInboundObject` `TrojanOutboundObject`           |
| VLess         | `Outbound` `Inbound` | `VlessOutboundObject` `VlessInboundObject`             |
| VMess         | `Outbound` `Inbound` | `VmessOutboundObject` `VmessInboundObject`             |
| Loopback      | `Outbound`           | `LoopbackOutboundObject`                               |

### Transport

> Transport is how V2Ray connects to other nodes. The underlying transmission mode provides a stable data transmission channel. Generally speaking, a network connection needs to have symmetric transmission at both ends. For example, if one end uses WebSocket, the other end must also use WebSocket; otherwise, the connection cannot be established.
>
> The underlying transport (transport) configuration is divided into two parts, one is the global Settings ([TransportObject](https://www.v2fly.org/config/transport.html#transportobject)), 2 it is protocol configuration ([StreamSettingsObject](https://www.v2fly.org/config/transport.html#streamsettingsobject)). The sub-protocol configuration specifies how each individual inbound and outbound protocol is transmitted. In general, the client and server need to use the same transport mode for the outbound and inbound protocols. If a transport mode is specified in the sub-protocol transport configuration but its Settings are not specified, the transport mode uses the Settings in the global configuration.
>
>  —— From [v2fly]([Transport | V2Fly.org](https://www.v2fly.org/config/transport.html))

In **V2Script**, the global and sub-protocol configurations are specialized to the `TransportObject` and `StreamSettingsObject` classes, which are configured as follows:

#### Global

```typescript
class TransportObject {
    /** Configuration for TCP connections */
    tcpSettings: TcpObject = null;

    /** Configuration for mKCP connections */
    kcpSettings: KcpObject = null;

    /** Configuration for Websocket connections */
    wsSettings: WebSocketObject = null;

    /** Configuration for HTTP/2 connections */
    httpSettings: HttpObject = null;

    /** Configuration for QUIC connections */
    quicSettings: QUICObject = null;

    /** Configuration for Domain Socket connections */
    dsSettings: DomainSocketObject = null;

    /** Configuration for gRPC connections */
    grpcSettings: grpcObject = null;
}
```

#### Sub-protocol

```typescript
class StreamSettingsObject {
    /** The type of network used by the data flow */
    network: NETWORK = NETWORK.tcp;

    /** Whether to enable transport layer encryption  */
    security: SECURITY = SECURITY.none;

    /** The TLS configuration */
    tlsSettings: TLSObject = null;
    
    /** Configuration for TCP connections */
    tcpSettings: TcpObject = null;

    /** Configuration for mKCP connections */
    kcpSettings: KcpObject = null;

    /** Configuration for Websocket connections */
    wsSettings: WebSocketObject = null;

    /** Configuration for HTTP/2 connections */
    httpSettings: HttpObject = null;

    /** Configuration for QUIC connections */
    quicSettings: QUICObject = null;

    /** Configuration for Domain Socket connections */
    dsSettings: DomainSocketObject = null;

    /** Configuration for gRPC connections */
    grpcSettings: grpcObject = null;

    /** Configuration as a transparent proxy */
    sockopt: SockoptObject = new SockoptObject();
}
```

#### In TCP, for example

This section uses the TCP connection as an example. The configuration structure of TCP connections is as follows:

```typescript
class TcpObject {
    /**
	 * v4.27.1+, only used in inbound, whether to receive PROXY protocol
	 *
	 * If true is specified, the requestor must send PROXY Protocol v1 or v2 after the lowest level TCP connection is established. Otherwise, the connection will be closed
	 */
    acceptProxyProtocol: boolean = false;

    /**
     * Packet header camouflage Settings
     * 
     * HTTP spoofing cannot be shunted by other HTTP servers such as Nginx, but can be shunted by the VLESS Fallbacks Path
     */
    header: NoneHeaderObject | HttpHeaderObject = new NoneHeaderObject();
}
```

Usage：

```typescript
import { TransportObject, TcpObject } from "v2script";

let transport: TransportObject = new TransportObject();
let tcp = new TcpObject();

tcp.acceptProxyProtocol = true;
transport.tcpSettings = tcp;
```

#### Transports List

| Transport     | Class                |
| ------------- | -------------------- |
| TCP           | `TcpObject`          |
| mKCP          | `KcpObject`          |
| Websocket     | `WebSocketObject`    |
| HTTP          | `HttpObject`         |
| Domain Socket | `DomainSocketObject` |
| QUIC          | `QUICObject`         |
| Sockopt       | `SockoptObject`      |
| gRPC          | `grpcObject`         |

## LINCESE

**V2script** follows the **MIT** open source protocol.

You can clone code and use it, modify it, and distribute it anywhere, but I don't want you to use it for criminal purposes.

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

## The follow-up work

The code structure may be optimized later.
