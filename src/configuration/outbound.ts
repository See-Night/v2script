import { PROTOCOL, StreamSettingsObject } from "../../lib";
import { BlackholeOutboundObject, DnsOutboundObject, FreedomOutboundObject, HTTPOutboundObject, LoopbackOutboundObject, ShadowsocksOutboundObject, SocksOutboundObject, TrojanOutboundObject, VlessOutboundObject, VmessOutboundObject } from "../protocol";

/**
 * 出站连接用于向远程网站或下一级代理服务器发送数据，可用的协议请见协议列表
 */
class OutboundObject {
    /** 用于发送数据的 IP 地址，当主机有多个 IP 地址时有效，默认值为 `"0.0.0.0"`*/
    sendThrough: string = "0.0.0.0";

    /** 连接协议名称，可选的值见协议列表 */
    protocol: PROTOCOL;

    /** 具体的配置内容，视协议不同而不同。详见每个协议中的 OutboundObject */
    settings: BlackholeOutboundObject | DnsOutboundObject | FreedomOutboundObject | HTTPOutboundObject | LoopbackOutboundObject | ShadowsocksOutboundObject | SocksOutboundObject | TrojanOutboundObject | VlessOutboundObject | VmessOutboundObject;

    /** 
     * 此出站连接的标识，用于在其它的配置中定位此连接
     * 
     * 当其值不为空时，必须在所有 tag 中唯一
     */
    tag: string;

    /** [底层传输配置](https://www.v2fly.org/config/transport.html#streamsettingsobject) */
    streamSettings: StreamSettingsObject = null;

    /** 出站代理配置。当出站代理生效时，此出站协议的 streamSettings 将不起作用 */
    proxySettings: ProxySettingsObject = null;

    /** 多路复用（Mux）配置 */
    mux: MuxObject = null;

    /**
     * OutboundObject
     * @param tag 此出站连接的标识
     * @param protocal 连接协议名称
     * @param settings 具体的配置内容
     * @param mux 是否启用多路复用
     */
    constructor(
        tag: string,
        protocal: PROTOCOL, 
        settings: BlackholeOutboundObject | DnsOutboundObject | FreedomOutboundObject | HTTPOutboundObject | LoopbackOutboundObject | ShadowsocksOutboundObject | SocksOutboundObject | TrojanOutboundObject | VlessOutboundObject | VmessOutboundObject,
        mux: boolean
    ) {
        this.tag = tag;
        this.protocol = protocal;
        this.settings = settings;

        if (mux) this.mux = new MuxObject();
    }
}

/**
 * 出站代理配置
 */
class ProxySettingsObject {
    /** 当指定另一个出站连接的标识时，此出站连接发出的数据，将被转发至所指定的出站连接发出 */
    tag: string;

    /**
     * 是否启用传输层转发支持
     * 
     * 在启用后,此出站连接的传输层协议将保持生效（如果传输层协议支持）
     * 
     * 如果不启用此选项, 在转发时传输层协议将失效，只能使用默认的 TCP 传输协议
     */
    transportLayer: boolean;

    /**
     * ProxySettingsObject
     * @param tag 另一个出站连接的标识
     * @param transportLayer 是否启用传输层转发支持
     */
    constructor(tag: string, transportLayer: boolean) {
        this.tag = tag;
        this.transportLayer = transportLayer;
    }
}

/** 
 * 多路复用配置
 */
class MuxObject {
    /** 是否启用 Mux 转发请求，默认值 `false` */
    enable: boolean = false;

    /** 
     * 最大并发连接数。最小值 1，最大值 1024，默认值 8
     * 
     * 填负数，如 -1，不加载 mux 模块（v4.22.0+）
     * 
     * 这个数值表示了一个 TCP 连接上最多承载的 Mux 连接数量。
     * 当客户端发出了 8 个 TCP 请求，而 concurrency=8 时，V2Ray 只会发出一条实际的 TCP 连接，客户端的 8 个请求全部由这个 TCP 连接传输 
     */
    concurrency: number = 8;
}

export { OutboundObject, ProxySettingsObject, MuxObject };