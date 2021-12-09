import { StreamSettingsObject } from "./streamsetting";
import { AccountObject } from "./protocal";

/** 传输协议 */
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

/** 连接方式 */
const enum NETWORK {
    tcp = "tcp",
    kcp = "kcp",
    websocket = "ws",
    http = "http",
    domainsocket = "domainsocket",
    quic = "quic",
    grpc = "grpc"
}

/** 认证方式 */
const enum SECURITY {
    none = "none",
    tls = "tls"
}

/** 数据包头部伪装类型 */
const enum HEADER_OBJECT {
    /** 不进行伪装，发送的数据是没有特征的数据包 */
    none = "none",

    /** 伪装成 SRTP 数据包，会被识别为视频通话数据（如 FaceTime） */
    srtp = "srtp",

    /** 伪装成 uTP 数据包，会被识别为 BT 下载数据 */
    utp = "utp",

    /** 伪装成微信视频通话的数据包 */
    wechat_video = "wechat-video",

    /** 伪装成 DTLS 1.2 数据包 */
    dtls = "dtls",

    /** 伪装成 WireGuard 数据包 */
    wireguard = "wireguard"
}

/** 回落分流配置 */
class FallbackObject {
    /**
     * 尝试匹配 TLS ALPN 协商结果，空为任意
     * 
     * 有需要时，VLESS 才会尝试读取 TLS ALPN 协商结果，若成功，输出 info realAlpn = 到日志
     * 
     * 用途：解决了 Nginx 的 h2c 服务不能同时兼容 http/1.1 的问题，Nginx 需要写两行 listen，分别用于 1.1 和 h2c
     * 
     * 注意：fallbacks alpn 存在 "h2" 时，Inbound TLS 需设置 "alpn":["h2","http/1.1"]，以支持 h2 访问
     */
    alpn: string = "";

    /** 尝试匹配首包 HTTP PATH */
    path: string = "";

    /**
     * 决定 TLS 解密后 TCP 流量的去向，目前支持两类地址：（该项必填，否则无法启动）
     * 
     * * TCP，格式为 "addr:port"，其中 addr 支持 IPv4、域名、IPv6，若填写域名，也将直接发起 TCP 连接（而不走内置的 DNS）
     * * Unix domain socket，格式为绝对路径，形如 "/dev/shm/domain.socket"，可在开头加 "@" 代表 abstract (opens new window)，"@@" 则代表带 padding 的 abstract
     * 
     * ! 若只填 port，数字或字符串均可，形如 80、"80"，通常指向一个明文 http 服务（addr 会被补为 "127.0.0.1"）。
     */
    dest: string | number;

    /**
     * 发送 [PROXY protocol](https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt)，
     * 专用于传递请求的真实来源 IP 和端口，填版本 1 或 2，默认为 0，即不发送。若有需要建议填 1
     * 
     * 目前填 1 或 2，功能完全相同，只是结构不同，且前者可打印，后者为二进制。V2Ray 的 TCP 和 WS 入站均已支持接收 PROXY protocol。
     */
    xver: number = 0;

    /**
     * FallbackObject
     * @param dest 决定 TLS 解密后 TCP 流量的去向
     */
    constructor(dest: string | number) {
        this.dest = dest;
    }
}

export {
    PROTOCOL, NETWORK, SECURITY,
    StreamSettingsObject,
    HEADER_OBJECT,
    AccountObject,
    FallbackObject
}
