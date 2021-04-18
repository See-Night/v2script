"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v2ray = void 0;
var structure_1 = require("./structure");
var common_1 = require("./common");
var v2ray = /** @class */ (function () {
    function v2ray() {
        this.inbounds = [];
        this.outbounds = [];
        this.policy = null;
        this.stats = null;
        this.api = null;
    }
    v2ray.prototype.Log = function (a, e, l) {
        if (l === void 0) { l = "warning"; }
        this.log = new structure_1.Log(a, e, l);
        return this.log;
    };
    v2ray.prototype.Dns = function (servers, hosts, clientIp, tag) {
        if (servers === void 0) { servers = null; }
        if (hosts === void 0) { hosts = null; }
        if (clientIp === void 0) { clientIp = null; }
        if (tag === void 0) { tag = null; }
        this.dns = new structure_1.dns(servers, hosts, clientIp, tag);
        return this.dns;
    };
    v2ray.prototype.Routing = function (domainStrategy) {
        if (domainStrategy === void 0) { domainStrategy = common_1.DOMAINSTRATEGY.IPIfNonMatch; }
        this.routing = new structure_1.routing(domainStrategy);
        return this.routing;
    };
    v2ray.prototype.Inbound = function (inbound) {
        if (inbound === void 0) { inbound = null; }
        if (inbound) {
            var ib = [];
            ib.push(inbound);
            this.inbounds = ib;
        }
        return this.inbounds;
    };
    v2ray.prototype.addInbound = function (inbound) {
        try {
            for (var ib in this.inbounds) {
                if (inbound.tag === this.inbounds[ib].tag) {
                    throw new Error('Tag "' + inbound.tag + '" already exist');
                }
            }
            this.inbounds.push(inbound);
        }
        catch (error) {
            console.error(error);
        }
    };
    v2ray.prototype.delInbound = function (tag) {
        try {
            var status_1 = false;
            for (var ib in this.inbounds) {
                if (tag === this.inbounds[ib].tag) {
                    console.log(this.inbounds[ib].tag);
                    this.inbounds.splice(Number(ib), 1);
                    status_1 = true;
                    break;
                }
            }
            if (!status_1)
                throw new Error('Tag "' + tag + '" dose not exist');
        }
        catch (error) {
            console.error(error);
        }
    };
    v2ray.prototype.Outbound = function (outbound) {
        if (outbound === void 0) { outbound = null; }
        if (outbound) {
            var ob = [];
            ob.push(outbound);
            this.outbounds = ob;
        }
        return this.outbounds;
    };
    v2ray.prototype.addOutbound = function (outbound) {
        try {
            for (var ob in this.outbounds) {
                if (outbound.tag === this.outbounds[ob].tag) {
                    throw new Error('Tag "' + outbound.tag + '" already exist');
                }
            }
            this.outbounds.push(outbound);
        }
        catch (error) {
            console.error(error);
        }
    };
    v2ray.prototype.delOutbound = function (tag) {
        try {
            var status_2 = false;
            for (var ob in this.outbounds) {
                if (tag === this.outbounds[ob].tag) {
                    console.log(this.outbounds[ob].tag);
                    this.outbounds.splice(Number(ob), 1);
                    status_2 = true;
                    break;
                }
            }
            if (!status_2)
                throw new Error('Tag "' + tag + '" dose not exist');
        }
        catch (error) {
            console.error(error);
        }
    };
    return v2ray;
}());
exports.v2ray = v2ray;
//# sourceMappingURL=v2ray.js.map