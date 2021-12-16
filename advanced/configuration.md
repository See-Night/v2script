# 配置结构

**V2script** 的主体为 `v2ray` 类，它对应 v2ray 的配置文件，v2ray 每个配置项在 **v2script** 中均为 `v2ray` 类的属性。

```typescript
class v2ray {
    log: LogObject = new LogObject();
    
    api: ApiObject = null;
    
    dns: DnsObject = null;
    
    routing: RoutingObject = null;
    
    policy: PolicyObject = new PolicyObject();
    
    inbounds: InboundObject[];
    
    outbounds: OutboundObject[];
    
    transport: TransportObject = null;
    
    stats: StatsObject = new StatsObject();
    
    reverse: ReverseObject = null;
    
    fakedns: FakeDnsObject[] = [];
    
    browserForwarder: BrowserForwarderObject = null;
    
    observatory: ObservatoryObject = null;

    constructor(inbounds: InboundObject | InboundObject[], outbounds: OutboundObject | OutboundObject[]) {
        if (inbounds instanceof InboundObject) inbounds = [inbounds];
        if (outbounds instanceof OutboundObject) outbounds = [outbounds];

        this.inbounds = inbounds;
        this.outbounds = outbounds;
    }
}
```

* `log`: **[LogObject](/advanced/Log.md#LogObject)**

  日志配置，表示 V2Ray 如何输出日志。

* `api`: **[ApiObject](/advanced/Api.md#ApiObject)**

  远程控制。

* `dns`: **[DnsObject](/advanced/Dns.md#DnsObject)**
  
  内置的 DNS 服务器，若此项不存在，则默认使用本机的 DNS 设置。

* `routing`: **[RoutingObject](/advanced/Routing.md#RoutingObject)**

  路由功能。

* `policy`: **[PolicyObject](/advanced/Policy.md#PolicyObject)**

  本地策略，可进行一些权限相关的配置。

* `inbounds`: **[InboundObject[]](/advanced/Inbounds.md#InboundObject)**

  一个数组，每个元素是一个入站连接配置。

* `outbounds`: **[OutboundObject[]](/advanced/Outbounds.md#OutboundObject)**

  一个数组，每个元素是一个出站连接配置。列表中的第一个元素作为主出站协议。当路由匹配不存在或没有匹配成功时，流量由主出站协议发出。

* `transport`: **[TransportObject](/advanced/Transport.md#TransportObject)**

  用于配置 V2Ray 如何与其它服务器建立和使用网络连接。

* `stats`: **[StatsObject](/advanced/Stats.md#StatsObject)**

  统计信息。

* `reverse`: **[ReverseObject](/advanced/Reverse.md#ReverseObject)**

  反向代理。

* `fakedns`: **[FakeDnsObject[]](/advanced/FakeDNS.md#FakeDnsObject)**

  虚拟 DNS 服务器。

* `browserForwarder`: **[BrowserForwarderObject](/advanced/BrowserForwarder.md#BrowserForwarderObject)**

  浏览器转发模块。

* `observatory`: **[ObservatoryObject](/advanced/Observatory.md#ObservatoryObject)**

  连接观测模块。

* `constructor()`: **v2ray**

  构造函数。

  参数：

  * `inbound`: **[InboundObject](/advanced/Inbounds.md#InboundObject)** | **[InboundObject[]](/advanced/Inbounds.md#InboundObject)**
  
    入站连接
  
  * `outbound`: **[OutboundObject](/advanced/outbounds.md#OutboundObject)** | **[OutboundObject[]](/advanced/outbounds.md#OutboundObject)**
  
    出站连接
