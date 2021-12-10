"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcObject = void 0;
/**
 * 当前连接的 gRPC 配置，仅当此连接使用 gRPC 时有效
 *
 * gRPC 使用 HTTP/2 协议传输，内置连接复用（mux）功能
 */
var grpcObject = /** @class */ (function () {
    /**
     * grpcObject
     * @param serviceName gRPC 服务的名称
     */
    function grpcObject(serviceName) {
        this.serviceName = serviceName;
    }
    return grpcObject;
}());
exports.grpcObject = grpcObject;
//# sourceMappingURL=grpc.js.map