"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = 300;
var data_2 = { name: "sky", age: 21 };
data_2 = { name: "sk", age: 21, access: true };
function admin(id) {
    console.log("data ".concat(id));
}
admin(301);
admin("301");
// The parameter id: string | number uses a union type,
// allowing the admin function to accept either a string or a number,
// so both admin(301) and admin("301") work without error. ✅
// ❌ function newDatatypeFunction(id: string | number) {
//     id.toUpperCase();
// }
// ❓ Why the error?
// Because id is a union type (string | number),
// TypeScript doesn't know if it's a string or a number when you call .toUpperCase()
// — and only strings have .toUpperCase().
// solving the problem ===>
function newDatatypeFunction(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
var value_1 = ["s", "u", "m", "a", "n"];
var value_2 = [1, 2, 3, 4, 5];
// const value_3: number[] | string[] = ["s", 2]
//❗ It gives an error because value_3 must be all numbers or all strings,
// but ["s", 2] mixes both types, which doesn't match number[] | string[]. ❌
var value_3 = ["s", "k", "y"];
var value_4 = [1, 2, 3];
// solve this problem by using a union inside the array....
var value_5 = ["sky", 3, true];
var id = 3;
