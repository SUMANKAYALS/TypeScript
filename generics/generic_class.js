"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sellable = /** @class */ (function () {
    function sellable() {
        var _this = this;
        this.cart = [];
        this.add = function (product) {
            _this.cart.push(product);
        };
    }
    return sellable;
}());
var test = new sellable();
test.add(10);
console.log(test.cart);
