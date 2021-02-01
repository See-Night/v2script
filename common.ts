export const PROTOCOL = {
    blackhole: 'blackhole',
    dns: 'dns',
    dokodemoDoor: 'dokodemo-door',
    freedom: 'freedom',
    http: 'http',
    mtproto: 'mtprotp',
    shadowsocks: 'shadowsocks',
    socks: 'socks',
    vmess: 'vmess'
}

export const NETWORK = {
    tcp: 'tcp',
    udp: 'udp',
    kcp: 'kcp',
    websocket: 'ws',
    http: 'http',
    domainsocket: 'ds',
    quic: 'quic',
    none: 'none'
}

export const SECURITY = {
    none: 'none',
    tls: 'tls'
}

export const CAMOUFLAGE = {
    none: 'none',
    srtp: 'srtp',
    utp: 'utp',
    wechatVideo: 'wechat-video',
    dtls: 'dtls',
    wireguard: 'wireguard'
}

export const DOMAINSTRATEGY = {
    Asls: 'Asls',
    IPIfNonMatch: 'IPIfNonMatch',
    IPOnDemand: 'IPOnDemand',
    UseIP: 'UseIP',
    UseIPv4: 'UseIPv4',
    UseIPv6: 'UseIPv6'
}

export const SHADOWSOCKSMETHOD = {
    AES256CFB: "aes-256-cfb",
    AES128CFB: "aes-128-cfb",
    CHACHA20: "chacha20",
    CHACHA20IETF: "chacha20-ietf",
    AES256GCM: "aes-256-gcm",
    AES128GCM: "aes-128-gcm",
    CHACHA20POLY: "chacha20-poly"
}

export const AUTH = {
    auth: 'auth',
    noauth: 'noauth'
}

export const VMESSSECURITY = {
    none: 'none',
    auto: 'auto',
    aes128gcm: 'aes-128-gcm',
    chacha20ploy1305: 'chacha20-ploy1305'
}

export const LOGLEVEL = {
    warning: 'warning',
    info: 'info',
    debug: 'debug',
    error: 'error',
    none: 'none'
}

export const NONE = 'none';