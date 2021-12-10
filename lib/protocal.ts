/** 用户配置 */
class AccountObject {
    /** 用户名 */
    user: string;

    /** 密码 */
    pass: string;

    /**
     * AccountObject
     * @param user 用户名
     * @param pass 密码
     */
    constructor(user: string, pass: string) {
        this.user = user;
        this.pass = pass;
    }
}


export { AccountObject };