# 完整示例

## 代码

```typescript
import { v2ray, InboundObject, PROTOCOL, VmessInboundObject, VmessClientObject, OutboundObject, VmessOutboundObject, VmessServerObject, VmessUserObject, LogObject, LOGLEVEL, DnsObject, DnsServerObject, ApiObject, ApiService, RoutingObject, DOMAIN_STRATEGY, RuleObject, RULE_NETWORK, RULE_PROTOCOL, BalancerObject, BALANCER_STRATEGY, PolicyObject, TransportObject, TcpObject, WebSocketObject, StatsObject, ReverseObject, FakeDnsObject, BrowserForwarderObject, ObservatoryObject } from "ts2ray";

let v = new v2ray(    
    new InboundObject(
        "in", 
        "127.0.0.1", 
        10080, 
        PROTOCOL.Socks, 
        new VmessInboundObject(
            new VmessClientObject("uuid", "test@test.com")
        )
    ), 
    new OutboundObject(
        "out", 
        PROTOCOL.VMess, 
        new VmessOutboundObject(
            new VmessServerObject(
                "1.1.1.1", 
                123456, 
                new VmessUserObject("a")
            )
        ), 
        false
    )
);

let log = new LogObject(
    "/var/log/v2ray/access.log",
    "/var/log/v2ray/error.log",
    LOGLEVEL.info
);

let dns = new DnsObject(
    new Map([["baidu.com", "220.181.38.251"]]),
    [
        new DnsServerObject(
            "223.5.5.5",
            53,
            "5.6.7.8"
        )
    ],
    "1.2.3.4"
);

let api = new ApiObject();
api.open(ApiService.StatsService);

let routing = new RoutingObject(DOMAIN_STRATEGY.AsIs);
let rule = new RuleObject(
    RULE_NETWORK.tcp,
    [RULE_PROTOCOL.http],
    80,
    80,
    ["in"],
    "out",
    "balancer"
);
rule.domains.push(
    "geosite:google",
    "geosite:netflix",
    "geosite:steam",
    "geosite:telegram",
    "geosite:tumblr",
    "geosite:speedtest",
    "geosite:bbc",
    "geosite:github",
    "domain:gvt1.com",
    "domain:msn.com",
    "domain:sdcardformatter.com",
    "domain:githubusercontent.com",
    "domain:textnow.com",
    "domain:twitch.tv",
    "domain:ea.com",
    "domain:github.com",
    "domain:v2fly.org",
    "domain:discord.com",
    "domain:azureedge.net",
    "domain:golang.org",
    "domain:discord.gg",
    "domain:v2ex.com",
    "domain:discord.media",
    "domain:discordapp.com",
    "domain:live.com",
    "domain:wikileaks.org",
    "domain:getmailbird.com",
    "domain:sublimetext.com",
    "domain:getmailspring.com",
    "domain:steamcommunity.com",
    "domain:api-umamusume.cygames.jp",
    "domain:steamstatic.com",
    "domain:mrantifun.net",
    "domain:wemod.com",
    "domain:rsshub.app",
    "domain:asmr.one",
    "domain:naver.com"
)
routing.rules.push(rule);
routing.balancers.push(new BalancerObject(
    "balancer", 
    ["out"], 
    BALANCER_STRATEGY.random
));

let policy = new PolicyObject();

let transport = new TransportObject();
transport.wsSettings = new WebSocketObject();
transport.wsSettings.path = "/";

let stats = new StatsObject();

let reverse = new ReverseObject();

let fakedns = new FakeDnsObject(
    "198.18.0.0/15",
    65535
);
v.fakedns.push(fakedns);

let browserForwarder = new BrowserForwarderObject(
    "127.0.0.1",
    8080
);

let observatory = new ObservatoryObject(
    "127.0.0.1",
    "10s"
);

v.api = api;
v.log = log;
v.dns = dns;
v.policy = policy;
v.routing = routing;
v.stats = stats;
v.transport = transport;
v.browserForwarder = browserForwarder;
v.observatory = observatory;
v.reverse = reverse;

console.log(JSON.stringify(v, null, 4));
```

## 结果

