"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setData;
(function (setData) {
    setData["a"] = "sky";
    setData[setData["b"] = 1] = "b";
    setData[setData["c"] = 2] = "c";
    setData[setData["d"] = 3] = "d";
})(setData || (setData = {}));
var data = setData.a;
