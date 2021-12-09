/**
 * 一种无法识别的机制，可以帮助您绕过GFW
 * Trojan 通过TLS提供多种协议，可避免主动/被动检测和ISP QoS限制
 * Trojan 程序不是固定的程序或协议
 * 这是一个想法，一个模仿最常见的服务的想法
 * 在某种程度上，它的行为相同，可以帮助你永久地越过长城防火墙，永远不会被识别出来
 * 我们是烈火；我们运送特洛伊木马
 *
 * 以上机翻自 https://github.com/trojan-gfw/trojan
 */
import { FallbackObject } from "../../util";
declare class TrojanClientObject {
    password: string;
    email: string;
    level: number;
    /**
     * TrojanClientObject
     * @param email 邮件地址
     * @param password 密码
     */
    constructor(email: string, password: string);
}
declare class TrojanServerObject {
    address: string;
    port: number;
    email: string;
    password: string;
    level: number;
    /**
     * TrojanServerObject
     * @param address 服务器地址
     * @param port 服务器端口
     * @param email 邮件地址
     * @param password 密码
     */
    constructor(address: string, port: number, email: string, password: string);
}
declare class TrojanInboundObject {
    clients: TrojanClientObject[];
    fallbacks: FallbackObject[];
}
declare class TrojanOutboundObject {
    servers: TrojanServerObject[];
}
export { TrojanClientObject, TrojanServerObject, TrojanInboundObject, TrojanOutboundObject };
