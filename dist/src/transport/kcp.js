"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KcpObject = void 0;
/**
 * mKCP 使用 UDP 来模拟 TCP 连接，请确定主机上的防火墙配置正确
 *
 * mKCP 牺牲带宽来降低延迟。传输同样的内容，mKCP 一般比 TCP 消耗更多的流量
 */
var KcpObject = /** @class */ (function () {
    function KcpObject() {
        /**
         * 最大传输单元（maximum transmission unit）
         *
         * 请选择一个介于 576 - 1460 之间的值
         */
        this.mtu = 1350;
        /**
         * 传输时间间隔（transmission time interval），单位毫秒（ms），mKCP 将以这个时间频率发送数据
         *
         * 请选译一个介于 10 - 100 之间的值
         */
        this.tti = 50;
        /** 上行链路容量，即主机发出数据所用的最大带宽，单位 MB/s */
        this.uplinkCapacity = 5;
        /** 行链路容量，即主机接收数据所用的最大带宽，单位 MB/s */
        this.downlinkCapacity = 20;
        /**
         * 是否启用拥塞控制
         *
         * 开启拥塞控制之后，V2Ray 会自动监测网络质量，当丢包严重时，会自动降低吞吐量；当网络畅通时，也会适当增加吞吐量
         */
        this.congestion = false;
        /** 单个连接的读取缓冲区大小，单位是 MB */
        this.readBufferSize = 2;
        /** 单个连接的写入缓冲区大小，单位是 MB */
        this.writeBufferSize = 2;
        /** 数据包头部伪装设置 */
        this.header = { type: "none" /* none */ };
    }
    return KcpObject;
}());
exports.KcpObject = KcpObject;
//# sourceMappingURL=kcp.js.map