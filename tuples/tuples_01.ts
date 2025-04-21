// A tuple in TypeScript is a fixed-length array with specified types for each element
const arr: [number, string, boolean] = [1, "sky", true];
// ✅ What’s happening here:
// You're declaring a tuple named arr.
// The type [number, string, boolean] strictly defines the order and types of elements in the array.
// You're assigning the values:
// 1 (a number)
// "sky" (a string)
// true (a boolean)
// So arr[0] is a number, arr[1] is a string, and arr[2] is a boolean.

//arr.push("sk"); // ❌ Error in TypeScript at run time
console.log(arr);

// 🧠 Why the error?
// Tuples have a fixed length and type order.

// You defined the tuple to have exactly 3 elements: [number, string, boolean].

// push("sk") tries to add a 4th element, which violates the fixed length.

// 💡 TypeScript is strict about it, but...
// Surprisingly, at runtime (in JavaScript), it will still add the value — but TypeScript warns you to avoid bugs.

export {};
