# Typescript v2sub

[![NODEJS](https://img.shields.io/badge/Nodejs->=10-green)](https://nodejs.org) [![NPM](https://img.shields.io/badge/npm-orange)](https://www.npmjs.com) [![YARN](https://img.shields.io/badge/yarn-blue)](https://yarnpkg.com) [![TYPESCRIPT](https://img.shields.io/badge/typescript-4.1.3-informational)](https://www.typescriptlang.org/) 

## Introduction

TypeScript v2sub是一个基于TypeScript的v2ray配置生成包。

与通常手动修改config.json文件以配置v2ray不同，TypeScript v2sub支持编程方法来配置config.json。这将帮助您构建v2ray自动化控制脚本和可视化工具。

TypeScript v2sub的所有配置都是基于官方[v2ray](https://v2ray.com/)文档开发的。

当然，Tyescript v2sub仍有一些不足之处。如果您有更好的想法和建议，欢迎您贡献代码。

## 安装

在安装 TypeScript v2ray 之前，请确保您的计算机已经配置了 NodeJS 环境，并且安装了 npm 或 yarn 包管理器。

```shell
# npm
npm install typescript-v2sub

# yarn
yarn add typescript-v2sub
```

## 开始

### 导入 v2sub

您需要先导入v2sub，然后才能使用它。

```typescript
import { v2sub } from 'typescript-v2sub';
```

### 创建一个新的实例

你需要创建一个实例去使用 v2sub。v2sub 类构造函数需要传入一个订阅地址。

```typescript
let sub = new v2sub('Your v2ray subscription url');
```

v2sub 包括两个属性：`url` 和 `subs`，一个函数/方法：`toConfig()`。

当您使用构造函数创建新的v2sub实例时，v2sub会自动获取订阅地址中的信息，并以数组形式存储在`subs`中。

### 导出 Config.json

您可以使用`toConfig()`函数生成v2ray需要的配置文件。

```typescript
sub.toConfig('Your subscription name', 'output path');
```

## 进阶

在大多数实际开发中，`v2sub` 默认生成的 `config.json` 文件可能无法满足实际需求。因此，您可以使用 `v2ray` 模块自定义配置文件。

### 准备

在你开始使用之前，你需要了解 v2ray 的基本组成：

- [x] log

- [x] api

- [x] dns

- [x] stats

- [x] routing

- [x] policy

- [x] reverse

- [x] inbounds

- [x] outbounds

- [ ] transport

在 `v2ray` 模块中，暂时还没有开发 `transport` 模块，后续的开发将补全这一功能。

### 导入 v2ray

```typescript
import { v2ray } from 'typescript-v2sub';
```

### 创建一个新的实例

```typescript
let v = new v2ray();
```

创建新实例后，可以向v2ray对象添加结构。

### 构建结构

所有结构类的属性对应于V2ray配置中相应结构的属性。

**例：**

> #### LogObject
>
> ```json
> "log": {
> "access": "/path/to/file",
> "error": "path/to/file",
> "loglevel": "loglevel"
> }
> ```
>
> - `access`: string
>
>   访问日志的文件地址，其值是一个合法的文件地址，如`"/tmp/v2ray/_access.log"`（Linux）或者`"C:\\Temp\\v2ray\\_access.log"`（Windows）。当此项不指定或为空值时，表示将日志输出至 stdout。
>
> - `error`: string
>
>   错误日志的文件地址，其值是一个合法的文件地址，如`"/tmp/v2ray/_error.log"`（Linux）或者`"C:\\Temp\\v2ray\\_error.log"`（Windows）。当此项不指定或为空值时，表示将日志输出至 stdout。
>
> - `loglevel`: "debug" | "info" | "warning" | "error" | "none"
>
>   错误日志的级别。默认值为`"warning"`。
>
>   Log levels:
>
>   - `"debug"`:  只有开发人员能看懂的信息。同时包含所有`"info"`内容。
>   - `"info"`: V2Ray 在运行时的状态，不影响正常使用。同时包含所有`"warning"`内容。
>   - `"warning"`: V2Ray 遇到了一些问题，通常是外部问题，不影响 V2Ray 的正常运行，但有可能影响用户的体验。同时包含所有`"error"`内容。
>   - `"error"`: V2Ray 遇到了无法正常运行的问题，需要立即解决。
>   - `"none"`: 不记录任何内容。
>
> **以上内容来自 [v2ray.com](https://v2ray.com)**

在v2ray配置文件中，log属性包含三个子属性：`access`、`error`、`loglevel`。相应地，v2ray类中的`log`属性也包含`access`、`error`、`loglevel`三个子属性，您可以使用`Log()`函数初始化`log`属性。

如下 :

```typescript
v.Log('access', 'error', 'loglevel');
```

大多数属性都是字符串类型，但是，入站、出站和路由结构的构造需要其他类参与。

**例：**

```typescript
import { inbound, outbound, streamSettings } from 'typescript-v2sub/dist/structure';
import { socks_inbound, vmess_outbound } from 'typescript-v2sub/dist/protocol';

v.Inbound(new inbound(
    'proxy',
    10080,
    '127.0.0.1',
    'socks',
  	new socks_inbound('noauth')  
));

v.Outbound(new outbound(
    'proxy_out',
    'vmess',
    new vmess_outbound(
        '192.168.1.1',
        10010,
        "32"
    ),
    new streamSettings(
        'tcp',
        'none'
    )
))
```

**详细结构请查看[这里](./Structure.md).**

### 完整构建结构

```typescript
import { v2ray } from 'typescript-v2sub';
import { inbound, outbound, ruleObject, streamSetting } from 'typescript-v2sub/dist/structure';
import { socks_inbound, vmess_outbound } from 'typescript-v2sub/dist/protocol';

v.Log('', '', LOGLEVEL.warning);
v.Dns(['119.29.29.29']);

// Inbound() and Outbound() initialization functions can only be used once. To add inbound and outbound, use addInbound() and addOutbound()
v.Inbound(new inbound(
    'proxy',
    10080,
    '0.0.0.0',
    'socks',
    new socks_inbound('noauth')
));
v.addInbound(new inbound(
    'proxy_http',
    10809,
    '0.0.0.0',
    'http',
    new socks_inbound('noauth')
));

v.Outbound(new outbound(
    'proxy_out',
    PROTOCOL.vmess,
    new vmess_outbound(
        '192.168.1.1',
        10010,
        '32'
    ),
    new streamSettings(
        'tcp',
        'none'
    )
));
v.addOutbound(new outbound(
    'direct',
    'freedom',
    null,
    null
));
v.addOutbound(new outbound(
    'block',
    'blackhole',
    null,
    null
));

let routing = v.Routing('IPIfNoMatch');
routing.addRules(new ruleObject(
    [
        "geosite:google",
        "geosite:github",
        "geosite:netflix",
        "domain:gvt1.com",
        "domain:textnow.com",
        "domain:twitch.tv",
    ],
    [
        "91.108.4.0/22",
        "91.108.8.0/22",
        "91.108.12.0/22",
    ],
    null,
    'proxy_http'
));
```

## 鸣谢

<small>暂时还没有需要鸣谢的对象</small>