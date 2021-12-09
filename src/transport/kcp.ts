/**
 * 当前连接的 mKCP 配置，仅当此连接使用 mKCP 时有效
 */

import { HEADER_OBJECT } from "../../util";

class KcpObject {
    mtu: number = 1350;
    tti: number = 50;
    uplinkCapacity: number = 5;
    downlinkCapacity: number = 20;
    congestion: boolean = false;
    readBufferSize: number = 2;
    writeBufferSize: number = 2;
    header: { type: HEADER_OBJECT } = { type: HEADER_OBJECT.none };
}

export { KcpObject };