/**
 * Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站
 * 配合路由（Routing）一起使用，可以达到禁止访问某些网站的效果
 */

const enum BLACKHOLE_RESPONSE {
    none = "none",
    http = "http"
}

class BlackholeOutboundObject {
    response: { type: BLACKHOLE_RESPONSE } = {
        type: BLACKHOLE_RESPONSE.none
    };
}

export { BLACKHOLE_RESPONSE, BlackholeOutboundObject };