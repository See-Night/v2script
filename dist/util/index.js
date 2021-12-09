"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallbackObject = exports.AccountObject = exports.StreamSettingsObject = void 0;
var streamsetting_1 = require("./streamsetting");
Object.defineProperty(exports, "StreamSettingsObject", { enumerable: true, get: function () { return streamsetting_1.StreamSettingsObject; } });
var protocal_1 = require("./protocal");
Object.defineProperty(exports, "AccountObject", { enumerable: true, get: function () { return protocal_1.AccountObject; } });
var FallbackObject = /** @class */ (function () {
    /**
     * FallbackObject
     * @param dest 决定 TLS 解密后 TCP 流量的去向
     */
    function FallbackObject(dest) {
        this.alpn = "";
        this.path = "";
        this.xver = 0;
        this.dest = dest;
    }
    return FallbackObject;
}());
exports.FallbackObject = FallbackObject;
//# sourceMappingURL=index.js.map