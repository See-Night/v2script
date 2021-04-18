/**
 * Blackhole（黑洞）是一个出站数据协议
 * 它会阻碍所有数据的出站
 * 配合路由（Routing）一起使用，可以达到禁止访问某些网站的效果。
 */
export declare class blackhole_outbound {
    response: {
        type: string;
    };
    constructor(type?: string);
}
