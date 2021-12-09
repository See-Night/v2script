"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiObject = void 0;
/**
 * V2Ray 中可以开放一些 API 以便远程调用
 *
 * 这些 API 都基于 gRPC (opens new window),
 * 大多数用户并不会用到此 API，新手可以直接忽略这一项
 *
 * 当远程控制开启时，V2Ray 会自建一个出站代理，以 tag 配置的值为标识,
 * 用户必须手动将所有的 gRPC 入站连接通过 路由 指向这一出站代理
 */
var ApiObject = /** @class */ (function () {
    function ApiObject() {
        /** 出站代理标识 */
        this.tag = "api";
        /** 开启的 API 列表 */
        this.services = [];
    }
    /**
     * 开启 API 服务
     * @param service 需要开启的 API 服务，其值为 ApiService 类型值或数组
     * @returns 当前对象
     */
    ApiObject.prototype.open = function (service) {
        if (typeof (service) === "string") {
            service = [service];
        }
        for (var i in service) {
            var exist = false;
            for (var j in this.services) {
                if (service[i] === this.services[j]) {
                    exist = true;
                    break;
                }
            }
            if (!exist)
                this.services.push(service[i]);
        }
        return this;
    };
    /**
     * 关闭 API 服务
     * @param service 需要关闭的 API 服务，其值为 ApiService 类型值或数组
     * @returns 当前对象
     */
    ApiObject.prototype.close = function (service) {
        if (typeof (service) === "string") {
            service = [service];
        }
        for (var i in service) {
            for (var j in this.services) {
                if (service[i] === this.services[j]) {
                    this.services.splice(Number(j), 1);
                }
            }
        }
        return this;
    };
    return ApiObject;
}());
exports.ApiObject = ApiObject;
//# sourceMappingURL=api.js.map