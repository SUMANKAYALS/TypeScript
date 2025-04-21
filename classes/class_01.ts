class User {
  name: string;
  email: string;
  id: number = 101;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user = new User("sky", "sky@gamil.com");
// console.log(user);
console.log(user.id);

export {};
