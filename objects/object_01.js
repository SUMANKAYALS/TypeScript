"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myObj = {
    name: "suman kayal",
    age: 21
};
var myObj_fun = function () {
    return { name: "sky", age: 21 };
};
function user(_a) {
    var string = _a.name, boolean = _a.paid;
}
myObj_fun();
user({ name: "sky", paid: true });
// union ==> 
// // You are declaring variables (a, b, c) that can hold values of multiple types: string, number, or boolean.
// This is done using union types in TypeScript with the | symbol.
var a = 10;
var b = "sky";
var c = true;
// varType is a type alias that can represent a value of type string, number, or boolean.
// type varType = string | number | boolean; = reusable type alias
// These variables (a_copy, b_copy, c_copy) are of type varType, 
// which allows them to hold values of type string, number, or boolean.
var a_copy = 10;
var b_copy = "sky";
var c_copy = true;
// 🔹 What is type or type Alias in TypeScript ? 
// In TypeScript, type is a keyword used to create your own custom types. 
// It helps you define the shape of data (like what properties an object should have) 
// and makes your code easier to understand and reuse.
// You can use it for:
// Objects
// Strings or numbers (as choices)
// Functions
// And more!
function createUser(user) { }
