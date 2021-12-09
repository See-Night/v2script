import { StreamSettingsObject } from "./streamsetting";
import { AccountObject } from "./protocal";
declare const enum PROTOCOL {
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
declare const enum NETWORK {
    tcp = "tcp",
    kcp = "kcp",
    websocket = "ws",
    http = "http",
    domainsocket = "domainsocket",
    quic = "quic",
    grpc = "grpc"
}
declare const enum SECURITY {
    none = "none",
    tls = "tls"
}
declare const enum HEADER_OBJECT {
    none = "none",
    srtp = "srtp",
    utp = "utp",
    wechat_video = "wechat-video",
    dtls = "dtls",
    wireguard = "wireguard"
}
declare class FallbackObject {
    alpn: string;
    path: string;
    dest: string | number;
    xver: number;
    /**
     * FallbackObject
     * @param dest 决定 TLS 解密后 TCP 流量的去向
     */
    constructor(dest: string | number);
}
export { PROTOCOL, NETWORK, SECURITY, StreamSettingsObject, HEADER_OBJECT, AccountObject, FallbackObject };
