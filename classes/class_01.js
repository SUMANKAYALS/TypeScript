"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.id = 101;
        this.name = name;
        this.email = email;
    }
    return User;
}());
var user = new User("sky", "sky@gamil.com");
// console.log(user);
console.log(user.id);
