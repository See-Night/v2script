/**
 * 当前连接的 WebSocket 配置，仅当此连接使用 WebSocket 时有效
 */
export declare class WebSocketObject {
    acceptProxyProtocol: boolean;
    path: string;
    headers: any;
    maxEarlyData: number;
    useBrowserForwarding: boolean;
    earlyDataHeaderName: string;
}
