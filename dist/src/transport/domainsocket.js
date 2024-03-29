"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainSocketObject = void 0;
/**
 * Domain Socket 使用标准的 Unix domain socket 来传输数据
 *
 * 它的优势是使用了操作系统内建的传输通道，而不会占用网络缓存。相比起本地环回网络（local loopback）来说，Domain socket 速度略快一些。
 *
 * 目前仅可用于支持 Unix domain socket 的平台，如 Linux 和 macOS。在 Windows 10 Build 17036 前不可用。
 *
 * 如果指定了 domain socket 作为传输方式，在入站出站代理中配置的端口和 IP 地址将会失效，所有的传输由 domain socket 取代
 */
var DomainSocketObject = /** @class */ (function () {
    /**
     * DomainSocketObject
     * @param path 一个合法的文件路径
     */
    function DomainSocketObject(path) {
        /** 是否为 abstract domain socket */
        this.abstract = false;
        /** abstract domain socket 是否带 padding */
        this.padding = false;
        this.path = path;
    }
    return DomainSocketObject;
}());
exports.DomainSocketObject = DomainSocketObject;
//# sourceMappingURL=domainsocket.js.map