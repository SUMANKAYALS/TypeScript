function addtTwoNum(num: number) {
    return num + 1
}

function signup(name: string, email: string, isPad: boolean){
    
}

let addNum = (num: number) => {
    return "sky" 
    // why doesn't give error ?
    // ===> TypeScript doesn't give an error because the function is 
    //declared to return any by default if no return type is explicitly specified, 
    //so returning a string is allowed even though the parameter is a number.
}

function addNum_2(num: number): number {
    // return "hello sky"
    return num + 1
}

const name = (name: string): string => {
    return name
}
addtTwoNum(1)
signup("sky", "sky@gmail.com", true)
addNum(10) 
addNum_2(10)
name("my name is suman kayal")




const arr = ["sky", "sk", "suman kayal"];
arr.map((event): string => {
    return `my real name is ${event}`
})


function consoleError(errorMessage: string): void { //The void type is used for functions 
// that do not return a value, but they may still complete normally (e.g., with console.log).
    console.log(errorMessage)
}


function consoleError_2(errorMessage: string): never { //The never type represents values that never occur, 
// used for functions that never return (e.g., they throw errors or run infinitely).
    throw new Error(errorMessage)
}

// 🔴 void vs never ===> 
// void: The function runs and finishes, but doesn’t give anything back.
// never: The function stops the program (by crashing) or keeps running forever — it never reaches the end.
//➡️ Example: It throws an error, so the code after it never runs.



export {}