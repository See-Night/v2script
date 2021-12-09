/**
 * 当前连接的 Domain socket 配置，仅当此连接使用 Domain socket 时有效
 */

export class DomainSocketObject {
    path: string;
    abstract: boolean = false;
    padding: boolean = false;

    /**
     * DomainSocketObject
     * @param path 一个合法的文件路径
     */
    constructor(path: string) {
        this.path = path;
    }
}