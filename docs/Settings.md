# Settings

***All structural configurations come from [v2ray.com](https://v2ray.com)***

You need to import Settings before you can use it.

```typescript
import { blackhole_outbound } from 'typescript-v2sub/dist/Protocol';
import { dns_outbound } from 'typescript-v2sub/dist/Protocol';
import { dokodemodoor_inbound } from 'typescript-v2sub/dist/Protocol';
import { freedom_outbound } from 'typescript-v2sub/dist/Protocol';
import { http_inbound, http_outbound } from 'typescript-v2sub/dist/Protocol';
import { mtproto_inbound } from 'typescript-v2sub/dist/Protocol';
import { shadowsocks_inbound, shadowsocks_outbound } from 'typescript-v2sub/dist/Protocol';
import { socks_inbound, socks_outbound } from 'typescript-v2sub/dist/Protocol';
import { vmess_inbound, vmess_outbound } from 'typescript-v2sub/dist/Protocol';
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