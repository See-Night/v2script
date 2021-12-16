# BrowserForwarder 浏览器转发

浏览器转发模块可以使用浏览器网页页面转发受到支持的连接。

## BrowserForwarderObject

```typescript
class BrowserForwarderObject {
    listenAddr: string;

    listenPort: number;

    constructor(addr: string, port: number) {
        this.listenAddr = addr;
        this.listenPort = port;
    }
}
```

* `listenAddr`: **string**

  浏览器转发页面的本地监听地址。

* `listenPort`: **number**

  浏览器转发页面的本地监听地址。

* `constructor()`: **BrowserForwarderObject**

  构造函数。

  参数：

  * `listenAddr`: **string**

    浏览器转发页面的本地监听地址。

  * `listenPort`: **number**

    浏览器转发页面的本地监听地址。