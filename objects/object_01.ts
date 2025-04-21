let myObj = {
  name: "suman kayal",
  age: 21,
};

let myObj_fun = (): { name: string; age: number } => {
  return { name: "sky", age: 21 };
};

function user({ name: string, paid: boolean }) {}

myObj_fun();
user({ name: "sky", paid: true });

// union ==>
// // You are declaring variables (a, b, c) that can hold values of multiple types: string, number, or boolean.
// This is done using union types in TypeScript with the | symbol.
let a: string | number | boolean = 10;
let b: string | number | boolean = "sky";
let c: string | number | boolean = true;
// Here, each variable (a, b, c) can store a string, number, or boolean value.
// This is useful when a variable may hold different types of values.

type varType = string | number | boolean;
// varType is a type alias that can represent a value of type string, number, or boolean.
// type varType = string | number | boolean; = reusable type alias

let a_copy: varType = 10;
let b_copy: varType = "sky";
let c_copy: varType = true;
// These variables (a_copy, b_copy, c_copy) are of type varType,
// which allows them to hold values of type string, number, or boolean.

// ⛔ Definition of Type Alias in TypeScript:
// A type alias in TypeScript is a way to give a name to a type.
// It allows you to create a custom type or combine multiple types into a single, reusable name.
// Type aliases make your code more readable and maintainable.

// type alias ===>

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// 🔹 What is type or type Alias in TypeScript ?
// In TypeScript, type is a keyword used to create your own custom types.
// It helps you define the shape of data (like what properties an object should have)
// and makes your code easier to understand and reuse.

// You can use it for:
// Objects
// Strings or numbers (as choices)
// Functions
// And more!

function createUser(user: User) {}

export {};
