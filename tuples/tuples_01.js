"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A tuple in TypeScript is a fixed-length array with specified types for each element
var arr = [1, "sky", true];
// ✅ What’s happening here:
// You're declaring a tuple named arr.
// The type [number, string, boolean] strictly defines the order and types of elements in the array.
// You're assigning the values:
// 1 (a number)
// "sky" (a string)
// true (a boolean)
// So arr[0] is a number, arr[1] is a string, and arr[2] is a boolean.
//arr.push("sk"); // ❌ Error in TypeScript
console.log(arr);
