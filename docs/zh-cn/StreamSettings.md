# StreamSettings

***所有的结构配置都来自[v2ray.com](https://v2ray.com)***

您需要先导入streamSettings，然后才能使用它。

```typescript
import { streamSettings } from 'ts2ray';
```

所有Settings类都是StreamSettings的子类。

## tcpSettings

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| type           | `string` | false      | "none"  |

## kcpSettings

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| type           | `string` | false      | "none"  |

## wsSettings

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| path           | `string` | true       |         |

## httpSettings

| Attribute Name | Type       | Required ? | Default |
| -------------- | ---------- | ---------- | ------- |
| hosts          | `string[]` | true       |         |
| path           | `string`   | true       |         |

## dsSettings

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| path           | `string` | true       |         |

## quicSettings

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| key            | `string` | true       |         |
| security       | `string` | false      | "none"  |
| type           | `string` | false      | "none"  |

## tlsSettings

| Attribute Name  | Type       | Required ? | Default |
| --------------- | ---------- | ---------- | ------- |
| servername      | `string`   | true       |         |
| allowinsecure   | `boolean`  | true       | false   |
| alpn            | `string[]` | true       |         |
| usage           | `string`   | true       |         |
| cerfificateFile | `string`   | true       |         |
| keyFile         | `string`   | true       |         |