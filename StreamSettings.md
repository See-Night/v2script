# StreamSettings

***All structural configurations come from [v2ray.com](https://v2ray.com)***

You need to import Settings before you can use it.

```typescript
import { streamSettings } from 'typescript-v2sub';
```

All Settings classes are subclasses of StreamSettings.

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