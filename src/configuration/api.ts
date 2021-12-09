/**
 * V2Ray 中可以开放一些 API 以便远程调用
 * 
 * 这些 API 都基于 [gRPC](https://grpc.io/),
 * 大多数用户并不会用到此 API，新手可以直接忽略这一项
 * 
 * 当远程控制开启时，V2Ray 会自建一个出站代理，以 tag 配置的值为标识,
 * 用户必须手动将所有的 gRPC 入站连接通过 路由 指向这一出站代理
 */
class ApiObject {
    /** 出站代理标识 */
    tag: string = "api";

    /** 开启的 API 列表 */
    private services: ApiService[] = [];

    /**
     * 开启 API 服务
     * @param service 需要开启的 API 服务，其值为 ApiService 类型值或数组
     * @returns 当前对象
     */
    open(service: ApiService | ApiService[]): ApiObject {
        if (typeof (service) === "string") {
            service = [service];
        }

        for (let i in service) {
            let exist: boolean = false;
            for (let j in this.services) {
                if (service[i] === this.services[j]) {
                    exist = true;
                    break;
                }
            }
            if (!exist) this.services.push(service[i]);
        }

        return this;
    }

    /**
     * 关闭 API 服务
     * @param service 需要关闭的 API 服务，其值为 ApiService 类型值或数组
     * @returns 当前对象
     */
    close(service: ApiService | ApiService[]): ApiObject {
        if (typeof (service) === "string") {
            service = [service];
        }

        for (let i in service) {
            for (let j in this.services) {
                if (service[i] === this.services[j]) {
                    this.services.splice(Number(j), 1);
                }
            }
        }
        return this;
    }
}

/** 支持的 API 列表 */
const enum ApiService {
    /** 
     * 一些对于入站出站代理进行修改的 API，可用的功能如下
     * * 添加一个新的入站代理
     * * 添加一个新的出站代理
     * * 删除一个现有的入站代理
     * * 删除一个现有的出站代理
     * * 在一个入站代理中添加一个用户（仅支持 VMess、VLESS、Trojan）
     * * 在一个入站代理中删除一个用户（仅支持 VMess、VLESS、Trojan）
     */
    HandlerService = "HandlerService",
    /** 支持对内置 Logger 的重启，可配合 logrotate 进行一些对日志文件的操作 */
    LoggerService = "LoggerService",
    /** 内置的数据统计服务 */
    StatsService = "StatsService",
    /** 连接观测组件 API (v4.38.0+) */
    ObservatoryService = "ObservatoryService"
}

export { ApiObject, ApiService };