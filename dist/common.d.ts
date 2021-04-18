export declare const PROTOCOL: {
    blackhole: string;
    dns: string;
    dokodemoDoor: string;
    freedom: string;
    http: string;
    mtproto: string;
    shadowsocks: string;
    socks: string;
    vmess: string;
};
export declare const NETWORK: {
    tcp: string;
    udp: string;
    kcp: string;
    websocket: string;
    http: string;
    domainsocket: string;
    quic: string;
    none: string;
};
export declare const SECURITY: {
    none: string;
    tls: string;
};
export declare const CAMOUFLAGE: {
    none: string;
    srtp: string;
    utp: string;
    wechatVideo: string;
    dtls: string;
    wireguard: string;
};
export declare const DOMAINSTRATEGY: {
    Asls: string;
    IPIfNonMatch: string;
    IPOnDemand: string;
    UseIP: string;
    UseIPv4: string;
    UseIPv6: string;
};
export declare const SHADOWSOCKSMETHOD: {
    AES256CFB: string;
    AES128CFB: string;
    CHACHA20: string;
    CHACHA20IETF: string;
    AES256GCM: string;
    AES128GCM: string;
    CHACHA20POLY: string;
};
export declare const AUTH: {
    auth: string;
    noauth: string;
};
export declare const VMESSSECURITY: {
    none: string;
    auto: string;
    aes128gcm: string;
    chacha20ploy1305: string;
};
export declare const LOGLEVEL: {
    warning: string;
    info: string;
    debug: string;
    error: string;
    none: string;
};
export declare const NONE = "none";
