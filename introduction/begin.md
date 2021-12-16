# 快速开始

本篇将介绍如何安装 **v2script**，并且给出简单的使用样例。

## 准备

在安装 **v2script** 之前，需要安装 Nodejs（推荐安装12以上的版本）以及 **npm** 或 **yarn** 包管理器。

由于不通操作系统安装的方法大不相同，请自行解决，本篇不作详细说明。

## 安装

新建一个项目文件夹，在命令行（终端）运行以下命令：

```bash
# npm
$ npm install --save v2script

# yarn
$ yarn add v2script
```

## 初始化项目

新建一个 Typescript 文件，例如 `index.ts`。

在 `index.ts` 文件中添加以下内容：

```typescript
import { v2ray } from "v2script";

let v: v2ray = new v2ray();
```

这样就新建了一个 v2ray 实例。

## 添加配置

在 **v2script** 中，所有结构、连接、协议均为类。

所有的类都可以直接导入：

```typescript
import {
    LogObject,
    InboundObject,
    OutboundObject,
    
    VmessOutboundObject,
    SocksInboundObject,
    
    TcpObject
} from "v2script";
```

导入相关类后，你可以通过实例化类去构建配置结构，并修改属性：

```typescript
let inbounds: InboundObject[] = [];

let settings: SocksInboundObject = new SocksInboundObject(
    SOCKS_AUTH.password,
    new AccountObject(
        "user",
        "password"
    )
);

let inbound: InboundObject = new InboundObject(
    "in", // tag
    "127.0.0.1", // 监听地址
    123456, // 监听端口
    PROTOCAL.socks, // 连接协议
    settings
)

inbounds.push(inbound);
```

详细内容请查看[配置](/introduction/config.md)章节
