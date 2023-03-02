"use strict";
exports.__esModule = true;
var a_1 = require("./src/a");
Promise.resolve().then(function () { return require("./src/c"); }).then(function (re) {
    var m = re.m;
    console.log(m);
});
console.log('s', a_1.test);
