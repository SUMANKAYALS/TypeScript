"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var test = /** @class */ (function () {
    //⛔ protected Access Modifier
    // When a class property or method is marked as protected, it can be accessed:
    // Inside the same class
    // Inside subclasses (derived classes)
    // But not from outside those classes.
    function test(name, email) {
        this.name = name;
        this.email = email;
        // private: This access modifier means the data property
        // can only be accessed within the class it is declared in.
        this.data_2 = "my name is suman kayal";
    }
    Object.defineProperty(test.prototype, "getter", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(test.prototype, "setter", {
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return test;
}());
var test2 = /** @class */ (function (_super) {
    __extends(test2, _super);
    function test2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test2.prototype.demo = function () {
        console.log(this.data_2);
    };
    return test2;
}(test));
//🟥 In TypeScript, get and set allow you to create controlled access to private properties in a class.
var user = new test2("sky", "sky@gmail.com");
user.setter = "sky"; // using setter
console.log(user.getter); // using getter
user.demo();
