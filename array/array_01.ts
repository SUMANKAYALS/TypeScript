// const arr = []
// arr.push("sky");
// ❌ In TypeScript, if you create an array without saying what type it is and without putting anything inside it,
// TypeScript doesn’t know what kind of values it should hold.

const arr_1: string[] = [];
arr_1.push("sky");

// anouther ways to declare arrays in TypeScript:
const arr_2: Array<string> = [];
arr_2.push("sky");
// 🔴 Array<string> means: this is an array that will hold strings only.
// 🔴 arr_2.push("sky") adds the string "sky" to the array.
