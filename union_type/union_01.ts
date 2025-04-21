const data: string | number | boolean = 300;

type User = {
  name: string;
  age: number;
};

type admin = {
  name: string;
  age: number;
  access: boolean;
};

let data_2: User | admin = { name: "sky", age: 21 };
data_2 = { name: "sk", age: 21, access: true };

function admin(id: string | number) {
  console.log(`data ${id}`);
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

function newDatatypeFunction(id: string | number) {
  if (typeof id === "string") {
    id.toUpperCase();
  }
}

const value_1: string[] = ["s", "u", "m", "a", "n"];
const value_2: number[] = [1, 2, 3, 4, 5];

// const value_3: number[] | string[] = ["s", 2]
//❗ It gives an error because value_3 must be all numbers or all strings,
// but ["s", 2] mixes both types, which doesn't match number[] | string[]. ❌

const value_3: number[] | string[] = ["s", "k", "y"];
const value_4: number[] | string[] = [1, 2, 3];

// solve this problem by using a union inside the array....

const value_5: (number | String | boolean)[] = ["sky", 3, true];

let id: 3 = 3;
// id = 10

// ❓ Why the error?
// Because id: 3 means id can only ever be the number 3 — this is called a literal type.

export {};
