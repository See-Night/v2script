"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeDnsObject = void 0;
/** 虚拟 DNS 服务器 */
var FakeDnsObject = /** @class */ (function () {
    /**
     * FakeDnsObject
     * @param ipPool FakeDNS 分配 IP 的地址空间
     * @param poolSize FakeDNS 所记忆的「IP - 域名映射」数量
     */
    function FakeDnsObject(ipPool, poolSize) {
        this.ipPool = ipPool;
        this.poolSize = poolSize;
    }
    return FakeDnsObject;
}());
exports.FakeDnsObject = FakeDnsObject;
//# sourceMappingURL=fakedns.js.map