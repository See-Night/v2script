# Sockopt

## SockoptObject

```typescript
class SockoptObject {
    mark: number = 0;

    tcpFastOpen: boolean = false;

    tcpFastOpenQueueLength: number = 4096;

    tproxy: TPROXY = TPROXY.off;

    tcpKeepAliveInterval: number = 0;
}
```

* `mark`: **number**

  一个整数。当其值非零时，在出站连接上标记 SO_MARK。

  - 仅适用于 Linux 系统。
  - 需要 CAP_NET_ADMIN 权限。

* `tcpFastOpen`: **boolean**

  是否启用 [TCP Fast Open](https://zh.wikipedia.org/wiki/TCP快速打开)。当其值为 `true` 时，强制开启 TFO；当其值为 `false` 时，强制关闭 TFO；当此项不存在时，使用系统默认设置。可用于入站出站连接。

  仅在以下版本（或更新版本）的操作系统中可用:

  - Windows 10 (1604)
  - Mac OS 10.11 / iOS 9
  - Linux 3.16：系统已默认开启，无需配置。
  - FreeBSD 10.3

* `tcpFastOpenQueueLength`: **number**

  入站连接的 [TCP Fast Open](https://zh.wikipedia.org/wiki/TCP快速打开)队列长度，默认值为 `4096`，仅在 Linux 中可用 (v4.43.0+)。

* `tproxy`: **[TPROXY](#TPROXY)**

  是否开启透明代理（仅适用于 Linux）。

  透明代理需要 Root 或 CAP_NET_ADMIN 权限。

  > 当 [Dokodemo-door](/protocol/Dokodemo-door.md) 中指定了 `followRedirect`，且 `sockopt.tproxy` 为空时，`sockopt.tproxy` 的值会被设为 `"redirect"`。

* `tcpKeepAliveInterval`: **number**

  TCP 保持活跃的数据包的发送间隔，以秒为单位（仅适用于 Linux）。 (v4.39.0+)

  0 代表保持默认值。

## TPROXY

```typescript
const enum TPROXY {
    redirect = "redirect",
    tproxy = "tproxy",
    off = "off"
}
```

