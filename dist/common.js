"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NONE = exports.LOGLEVEL = exports.VMESSSECURITY = exports.AUTH = exports.SHADOWSOCKSMETHOD = exports.DOMAINSTRATEGY = exports.CAMOUFLAGE = exports.SECURITY = exports.NETWORK = exports.PROTOCOL = void 0;
exports.PROTOCOL = {
    blackhole: 'blackhole',
    dns: 'dns',
    dokodemoDoor: 'dokodemo-door',
    freedom: 'freedom',
    http: 'http',
    mtproto: 'mtprotp',
    shadowsocks: 'shadowsocks',
    socks: 'socks',
    vmess: 'vmess'
};
exports.NETWORK = {
    tcp: 'tcp',
    udp: 'udp',
    kcp: 'kcp',
    websocket: 'ws',
    http: 'http',
    domainsocket: 'ds',
    quic: 'quic',
    none: 'none'
};
exports.SECURITY = {
    none: 'none',
    tls: 'tls'
};
exports.CAMOUFLAGE = {
    none: 'none',
    srtp: 'srtp',
    utp: 'utp',
    wechatVideo: 'wechat-video',
    dtls: 'dtls',
    wireguard: 'wireguard'
};
exports.DOMAINSTRATEGY = {
    Asls: 'Asls',
    IPIfNonMatch: 'IPIfNonMatch',
    IPOnDemand: 'IPOnDemand',
    UseIP: 'UseIP',
    UseIPv4: 'UseIPv4',
    UseIPv6: 'UseIPv6'
};
exports.SHADOWSOCKSMETHOD = {
    AES256CFB: "aes-256-cfb",
    AES128CFB: "aes-128-cfb",
    CHACHA20: "chacha20",
    CHACHA20IETF: "chacha20-ietf",
    AES256GCM: "aes-256-gcm",
    AES128GCM: "aes-128-gcm",
    CHACHA20POLY: "chacha20-poly"
};
exports.AUTH = {
    auth: 'auth',
    noauth: 'noauth'
};
exports.VMESSSECURITY = {
    none: 'none',
    auto: 'auto',
    aes128gcm: 'aes-128-gcm',
    chacha20ploy1305: 'chacha20-ploy1305'
};
exports.LOGLEVEL = {
    warning: 'warning',
    info: 'info',
    debug: 'debug',
    error: 'error',
    none: 'none'
};
exports.NONE = 'none';
//# sourceMappingURL=common.js.map