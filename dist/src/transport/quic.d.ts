/**
 * 当前连接的 QUIC 配置，仅当此连接使用 QUIC 时有效
 */
import { HEADER_OBJECT } from "../../util";
declare const enum QUIC_SECURITY {
    none = "none",
    aes_128_gcm = "aes-128-gcm",
    chacha20_poly1305 = "chacha20-poly1305"
}
declare class QUICObject {
    security: QUIC_SECURITY;
    key: string;
    header: HEADER_OBJECT;
}
export { QUIC_SECURITY, QUICObject };
