* [ ] `OutboundObject` `constructor()` `protocal` 改为 `protocol`
* [ ] `lib/index.ts: 2` `import { AccountObject } from "./protocal";` 改为 `import { AccountObject } from "./protocol";`
* [ ] `lib/protocal.ts` 改为 `lib/protocol.ts`
* [ ] `src/protocol/vless.ts` `VlessInboundObject` `clients: VlessInboundObject[];` 改为 `clients: VlessClientObject[];`
* [ ] `src/protocol/vless.ts` `VlessInboundObject` `constructor(clients: VlessInboundObject | VlessInboundObject[], fallbacks: FallbackObject | FallbackObject[])` 改为 `constructor(clients: VlessClientObject | VlessClientObject[], fallbacks: FallbackObject | FallbackObject[])`
* [ ] `src/transport/tcp.ts` `NoneHeaderObject` `type: string = "none"` 改为 `type: "none" = "none"`
* [ ] `src/transport/tcp.ts` `HttpHeaderobject`  改为 `HttpHeaderObject`
* [ ] `src/transport/tcp.ts` `NoneHeaderObject` `type: string = "http"` 改为 `type: "http" = "http"`