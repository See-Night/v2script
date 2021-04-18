import { Log, dns, routing, inbound, outbound } from './structure';

import { DOMAINSTRATEGY } from './common';

export class v2ray {
    private log: Log;
    private dns: dns;
    private routing: routing;
    private inbounds: inbound[] = [];
    private outbounds: outbound[] = [];
    private policy = null;
    private stats = null;
    private api = null;

    constructor() {}

    Log(a: string, e: string, l: string = "warning"): Log {
        this.log = new Log(a, e, l);
        return this.log;
    }

    Dns(servers: string[] = null, hosts: object = null, clientIp: string = null, tag: string = null): dns {
        this.dns = new dns(servers, hosts, clientIp, tag);
        return this.dns;
    }

    Routing(domainStrategy: string = DOMAINSTRATEGY.IPIfNonMatch ): routing {
        this.routing = new routing(domainStrategy);
        return this.routing;
    }

    Inbound(inbound: inbound = null): inbound[] {
        if (inbound) {
            let ib = [];
            ib.push(inbound);
            this.inbounds = ib;
        }
        return this.inbounds;
    }

    addInbound(inbound: inbound): void {
        try {
            for (let ib in this.inbounds) {
                if (inbound.tag === this.inbounds[ib].tag) {
                    throw new Error('Tag "' + inbound.tag + '" already exist');
                }
            }
            this.inbounds.push(inbound);
        } catch(error) {
            console.error(error);
        }
    }

    delInbound(tag: string): void {
        try {
            let status: boolean = false;
            for (let ib in this.inbounds) {
                if (tag === this.inbounds[ib].tag) {
                    console.log(this.inbounds[ib].tag);
                    this.inbounds.splice(Number(ib), 1);
                    status = true;
                    break;
                }
            }

            if (!status) throw new Error('Tag "' + tag + '" dose not exist');
        } catch(error) {
            console.error(error);
        }
    }

    Outbound(outbound: outbound = null): outbound[] {
        if (outbound) {
            let ob = [];
            ob.push(outbound);
            this.outbounds = ob;
        }
        return this.outbounds;
    }

    addOutbound(outbound: outbound): void {
        try {
            for (let ob in this.outbounds) {
                if (outbound.tag === this.outbounds[ob].tag) {
                    throw new Error('Tag "' + outbound.tag + '" already exist');
                }
            }
            this.outbounds.push(outbound);
        } catch(error) {
            console.error(error);
        }
    }

    delOutbound(tag: string): void {
        try {
            let status: boolean = false;
            for (let ob in this.outbounds) {
                if (tag === this.outbounds[ob].tag) {
                    console.log(this.outbounds[ob].tag);
                    this.outbounds.splice(Number(ob), 1);
                    status = true;
                    break;
                }
            }

            if (!status) throw new Error('Tag "' + tag + '" dose not exist');
        } catch(error) {
            console.error(error);
        }
    }
}
