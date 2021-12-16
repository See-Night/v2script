# Stats 统计信息

V2Ray 提供了一些关于其运行状况的统计信息。

##  StatsObject

`StatsObject` 对应配置文件的 `stats` 项。

```typescript
class StatsObject {
    
}
```

目前统计信息没有任何参数，只要 `StatsObject` 项存在，内部的统计即会开启。同时你还需要在 [Policy](Policy.md) 中开启对应的项，才可以统计对应的数据。