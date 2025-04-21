class test {
  private data: string;
  // private: This access modifier means the data property
  // can only be accessed within the class it is declared in.
  protected data_2: string = "my name is suman kayal";
  //⛔ protected Access Modifier
  // When a class property or method is marked as protected, it can be accessed:
  //1️⃣ Inside the same class
  //2️⃣ Inside subclasses (derived classes)
  //3️⃣ But not from outside those classes.
  constructor(public name: string, public email: string) {}
  get getter(): string {
    return this.data;
  }
  set setter(data) {
    this.data = data;
  }
}

class test2 extends test {
  // test2 inherited test
  demo() {
    console.log(this.data_2);
  }
}

//🟥 In TypeScript, get and set allow you to create controlled access to private properties in a class.

const user = new test2("sky", "sky@gmail.com");
user.setter = "sky"; // using setter
console.log(user.getter); // using getter
user.demo();
export {};
