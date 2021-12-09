/**
 * 当前连接的 gRPC 配置，仅当此连接使用 gRPC 时有效
 */

export class grpcObject {
    serviceName: string;

    /**
     * grpcObject
     * @param serviceName gRPC 服务的名称
     */
    constructor(serviceName: string) {
        this.serviceName = serviceName;
    }
}