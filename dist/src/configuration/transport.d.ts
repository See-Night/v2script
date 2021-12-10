import { DomainSocketObject, grpcObject, HttpObject, KcpObject, QUICObject, TcpObject, WebSocketObject } from "../transport";
/**
 * 底层传输方式（transport）是当前 V2Ray 节点和其它节点对接的方式
 *
 * 底层传输方式提供了稳定的数据传输通道。通常来说，一个网络连接的两端需要有对称的传输方式。
 * 比如一端用了 WebSocket，那么另一个端也必须使用 WebSocket，否则无法建立连接。
 */
export declare class TransportObject {
    /** 针对 TCP 连接的配置 */
    tcpSettings: TcpObject;
    /** 针对 mKCP 连接的配置 */
    kcpSettings: KcpObject;
    /** 针对 WebSocket 连接的配置 */
    wsSettings: WebSocketObject;
    /** 针对 HTTP/2 连接的配置 */
    httpSettings: HttpObject;
    /** 针对 QUIC 连接的配置 */
    quicSettings: QUICObject;
    /** 针对 Domain Socket 连接的配置 */
    dsSettings: DomainSocketObject;
    /** 针对 gRPC 连接的配置 */
    grpcSettings: grpcObject;
}
