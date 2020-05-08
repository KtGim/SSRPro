"use strict";
exports.__esModule = true;
// => 箭头与es6不同，此处表示函数返回类型
var mySum = function (x, y) {
    return x + y;
};
// 此时ts 会使用 类型推论而推断出来 mySum2 的入参及出参类型
var mySum2 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数与参数默认值
function buildName(firstName, lastName, age) {
    if (lastName === void 0) { lastName = 'ppp'; }
    return firstName + "_" + lastName + "_" + age;
}
buildName('qian');
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 枚举类型
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
// 常数枚举
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
