"use strict";
/**
 * 当前连接的 gRPC 配置，仅当此连接使用 gRPC 时有效
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcObject = void 0;
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