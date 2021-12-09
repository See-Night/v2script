/**
 * 当前连接的 mKCP 配置，仅当此连接使用 mKCP 时有效
 */
import { HEADER_OBJECT } from "../../util";
declare class KcpObject {
    mtu: number;
    tti: number;
    uplinkCapacity: number;
    downlinkCapacity: number;
    congestion: boolean;
    readBufferSize: number;
    writeBufferSize: number;
    header: {
        type: HEADER_OBJECT;
    };
}
export { KcpObject };
