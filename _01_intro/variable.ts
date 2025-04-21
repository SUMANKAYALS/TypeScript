let value: String = 'hello sky';
value.toUpperCase();
console.log(value);


// number

const userId: number = 101 // it is not good practice at all...

let userId_2 = 102 // this is the good practice...Because

// userId_2 = "my name is sky" // Because TypeScript is so smart, it has already detected it is the number type veriable

// boolean

let inLoggedIn: boolean = false


// any ==> The any type in TypeScript allows a variable to hold any value, disabling type checking for that variable.

let anyvalue

function get() {
    return "my name is sky"
}

anyvalue = get()

// ❗ Using any in production is not good practice because it removes type safety, making code error-prone and harder to maintain.



export {}