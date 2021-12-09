/**
 * 当前连接的 QUIC 配置，仅当此连接使用 QUIC 时有效
 */

import { HEADER_OBJECT } from "../../util";

const enum QUIC_SECURITY {
    none = "none",
    aes_128_gcm = "aes-128-gcm",
    chacha20_poly1305 = "chacha20-poly1305"
}

class QUICObject {
    security: QUIC_SECURITY = QUIC_SECURITY.none;
    key: string = "";
    header: HEADER_OBJECT = HEADER_OBJECT.none;
}

export { QUIC_SECURITY, QUICObject };