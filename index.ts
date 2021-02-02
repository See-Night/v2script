import request from 'sync-request';
import { base64decode } from 'nodejs-base64';
import { v2ray } from './v2ray';
import * as common from './common';
import { DOMAINSTRATEGY, PROTOCOL, LOGLEVEL, AUTH } from './common';
import { ruleObject } from './structure';
import { inbound } from './structure';
import { socks_inbound } from './protocol';
import { outbound } from './structure';
import { vmess_outbound } from './protocol';
import { streamSettings } from './structure';

class sub {
    ps: string;
    ip: string;
    port: string;
    id: string;
    aid: number;
    net: string;
    type: string;
    host: string;
    path: string;
    tls: string;
    constructor(ps, ip, port, id, aid = 32, net, type = "none", host = "", path = "", tls = "") {
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
}

export class v2sub {
    subs: sub[] = [];
    url: string;

    /**
     * 
     * @param url 订阅地址
     */
    constructor(url: string) {
        this.url = url;
        let res = request('GET', url);
        let body = res.getBody().toString();
        let vmesses: string = base64decode(body).toString().replace(/vmess:\/\//g, '').split('\n');
        for (let i = 0; i < vmesses.length - 1; i++) {
            let q = JSON.parse(base64decode(vmesses[i]).split('\r\n').join(''));
            this.subs.push(new sub(
                q.ps,
                q.add,
                q.port,
                q.id,
                q.aid,
                q.net
            ));
        }
    }

    toConfig(ps: string): v2ray {
        let v = new v2ray();
        for (let s in this.subs) {
            if (ps === this.subs[s].ps) {

                v.Log('', '', LOGLEVEL.warning);
                v.Dns(['119.29.29.29']);

                v.Inbound(new inbound(
                    'proxy',
                    10080,
                    '0.0.0.0',
                    PROTOCOL.socks,
                    new socks_inbound(AUTH.noauth)
                ));
                v.addInbound(new inbound(
                    'proxy_http',
                    10809,
                    '0.0.0.0',
                    PROTOCOL.http,
                    new socks_inbound(AUTH.noauth)
                ));

                v.Outbound(new outbound(
                    'proxy_out',
                    PROTOCOL.vmess,
                    new vmess_outbound(
                        this.subs[s].ip,
                        Number(this.subs[s].port),
                        this.subs[s].id
                    ),
                    new streamSettings(
                        this.subs[s].net,
                        this.subs[s].type
                    )
                ));
                v.addOutbound(new outbound(
                    'direct',
                    PROTOCOL.freedom,
                    null,
                    null
                ));
                v.addOutbound(new outbound(
                    'block',
                    PROTOCOL.blackhole,
                    null,
                    null
                ));

                let routing = v.Routing(DOMAINSTRATEGY.IPIfNonMatch);
                routing.addRules(new ruleObject(
                    null,
                    null,
                    ['api'],
                    'api',
                ));
                routing.addRules(new ruleObject(
                    [
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
                    ],
                    [
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
                    ],
                    null,
                    'proxy_http'
                ));
                routing.addRules(new ruleObject(
                    [
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
                    ],
                    null,
                    null,
                    'direct'
                ));
                routing.addRules(new ruleObject(
                    [
                        "geosite:category-ads-all"
                    ],
                    null,
                    null,
                    'block'
                ));
                break;
            }
        }
        return v;
    }
}

export { v2ray, common }