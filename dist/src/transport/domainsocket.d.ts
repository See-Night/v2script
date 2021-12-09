/**
 * 当前连接的 Domain socket 配置，仅当此连接使用 Domain socket 时有效
 */
export declare class DomainSocketObject {
    path: string;
    abstract: boolean;
    padding: boolean;
    /**
     * DomainSocketObject
     * @param path 一个合法的文件路径
     */
    constructor(path: string);
}
