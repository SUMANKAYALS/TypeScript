"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    Instagram.prototype.Creatstory = function () {
        console.log("The Story");
    };
    return Instagram;
}());
var data = new Instagram("102sony", "i donen,t no", 32);
data.Creatstory();
