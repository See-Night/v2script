"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vmess_outbound = exports.vmess_inbound = exports.socks_outbound = exports.socks_inbound = exports.shadowsocks_outbound = exports.shadowsocks_inbound = exports.mtproto_outbound = exports.mtproto_inbound = exports.http_outbound = exports.http_inbound = exports.freedom_outbound = exports.dns_outbound = exports.blackhole_outbound = exports.tlsSettings = exports.quicSettings = exports.dsSettings = exports.httpSettings = exports.wsSettings = exports.kcpSettings = exports.tcpSettings = exports.ruleObject = exports.streamSettings = exports.routing = exports.outbound = exports.inbound = exports.Log = exports.dns = exports.common = exports.v2ray = exports.v2sub = void 0;
var sync_request_1 = require("sync-request");
var nodejs_base64_1 = require("nodejs-base64");
var v2ray_1 = require("./v2ray");
Object.defineProperty(exports, "v2ray", { enumerable: true, get: function () { return v2ray_1.v2ray; } });
var common = require("./common");
exports.common = common;
var common_1 = require("./common");
var structure_1 = require("./structure");
Object.defineProperty(exports, "dns", { enumerable: true, get: function () { return structure_1.dns; } });
Object.defineProperty(exports, "Log", { enumerable: true, get: function () { return structure_1.Log; } });
Object.defineProperty(exports, "inbound", { enumerable: true, get: function () { return structure_1.inbound; } });
Object.defineProperty(exports, "outbound", { enumerable: true, get: function () { return structure_1.outbound; } });
Object.defineProperty(exports, "routing", { enumerable: true, get: function () { return structure_1.routing; } });
Object.defineProperty(exports, "streamSettings", { enumerable: true, get: function () { return structure_1.streamSettings; } });
Object.defineProperty(exports, "ruleObject", { enumerable: true, get: function () { return structure_1.ruleObject; } });
Object.defineProperty(exports, "tcpSettings", { enumerable: true, get: function () { return structure_1.tcpSettings; } });
Object.defineProperty(exports, "kcpSettings", { enumerable: true, get: function () { return structure_1.kcpSettings; } });
Object.defineProperty(exports, "wsSettings", { enumerable: true, get: function () { return structure_1.wsSettings; } });
Object.defineProperty(exports, "httpSettings", { enumerable: true, get: function () { return structure_1.httpSettings; } });
Object.defineProperty(exports, "dsSettings", { enumerable: true, get: function () { return structure_1.dsSettings; } });
Object.defineProperty(exports, "quicSettings", { enumerable: true, get: function () { return structure_1.quicSettings; } });
Object.defineProperty(exports, "tlsSettings", { enumerable: true, get: function () { return structure_1.tlsSettings; } });
var protocol_1 = require("./protocol");
Object.defineProperty(exports, "blackhole_outbound", { enumerable: true, get: function () { return protocol_1.blackhole_outbound; } });
Object.defineProperty(exports, "dns_outbound", { enumerable: true, get: function () { return protocol_1.dns_outbound; } });
Object.defineProperty(exports, "freedom_outbound", { enumerable: true, get: function () { return protocol_1.freedom_outbound; } });
Object.defineProperty(exports, "http_inbound", { enumerable: true, get: function () { return protocol_1.http_inbound; } });
Object.defineProperty(exports, "http_outbound", { enumerable: true, get: function () { return protocol_1.http_outbound; } });
Object.defineProperty(exports, "mtproto_inbound", { enumerable: true, get: function () { return protocol_1.mtproto_inbound; } });
Object.defineProperty(exports, "mtproto_outbound", { enumerable: true, get: function () { return protocol_1.mtproto_outbound; } });
Object.defineProperty(exports, "shadowsocks_inbound", { enumerable: true, get: function () { return protocol_1.shadowsocks_inbound; } });
Object.defineProperty(exports, "shadowsocks_outbound", { enumerable: true, get: function () { return protocol_1.shadowsocks_outbound; } });
Object.defineProperty(exports, "socks_inbound", { enumerable: true, get: function () { return protocol_1.socks_inbound; } });
Object.defineProperty(exports, "socks_outbound", { enumerable: true, get: function () { return protocol_1.socks_outbound; } });
Object.defineProperty(exports, "vmess_inbound", { enumerable: true, get: function () { return protocol_1.vmess_inbound; } });
Object.defineProperty(exports, "vmess_outbound", { enumerable: true, get: function () { return protocol_1.vmess_outbound; } });
var fs = require("fs");
var sub = /** @class */ (function () {
    function sub(ps, ip, port, id, aid, net, type, host, path, tls) {
        if (aid === void 0) { aid = 32; }
        if (type === void 0) { type = "none"; }
        if (host === void 0) { host = ""; }
        if (path === void 0) { path = ""; }
        if (tls === void 0) { tls = ""; }
        this.ps = ps;
        this.ip = ip;
        this.port = port;
        this.id = id;
        this.aid = aid;
        this.net = net;
        this.type = type;
        this.host = host;
        this.path = path;
        this.tls = tls;
    }
    return sub;
}());
var v2sub = /** @class */ (function () {
    /**
     *
     * @param url 订阅地址
     */
    function v2sub(url) {
        this.subs = [];
        this.url = url;
        var res = sync_request_1.default('GET', url);
        var body = res.getBody().toString();
        var vmesses = nodejs_base64_1.base64decode(body).toString().replace(/\n\n/g, '').replace(/vmess:\/\//g, '').split('\n');
        for (var i = 0; i < vmesses.length - 1; i++) {
            var q = JSON.parse(nodejs_base64_1.base64decode(vmesses[i]).split('\r\n').join(''));
            this.subs.push(new sub(q.ps, q.add, q.port, q.id, q.aid, q.net));
        }
    }
    v2sub.prototype.toConfig = function (ps, path) {
        var v = new v2ray_1.v2ray();
        for (var s in this.subs) {
            if (ps === this.subs[s].ps) {
                v.Log('', '', common_1.LOGLEVEL.warning);
                v.Dns(['119.29.29.29']);
                v.Inbound(new structure_1.inbound('proxy', 10080, '0.0.0.0', common_1.PROTOCOL.socks, new protocol_1.socks_inbound(common_1.AUTH.noauth)));
                v.addInbound(new structure_1.inbound('proxy_http', 10809, '0.0.0.0', common_1.PROTOCOL.http, new protocol_1.socks_inbound(common_1.AUTH.noauth)));
                v.Outbound(new structure_1.outbound('proxy_out', common_1.PROTOCOL.vmess, new protocol_1.vmess_outbound(this.subs[s].ip, Number(this.subs[s].port), this.subs[s].id), new structure_1.streamSettings(this.subs[s].net, this.subs[s].type)));
                v.addOutbound(new structure_1.outbound('direct', common_1.PROTOCOL.freedom, null, null));
                v.addOutbound(new structure_1.outbound('block', common_1.PROTOCOL.blackhole, null, null));
                var routing_1 = v.Routing(common_1.DOMAINSTRATEGY.IPIfNonMatch);
                routing_1.addRules(new structure_1.ruleObject(null, null, ['api'], 'api'));
                routing_1.addRules(new structure_1.ruleObject([
                    "geosite:google",
                    "geosite:github",
                    "geosite:netflix",
                    "geosite:steam",
                    "geosite:telegram",
                    "geosite:tumblr",
                    "geosite:speedtest",
                    "geosite:bbc",
                    "domain:gvt1.com",
                    "domain:textnow.com",
                    "domain:twitch.tv",
                    "domain:snapcraft.io",
                    "domain:snapchat.com",
                    "domain:wikileaks.org",
                    "domain:getmailbird.com",
                    "domain:sublimetext.com",
                    "domain:getmailspring.com",
                    "domain:steamcommunity.com",
                    "domain:steamstatic.com",
                    "domain:rsshub.app",
                    "domain:naver.com"
                ], [
                    "91.108.4.0/22",
                    "91.108.8.0/22",
                    "91.108.12.0/22",
                    "91.108.20.0/22",
                    "91.108.36.0/23",
                    "91.108.38.0/23",
                    "91.108.56.0/22",
                    "149.154.160.0/20",
                    "149.154.164.0/22",
                    "149.154.172.0/22",
                    "74.125.0.0/16",
                    "173.194.0.0/16",
                    "172.217.0.0/16",
                    "216.58.200.0/24",
                    "216.58.220.0/24",
                    "91.108.56.116",
                    "91.108.56.0/24",
                    "109.239.140.0/24",
                    "149.154.167.0/24",
                    "149.154.175.0/24"
                ], null, 'proxy_http'));
                routing_1.addRules(new structure_1.ruleObject([
                    "domain:12306.com",
                    "domain:51ym.me",
                    "domain:baidu.com",
                    "domain:tencent.com",
                    "domain:52pojie.cn",
                    "domain:8686c.com",
                    "domain:abercrombie.com",
                    "domain:adobesc.com",
                    "domain:agefans.tv",
                    "domain:air-matters.com",
                    "domain:air-matters.io",
                    "domain:airtable.com",
                    "domain:akadns.net",
                    "domain:apache.org",
                    "domain:api.crisp.chat",
                    "domain:api.termius.com",
                    "domain:appshike.com",
                    "domain:appstore.com",
                    "domain:aweme.snssdk.com",
                    "domain:bababian.com",
                    "domain:battle.net",
                    "domain:beatsbydre.com",
                    "domain:bet365.com",
                    "domain:bilibili.cn",
                    "domain:ccgslb.com",
                    "domain:ccgslb.net",
                    "domain:chunbo.com",
                    "domain:chunboimg.com",
                    "domain:clashroyaleapp.com",
                    "domain:cloudsigma.com",
                    "domain:cloudxns.net",
                    "domain:cmfu.com",
                    "domain:culturedcode.com",
                    "domain:dct-cloud.com",
                    "domain:didialift.com",
                    "domain:douyutv.com",
                    "domain:duokan.com",
                    "domain:dytt8.net",
                    "domain:easou.com",
                    "domain:ecitic.net",
                    "domain:eclipse.org",
                    "domain:eudic.net",
                    "domain:ewqcxz.com",
                    "domain:fir.im",
                    "domain:frdic.com",
                    "domain:fresh-ideas.cc",
                    "domain:godic.net",
                    "domain:goodread.com",
                    "domain:haibian.com",
                    "domain:hdslb.net",
                    "domain:hollisterco.com",
                    "domain:hongxiu.com",
                    "domain:hxcdn.net",
                    "domain:images.unsplash.com",
                    "domain:img4me.com",
                    "domain:ipify.org",
                    "domain:ixdzs.com",
                    "domain:jd.hk",
                    "domain:jianshuapi.com",
                    "domain:jomodns.com",
                    "domain:jsboxbbs.com",
                    "domain:knewone.com",
                    "domain:kuaidi100.com",
                    "domain:lemicp.com",
                    "domain:letvcloud.com",
                    "domain:lizhi.io",
                    "domain:localizecdn.com",
                    "domain:lucifr.com",
                    "domain:luoo.net",
                    "domain:mai.tn",
                    "domain:maven.org",
                    "domain:miwifi.com",
                    "domain:moji.com",
                    "domain:moke.com",
                    "domain:mtalk.google.com",
                    "domain:mxhichina.com",
                    "domain:myqcloud.com",
                    "domain:myunlu.com",
                    "domain:netease.com",
                    "domain:nfoservers.com",
                    "domain:nssurge.com",
                    "domain:nuomi.com",
                    "domain:ourdvs.com",
                    "domain:overcast.fm",
                    "domain:paypal.com",
                    "domain:paypalobjects.com",
                    "domain:pgyer.com",
                    "domain:qdaily.com",
                    "domain:qdmm.com",
                    "domain:qin.io",
                    "domain:qingmang.me",
                    "domain:qingmang.mobi",
                    "domain:qqurl.com",
                    "domain:rarbg.to",
                    "domain:rrmj.tv",
                    "domain:ruguoapp.com",
                    "domain:sm.ms",
                    "domain:snwx.com",
                    "domain:soku.com",
                    "domain:startssl.com",
                    "domain:store.steampowered.com",
                    "domain:symcd.com",
                    "domain:teamviewer.com",
                    "domain:tmzvps.com",
                    "domain:trello.com",
                    "domain:trellocdn.com",
                    "domain:ttmeiju.com",
                    "domain:udache.com",
                    "domain:uxengine.net",
                    "domain:weather.bjango.com",
                    "domain:weather.com",
                    "domain:webqxs.com",
                    "domain:weico.cc",
                    "domain:wenku8.net",
                    "domain:werewolf.53site.com",
                    "domain:windowsupdate.com",
                    "domain:wkcdn.com",
                    "domain:workflowy.com",
                    "domain:xdrig.com",
                    "domain:xiaojukeji.com",
                    "domain:xiaomi.net",
                    "domain:xiaomicp.com",
                    "domain:ximalaya.com",
                    "domain:xitek.com",
                    "domain:xmcdn.com",
                    "domain:xslb.net",
                    "domain:xteko.com",
                    "domain:yach.me",
                    "domain:yixia.com",
                    "domain:yunjiasu-cdn.net",
                    "domain:zealer.com",
                    "domain:zgslb.net",
                    "domain:zimuzu.tv",
                    "domain:zmz002.com",
                    "domain:samsungdm.com",
                    "geoip:private",
                    "geoip:cn",
                    "geosite:cn"
                ], null, null, 'direct'));
                routing_1.addRules(new structure_1.ruleObject(["geosite:category-ads-all"], null, null, 'block'));
                try {
                    fs.writeFile(path + '/config.json', JSON.stringify(v, null, 4), function () { });
                }
                catch (err) {
                    console.log(err);
                }
                break;
            }
        }
    };
    return v2sub;
}());
exports.v2sub = v2sub;
//# sourceMappingURL=index.js.map