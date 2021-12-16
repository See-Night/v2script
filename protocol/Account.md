# 用户配置

很多协议需要进行用户配置。

## AccountObject

```typescript
class AccountObject {
    user: string;
    pass: string;

    constructor(user: string, pass: string) {
        this.user = user;
        this.pass = pass;
    }
}
```

* `user`: **string**

  用户名。

* `pass`: **string**

  密码。

* `constructor()`: **AccountObject**

  构造函数。

  参数：

  * `user`: **string**

    用户名。

  * `pass`: **string**

    密码。