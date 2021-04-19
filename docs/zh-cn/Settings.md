# Settings

***所有的结构配置都来自[v2ray.com](https://v2ray.com)***

您需要先导入Settings，然后才能使用它。

```typescript
import { blackhole_outbound } from 'ts2ray';
import { dns_outbound } from 'ts2ray';
import { dokodemodoor_inbound } from 'ts2ray';
import { freedom_outbound } from 'ts2ray';
import { http_inbound, http_outbound } from 'ts2ray';
import { mtproto_inbound } from 'ts2ray';
import { shadowsocks_inbound, shadowsocks_outbound } from 'ts2ray';
import { socks_inbound, socks_outbound } from 'ts2ray';
import { vmess_inbound, vmess_outbound } from 'ts2ray';
```

## Blackhole

### blackhole_outbound

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| type           | `string` | false      | "none"  |

## Dns

### dns_outbound

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| address        | `string` | true       |         |
| port           | `number` | true       |         |
| network        | `string` | false      | "tcp"   |

## Dokodemo door

### dokodemoDoor_inbound

| Attribute Name | Type      | Required ? | Default |
| -------------- | --------- | ---------- | ------- |
| address        | `string`  | true       |         |
| port           | `number`  | true       |         |
| network        | `string`  | false      | "tcp"   |
| timeout        | `number`  | false      | 300     |
| followRedirect | `boolean` | false      | false   |

## Freedom

### freedom_outbound

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| redirect       | `string` | true       |         |
| domainStrategy | `string` | false      | "Asls"  |

## Http

### http_inbound

| Attribute Name   | Type      | Required ? | Default |
| ---------------- | --------- | ---------- | ------- |
| u                | `string`  | false      | ""      |
| p                | `string`  | false      | ""      |
| timeout          | `number`  | false      | 300     |
| allowTransparent | `boolean` | false      | false   |

### http_outbound

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| address        | `string` | true       |         |
| port           | `number` | true       |         |
| user           | `string` | false      |         |
| pass           | `string` | false      |         |

## MTProto

### mtproto_inbound 

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| secret         | `string` | true       |         |

## ShadowSocks

### shadowsocks_inbound

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| passsword      | `string` | true       |         |
| method         | `string` | false      |         |
| network        | `string` | false      |         |

### shadowsocks_outbound

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| address        | `string` | true       |         |
| port           | `number` | true       |         |
| password       | `string` | true       |         |
| method         | `string` | true       |         |

## Socks

### socks_inbound

| Attribute Name | Type                                       | Required ? | Default  |
| -------------- | ------------------------------------------ | ---------- | -------- |
| auth           | `string`                                   | false      | "noauth" |
| domainStrategy | `object: {user: string, password: string}` | false      | null     |
| udp            | `boolean`                                  | false      | false    |
| ip             | `string`                                   | false      | null     |

### socks_outbound

| Attribute Name | Type                                   | Required ? | Default     |
| -------------- | -------------------------------------- | ---------- | ----------- |
| address        | `string`                               | false      | "127.0.0.1" |
| port           | `number`                               | true       |             |
| users          | `object: {user: string, pass: string}` | false      |             |

## Vmess

### vmess_inbound

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| id             | `string` | true       |         |

### vmess_outbound

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| address        | `string` | true       |         |
| port           | `string` | true       |         |
| id             | `string` | true       |         |