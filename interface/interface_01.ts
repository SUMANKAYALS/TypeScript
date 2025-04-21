interface User {
  readonly dbId: number;
  name: string;
  age: number;
  email: string;
  googleAuth?: string; // ✅ with value// optional
  testFun: () => string;
  testFun_2(): string;
}
interface User {
  testFun_3(data: string): number;
}

interface Admin extends User {
  testFun_4(): string;
}
const data: Admin = {
  dbId: 22,
  name: "sky",
  age: 21,
  email: "sky@gmail.com",
  testFun: () => {
    return "sky";
  },
  testFun_2: () => {
    return "sky";
  },
  testFun_3: (value) => {
    const data: number = value.length;
    return data;
  },
  testFun_4: () => {
    return "sky";
  },
};
const data_2: string | number = data.testFun_3("sky");
console.log(data_2);
// 🛑 An interface in TypeScript defines the shape of an object, including required and optional properties,
// and readonly makes a property immutable.

export {};
