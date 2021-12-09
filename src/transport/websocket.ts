/**
 * 当前连接的 WebSocket 配置，仅当此连接使用 WebSocket 时有效
 */

export class WebSocketObject {
    acceptProxyProtocol: boolean = false;
    path: string = "/";
    headers: any = {};
    maxEarlyData: number = 1024;
    useBrowserForwarding: boolean = false;
    earlyDataHeaderName: string = "";
}