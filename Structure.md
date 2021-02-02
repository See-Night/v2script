# Structure

***All structural configurations come from [v2ray.com](https://v2ray.com)***

## Log

| Attribute Name | Type     | Required ? | Default   |
| -------------- | -------- | ---------- | --------- |
| access         | `string` | true       |           |
| error          | `string` | true       |           |
| loglevel       | `string` | true       | 'warning' |

## dns

| Attribute Name | Type       | Required ? | Default |
| -------------- | ---------- | ---------- | ------- |
| servers        | `string[]` | false      |         |
| hosts          | `object`   | false      |         |
| clientIp       | `string`   | false      |         |
| tag            | `string`   | false      |         |

## Inbound

| Attribute Name                        | Type                                                         | Required ? | Default |
| ------------------------------------- | ------------------------------------------------------------ | ---------- | ------- |
| tag                                   | `string`                                                     | true       |         |
| port                                  | `number`                                                     | true       |         |
| listen                                | `string`                                                     | true       |         |
| protocol                              | `string`                                                     | true       |         |
| [settings](./Settings.md)             | `vmess_inbound`<br />`socks_inbound`<br />`shadowsocks_inbound`<br />`mtproto_inbound`<br />`http_inbound`<br />`dokodemoDoor_inbound` | true       |         |
| [streamsettings](./StreamSettings.md) | `streamSettings`                                             | false      |         |

## Outbound

| Attribute Name | Type                                                         | Required ? | Default                           |
| -------------- | ------------------------------------------------------------ | ---------- | --------------------------------- |
| tag            | `string`                                                     | true       |                                   |
| protocol       | `string`                                                     | true       |                                   |
| settings       | `blackhole_outbound`<br />`dns_outbound`<br />`freedom_outbound`<br />`http_outbound`<br />`mtproto_outbound`<br />`shadowsocks_outbound`<br />`socks_outbound`<br />`vmess_outbound` | true       |                                   |
| streamsettings | `streamSettings`                                             | true       |                                   |
| mux            | `object: {enable: boolean, concurrency: number}`             | true       | `{ enable: true, concurrency: 0}` |

## Routing

| Attribute Name | Type     | Required ? | Default |
| -------------- | -------- | ---------- | ------- |
| domainStrategy | `string` | false      |         |

| Function Name | Param: Type                         | return |
| ------------- | ----------------------------------- | ------ |
| addRules      | rule: [`ruleObject`]('#ruleObject') | `void` |

## ruleObject

| Attribute Name | Type       | Required ? | Default |
| -------------- | ---------- | ---------- | ------- |
| domain         | `string[]` | false      | null    |
| ip             | `string[]` | false      | null    |
| inboundTag     | `string`   | false      | null    |
| outboundTag    | `string`   | false      | null    |
| port           | `string`   | false      | null    |
| protocol       | `string`   | false      | null    |
| network        | `string`   | false      | null    |
| source         | `string`   | false      | null    |

## sniffing

| Attribute Name | Type       | Required ? | Default |
| -------------- | ---------- | ---------- | ------- |
| enabled        | `boolean`  | true       |         |
| destOverride   | `string[]` | true       |         |