```json
{
    "log": {
        "access": "/var/log/v2ray/access.log",
        "error": "/var/log/v2ray/error.log",
        "loglevel": "info"
    },
    "api": {
        "tag": "api",
        "services": [
            "StatsService"
        ]
    },
    "dns": {
        "queryStrategy": "UseIP",
        "disableCache": false,
        "disableFallback": false,
        "disableFallbackIfMatch": false,
        "tag": "dns",
        "hosts": {
            "baidu.com": "220.181.38.251"
        },
        "servers": [
            {
                "skipFallback": false,
                "domains": [],
                "expectIPs": [],
                "address": "223.5.5.5",
                "port": 53,
                "clientIp": "5.6.7.8"
            }
        ],
        "clientIp": "1.2.3.4"
    },
    "routing": {
        "domainStrategy": "AsIs",
        "domainMatcher": "linear",
        "rules": [
            {
                "domainMathcer": "linear",
                "type": "field",
                "domains": [
                    "geosite:google",
                    "geosite:netflix",
                    "geosite:steam",
                    "geosite:telegram",
                    "geosite:tumblr",
                    "geosite:speedtest",
                    "geosite:bbc",
                    "geosite:github",
                    "domain:gvt1.com",
                    "domain:msn.com",
                    "domain:sdcardformatter.com",
                    "domain:githubusercontent.com",
                    "domain:textnow.com",
                    "domain:twitch.tv",
                    "domain:ea.com",
                    "domain:github.com",
                    "domain:v2fly.org",
                    "domain:discord.com",
                    "domain:azureedge.net",
                    "domain:golang.org",
                    "domain:discord.gg",
                    "domain:v2ex.com",
                    "domain:discord.media",
                    "domain:discordapp.com",
                    "domain:live.com",
                    "domain:wikileaks.org",
                    "domain:getmailbird.com",
                    "domain:sublimetext.com",
                    "domain:getmailspring.com",
                    "domain:steamcommunity.com",
                    "domain:api-umamusume.cygames.jp",
                    "domain:steamstatic.com",
                    "domain:mrantifun.net",
                    "domain:wemod.com",
                    "domain:rsshub.app",
                    "domain:asmr.one",
                    "domain:naver.com"
                ],
                "ip": [],
                "source": [],
                "user": [],
                "attrs": "",
                "network": "tcp",
                "protocol": [
                    "http"
                ],
                "inboundTag": [
                    "in"
                ],
                "outboundTag": "out",
                "balancerTag": "balancer",
                "port": 80,
                "sourcePort": 80
            }
        ],
        "balancers": [
            {
                "tag": "balancer",
                "selector": [
                    "out"
                ],
                "strategy": {
                    "type": "random"
                }
            }
        ]
    },
    "policy": {
        "levels": {},
        "system": {
            "statsInboundUplink": false,
            "statsInboundDownlink": false,
            "statsOutboundUplink": false,
            "statsOutboundDownlink": false
        }
    },
    "transport": {
        "tcpSettings": null,
        "kcpSettings": null,
        "wsSettings": {
            "acceptProxyProtocol": false,
            "path": "/",
            "headers": null,
            "maxEarlyData": 1024,
            "useBrowserForwarding": false,
            "earlyDataHeaderName": ""
        },
        "httpSettings": null,
        "quicSettings": null,
        "dsSettings": null,
        "grpcSettings": null
    },
    "stats": {},
    "reverse": {
        "bridges": [],
        "portals": []
    },
    "fakedns": [
        {
            "ipPool": "198.18.0.0/15",
            "poolSize": 65535
        }
    ],
    "browserForwarder": {
        "listenAddr": "127.0.0.1",
        "listenPort": 8080
    },
    "observatory": {
        "subjectSelector": [],
        "probeInterval": "10s",
        "probeURL": "127.0.0.1"
    },
    "inbounds": [
        {
            "listen": "127.0.0.1",
            "streamSettings": null,
            "sniffing": null,
            "allocate": null,
            "port": 10080,
            "protocol": "socks",
            "settings": {
                "detour": null,
                "default": null,
                "disableInsecureEncryption": false,
                "clients": [
                    {
                        "level": 0,
                        "alterId": 0,
                        "id": "uuid",
                        "email": "test@test.com"
                    }
                ]
            },
            "tag": "in"
        }
    ],
    "outbounds": [
        {
            "sendThrough": "0.0.0.0",
            "streamSettings": null,
            "proxySettings": null,
            "mux": null,
            "tag": "out",
            "protocol": "vmess",
            "settings": {
                "vnext": [
                    {
                        "address": "1.1.1.1",
                        "port": 123456,
                        "users": [
                            {
                                "alterId": 0,
                                "level": 0,
                                "security": "auto",
                                "id": "a"
                            }
                        ]
                    }
                ]
            }
        }
    ]
}
```

