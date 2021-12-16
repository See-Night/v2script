# Policy 本地策略

本地策略可以配置一些用户相关的权限，比如连接超时设置。V2Ray 处理的每一个连接都对应一个用户，按照用户的等级（level）应用不同的策略。本地策略可根据等级的不同而变化。

## PolicyObject

`PolicyObject` 对应配置文件的 `policy` 项。

```typescript
class PolicyObject {
    private levels: Map<string, LevelPolicyObject> = new Map([["0", new LevelPolicyObject()]]);
    
    system: SystemPolicyObject = new SystemPolicyObject();

    setLevel(level: string, policy: LevelPolicyObject): PolicyObject {
        this.levels.set(level, policy);
        return this;
    }

    removeLevel(level: string): PolicyObject {
        this.levels.delete(level);
        return this;
    }
}
```

* `levels`: **Map<string, [LevelPolicyObject](#LevelPolicyObject)>**

  一组键值对，每个键是一个字符串形式的数字（JSON 的要求），比如 `"0"`、`"1"` 等，双引号不能省略，此数字对应用户等级。每一个值是一个 [LevelPolicyObject](#LevelPolicyObject)。**私有属性**，请使用 `setLevel()` 和 `removeLevel()` 修改属性值。

  > 每个入站出站代理现在都可以设置用户等级，V2Ray 会根据实际的用户等级应用不同的本地策略。

* `system`: **[SystemPolicyObject](#SystemPolicyObject)**

  V2Ray 系统的策略。

* `setLevel()`: **PolicyObject**

  设置本地策略。

  参数：

  * `level`: **string**

    策略等级，其值为数字的字符串形式。

  * `policy`: **[LevelPolicyObject](#LevelPolicyObject)**

    策略内容，其值为一个 [LevelPolicyObject](#LevelPolicyObject) 对象。

  返回值：当前对象。

* `removeLevel()`: **PolicyObject**

  删除本地策略。

  参数：

  * `level`: **string**

    策略等级，其值为数字的字符串形式。

  返回值：当前对象。

## LevelPolicyObject

```typescript
class LevelPolicyObject {
    handshake: number = 4;

    connIdle: number = 300;

    uplinkOnly: number = 2;

    downlinkOnly: number = 5;

    statsUserUplink: boolean = false;

    statsUserDownlink: boolean = false;

    bufferSize: number = 512;
}
```

* `handshake`: **number**

  连接建立时的握手时间限制。单位为秒。默认值为 `4`。在入站代理处理一个新连接时，在握手阶段（比如 VMess 读取头部数据，判断目标服务器地址），如果使用的时间超过这个时间，则中断该连接。

* `connIdle`: **number**

  连接空闲的时间限制。单位为秒。默认值为 `300`。在入站出站代理处理一个连接时，如果在 `connIdle` 时间内，没有任何数据被传输（包括上行和下行数据），则中断该连接。

* `uplinkOnly`: **number**

  当连接下行线路关闭后的时间限制。单位为秒。默认值为 `2`。当服务器（如远端网站）关闭下行连接时，出站代理会在等待 `uplinkOnly` 时间后中断连接。

* `downlinkOnly`: **number**

  当连接上行线路关闭后的时间限制。单位为秒。默认值为 `5`。当客户端（如浏览器）关闭上行连接时，入站代理会在等待 `downlinkOnly` 时间后中断连接。

  > 在 HTTP 浏览的场景中，可以将 `uplinkOnly` 和 `downlinkOnly` 设为 `0`，以提高连接关闭的效率。

* `statsUserUplink`: **boolean**

  当值为 `true` 时，开启当前等级的所有用户的上行流量统计。

* `statsUserDownlink`: **boolean**

  当值为 `true` 时，开启当前等级的所有用户的下行流量统计。

* `bufferSize`: **number**

  每个连接的内部缓存大小。单位为 kB。当值为 `0` 时，内部缓存被禁用。

  默认值 (V2Ray 4.4+):

  - 在 ARM、MIPS、MIPSLE 平台上，默认值为 `0`。
  - 在 ARM64、MIPS64、MIPS64LE 平台上，默认值为 `4`。
  - 在其它平台上，默认值为 `512`。

  默认值 (V2Ray 4.3-):

  - 在 ARM、MIPS、MIPSLE、ARM64、MIPS64、MIPS64LE 平台上，默认值为 `16`。
  - 在其它平台上，默认值为 `2048`。

  > 在 **v2script** 中，默认使用 V2Ray 4.4+ 的其他平台标准，即 `512` 。

## SystemPolicyObject

```typescript
class SystemPolicyObject {
    statsInboundUplink: boolean = false;

    statsInboundDownlink: boolean = false;

    statsOutboundUplink: boolean = false;

    statsOutboundDownlink: boolean = false;
}
```

* `statsInboundUplink`: **boolean**

  当值为 `true` 时，开启所有入站代理的上行流量统计。

* `statsInboundDownlink`: **boolean**

  当值为 `true` 时，开启所有入站代理的下行流量统计。

* `statsOutboundUplink`: **boolean**

  当值为 `true` 时，开启所有出站代理的上行流量统计（ V2Ray 4.26.0+ ）。

* `statsOutboundDownlink`: **boolean**

  当值为 `true` 时，开启所有出站代理的下行流量统计（ V2Ray 4.26.0+ ）。