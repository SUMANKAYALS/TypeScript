"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_01 = [];
var data_02 = [];
// const arr1: <string> = []
function identity(val) {
    return val;
}
function identityTwo(val) {
    //val: any: This means the parameter val can be any type (number, string, object, etc.).
    //   : any: This means the return type of the function is also any.
    return "sky";
}
identityTwo(10);
function identity_3(val) {
    //   return "sky";
    return val;
}
identity_3(10);
// What's wrong?
// You're telling TypeScript:
// The function accepts a value of a generic type type.
// It returns a value of that same type.
// But inside the function, you're returning the string "sky" regardless of input,
// even though the input might be a number (like 10 in your call).
//✅ difference between generics and any
// 'any' means "accept anything, return anything" — no type checks!
// Generics mean "accept any type, but remember and preserve that type"
// So generics are both flexible AND safe
function identity_4(val) {
    return val;
}
// identity_4<test>({})
function A(products) {
    return products[3];
}
var arr = ["s", "k", "y"];
console.log(A(arr));
var A_1 = function (variable) {
    return variable;
};
