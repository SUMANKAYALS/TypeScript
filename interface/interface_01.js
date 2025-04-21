"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = {
    dbId: 22,
    name: "sky",
    age: 21,
    email: "sky@gmail.com",
    testFun: function () {
        return "sky";
    },
    testFun_2: function () {
        return "sky";
    },
    testFun_3: function (value) {
        var data = value.length;
        return data;
    },
    testFun_4: function () {
        return "sky";
    },
};
var data_2 = data.testFun_3("sky");
console.log(data_2);
