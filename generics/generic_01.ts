const data_01: Array<string> = [];
const data_02: Array<number> = [];
// const arr1: <string> = []

function identity(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  //val: any: This means the parameter val can be any type (number, string, object, etc.).
  //   : any: This means the return type of the function is also any.
  return "sky";
}
identityTwo(10);
function identity_3<type>(val: type): type {
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

function identity_4<T>(val: T): T {
  return val;
}
interface test {
  name: string;
  age: 22;
}
// identity_4<test>({})
function A<T>(products: T[]): T {
  return products[3];
}
const arr: string[] = ["s", "k", "y"];
console.log(A(arr));

const A_1 = <T>(variable: T): T => {
  return variable;
};

export {};
