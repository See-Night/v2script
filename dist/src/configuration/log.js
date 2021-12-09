"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogObject = void 0;
/**
 * 日志配置，表示 V2Ray 如何输出日志
 */
var LogObject = /** @class */ (function () {
    /**
     * 构造函数
     * @param access 访问日志的文件地址，其值是一个合法的文件地址
     * @param error 错误日志的文件地址，其值是一个合法的文件地址
     * @param loglevel 日志的级别，其值是 LOGLEVEL 枚举类型，默认值为 LOGLEVEL.warning
     */
    function LogObject(access, error, loglevel) {
        /**
         * 访问日志的文件地址，其值是一个合法的文件地址，如`/var/log/v2ray/access.log`（Linux）或者`C:\\Temp\\v2ray\\_access.log`（Windows）
         *
         * 当此项不指定或为空值时，表示将日志输出至 stdout
         *
         * V2Ray 4.20 加入了特殊值 `none`，即关闭 access log
         */
        this.access = "";
        /**
         * 错误日志的文件地址，其值是一个合法的文件地址，如`/var/log/v2ray/error.log`（Linux）或者`C:\\Temp\\v2ray\\_error.log`（Windows）
         *
         * 当此项不指定或为空值时，表示将日志输出至 stdout
         *
         * V2Ray 4.20 加入了特殊值 `none`，即关闭 error log（跟loglevel: "none"等价）。
         */
        this.error = "";
        /**
         * 日志的级别。默认值为 "warning"。
         * * `debug`：详细的调试性信息, 同时包含所有 `info` 内容
         * * `info`：V2Ray 在运行时的状态，不影响正常使用, 同时包含所有 `warning` 内容
         * * `warning`：V2Ray 遇到了一些问题，通常是外部问题，不影响 V2Ray 的正常运行，但有可能影响用户的体验, 同时包含所有 `error` 内容
         * * `error`：V2Ray 遇到了无法正常运行的问题，需要立即解决
         * * `none`：不记录任何内容
         */
        this.loglevel = "warning" /* warning */;
        this.access = access || this.access;
        this.error = error || this.error;
        this.loglevel = loglevel || this.loglevel;
    }
    return LogObject;
}());
exports.LogObject = LogObject;
//# sourceMappingURL=log.js.map