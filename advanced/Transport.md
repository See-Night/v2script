# Transport 底层传输

底层传输方式（transport）是当前 V2Ray 节点和其它节点对接的方式。底层传输方式提供了稳定的数据传输通道。通常来说，一个网络连接的两端需要有对称的传输方式。比如一端用了 WebSocket，那么另一个端也必须使用 WebSocket，否则无法建立连接。

底层传输（transport）配置分为两部分，一是全局设置（[TransportObject](#TransportObject)），二是分协议配置（[StreamSettingsObject](#StreamSettingsObject)）。分协议配置可以指定每个单独的入站出站协议用怎样的方式传输。通常来说客户端和服务器对应的出站入站协议需要使用同样的传输方式。当分协议传输配置指定了一种传输方式，但没有填写其设置时，此传输方式会使用全局配置中的设置。

## TransportObject

`TransportObject` 对应配置文件的 `transport` 项。

```typescript
class TransportObject {
    tcpSettings: TcpObject = null;

    kcpSettings: KcpObject = null;

    wsSettings: WebSocketObject = null;

    httpSettings: HttpObject = null;

    quicSettings: QUICObject = null;

    dsSettings: DomainSocketObject = null;

    grpcSettings: grpcObject = null;
}
```

* `tcpSettings`: **[TcpObject](/network/Tcp.md#TcpObject)**

  针对 TCP 连接的配置。

* `kcpSettings`: **[KcpObject](/network/Kcp.md#KcpObject)** 

  针对 mKCP 连接的配置。

* `wsSettings`: **[WebSocketObject](/network/WebSocket.md#WebSocketObject)** 

  针对 WebSocket 连接的配置。

* `httpSettings`: **[HttpObject](/network/HTTP2.md#HttpObject)** 

  针对 HTTP/2 连接的配置。

* `quicSettings`: **[QUICObject](/network/QUIC.md#QuicObject)** 

  针对 QUIC 连接的配置。

* `dsSettings`: **[DomainSocketObject](/network/DomainSocket.md#DomainSocketObject)** 

  针对 Domain Socket 连接的配置。

* `grpcSettings`: **[grpcObject](/network/grpc.md#grpcObject)** 

  针对 gRPC 连接的配置。 (v4.36.0+)

## StreamSettingsObject

```typescript
class StreamSettingsObject {
    network: NETWORK = NETWORK.tcp;

    security: SECURITY = SECURITY.none;

    tlsSettings: TLSObject = null;

    tcpSettings: TcpObject = null;

    kcpSettings: KcpObject = null;

    wsSettings: WebSocketObject = null;

    httpSettings: HttpObject = null;

    quicSettings: QUICObject = null;

    dsSettings: DomainSocketObject = null;

    grpcSettings: grpcObject = null;

    sockopt: SockoptObject = new SockoptObject();
}
```

* `network`: **[NETWORK](/network/Networks.md#NETWORK)**

  数据流所使用的网络类型，默认值为 `NETWORK.tcp`

* `security`: **[SECURITY](/network/Networks.md#SECURITY)**

  是否启用传输层加密。

* `tlsSettings`: **[TLSObject](#TLSObject)**

  TLS 配置。TLS 由 Golang 提供，支持 TLS 1.3，不支持 DTLS。

* `tcpSettings`: **[TcpObject](/network/Tcp.md#TcpObject)**

  当前连接的 TCP 配置，仅当此连接使用 TCP 时有效。配置内容与上面的全局配置相同。

* `kcpSettings`: **[KcpObject](/network/Kcp.md#KcpObject)**

  当前连接的 mKCP 配置，仅当此连接使用 mKCP 时有效。配置内容与上面的全局配置相同。

* `wsSettings`: **[WebSocketObject](/network/WebSocket.md#WebSocketObject)**

  当前连接的 WebSocket 配置，仅当此连接使用 WebSocket 时有效。配置内容与上面的全局配置相同。

* `httpSettings`: **[HttpObject](/network/HTTP2.md#HttpObject)**

  当前连接的 HTTP/2 配置，仅当此连接使用 HTTP/2 时有效。配置内容与上面的全局配置相同。

* `quicSettings`: **[QUICObject](/network/QUIC.md#QUICObject)**

  当前连接的 QUIC 配置，仅当此连接使用 QUIC 时有效。配置内容与上面的全局配置相同。

* `dsSettings`: **[DomainSocketObject](/network/DomainSocket.md#DomainSocketObject)**

  当前连接的 Domain socket 配置，仅当此连接使用 Domain socket 时有效。配置内容与上面的全局配置相同。

* `grpcSettings`: **[grpcObject](/network/grpc.md#grpcObject)**

  当前连接的 gRPC 配置，仅当此连接使用 gRPC 时有效。配置内容与上面的全局配置相同。

* `sockopt`: **[SockoptObject](/network/Sockopt.md#SockoptObject)**

  用作透明代理的配置。

## TLSObject

```typescript
class TLSObject {
    serverName: string;

    alpn: string[] = ["h2", "http/1.1"];

    allowInsecure: boolean = false;

    disableSystemRoot: boolean = false;

    certificates: CertificateObject[] = [];

    verifyClientCertificate: boolean = false;

    constructor(serverName: string) {
        this.serverName = serverName;
    }
}
```

* `serverName`: **string**

  指定服务器端证书的域名，在连接由 IP 建立时有用。当目标连接由域名指定时，比如在 Socks 入站时接收到了域名，或者由 Sniffing 功能探测出了域名，这个域名会自动用于 serverName，无须手动配置。

* `alpn`: **string[]**

  一个字符串数组，指定了 TLS 握手时指定的 ALPN 数值。默认值为 ["h2", "http/1.1"]。

* `allowInsecure`: **boolean**

  是否允许不安全连接（仅用于客户端）。默认值为 false。当值为 true 时，V2Ray 不会检查远端主机所提供的 TLS 证书的有效性。

* `disableSystemRoot`: **boolean**

  （V2Ray 4.18+）是否禁用操作系统自带的 CA 证书。默认值为 false。当值为 true 时，V2Ray 只会使用 certificates 中指定的证书进行 TLS 握手。当值为 false 时，V2Ray 只会使用操作系统自带的 CA 证书进行 TLS 握手。

* `certificates`: **[CertificateObject[]](#CertificateObject)**

  证书列表，其中每一项表示一个证书（建议 fullchain）。

* `pinnedPeerCertificateChainSha256`: **string[]**

  使用标准编码格式表示的远程服务器的证书链的SHA256散列值。在设置后，远程服务器的证书链的散列值必须为列表中的数值之一。(v4.38.0+)

  在连接因为此策略失败时，会展示此证书链散列。不建议使用这种方式获得证书链散列值，因为在这种情况下您没有机会验证此时服务器提供的证书是否为真实证书。

* `verifyClientCertificate`: **boolean**

  在连接时进行客户端证书认证。在打开此选项后，客户端将需要配置客户端证书才能连接到服务器端。(4.42.0+) 客户端证书必须由程序内配置的客户端证书颁发机构签发。系统内置证书颁发机构以及用于认证服务器端的证书颁发机构不会自动被信任。

* `constructor()`: **TLSObject**

  构造函数。

  参数：

  * `serverName`: **string**

    指定服务器端证书的域名，在连接由 IP 建立时有用。

## CertificateObject

```typescript
class CertificateObject {
    usage: CERT_USAGE = CERT_USAGE.encipherment;

    certificateFile: string;

    keyFile: string;

    constructor(certificateFile: string, keyFile: string) {
        this.certificateFile = certificateFile;
        this.keyFile = keyFile;
    }
}
```

* `usage`: **[CERT_USAGE](#CERT_USAGE)**

  证书用途。

* `certificateFile`: **string**

  证书文件路径，如使用 OpenSSL 生成，后缀名为 .crt。

* `keyFile`: **string**

  密钥文件路径，如使用 OpenSSL 生成，后缀名为 .key。

  !> 目前暂不支持需要密码的 key 文件。

* `constructor()`: **CertificateObject**

  构造函数。

  参数：

  * `certificateFile`: **string**

    证书文件路径。

  * `keyFile`: **string**

    密钥文件路径。

## CERT_USAGE

```typescript
const enum CERT_USAGE {
    encipherment = "encipherment",
    verify = "verify",
    issue = "issue",
    verifyclient = "verifyclient"
}
```

- `encipherment`：证书用于 TLS 认证和加密。
- `verify`：证书用于验证远端 TLS 的证书。当使用此项时，当前证书必须为 CA 证书。
- `issue`：证书用于签发其它证书。当使用此项时，当前证书必须为 CA 证书。
- `verifyclient`：用于验证客户端身份的证书颁发机构证书。当使用此项时，当前证书必须为 CA 证书。 (4.42.0+)