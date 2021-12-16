# Api 远程控制

V2Ray 中可以开放一些 API 以便远程调用。这些 API 都基于 [gRPC](https://grpc.io/)。大多数用户并不会用到此 API，新手可以直接忽略这一项。

当远程控制开启时，V2Ray 会自建一个出站代理，以 `tag` 配置的值为标识。用户必须手动将所有的 gRPC 入站连接通过 [路由](/advanced/Routing.md) 指向这一出站代理。

## ApiObject

```typescript
class ApiObject {
    tag: string = "api";

    private services: ApiService[] = [];

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
```

* `tag`: **string**

  出站代理标识。

* `services`: **[ApiService[]](#ApiService)**

  开启的 API 列表。**私有属性**。

* `open()`: **ApiObject**

  开启 API 服务。

  参数：

  * `service`: **[ApiService](#ApiService)** 

    需要开启的 API 服务，其值为 [ApiService](#ApiService) 类型值或数组

  返回值：
  
  * `this`: **ApiObject** 
  
    当前对象


* `close()`: **ApiObject**

  关闭 API 服务。

  参数：

  * `service`: **[ApiService](#ApiService)**

    需要关闭的 API 服务，其值为 [ApiService](#ApiService) 类型值或数组

  返回值：
  
  * `this`: **ApiObject**
  
    当前对象


## ApiService

支持的 API 列表。

```typescript
const enum ApiService {
    HandlerService = "HandlerService",
    
    LoggerService = "LoggerService",
    
    StatsService = "StatsService",
    
    ObservatoryService = "ObservatoryService"
}
```

* `HandlerService`

  一些对于入站出站代理进行修改的 API，可用的功能如下：

  - 添加一个新的入站代理

  - 添加一个新的出站代理

  - 删除一个现有的入站代理

  - 删除一个现有的出站代理

  - 在一个入站代理中添加一个用户（仅支持 VMess、VLESS、Trojan）

  - 在一个入站代理中删除一个用户（仅支持 VMess、VLESS、Trojan）

* `LoggerService`

  支持对内置 Logger 的重启，可配合 logrotate 进行一些对日志文件的操作。

* `StatsService`

  内置的数据统计服务，详见 [统计信息](/advanced/Stats.md)。

* `ObservatoryService`

  [连接观测](/advanced/Observatory.md) 组件 API (v4.38.0+) 。
