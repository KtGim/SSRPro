"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
/*
 * @Author: your name
 * @Date: 2020-05-07 21:57:49
 * @LastEditTime: 2020-05-07 23:47:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \TSTEST\index.ts
 */
require("reflect-metadata");
var esprima_1 = require("esprima"); // 解析 ast 语法树
var Types = {
    "indexService": Symbol["for"]("indexService")
};
var IndexService = /** @class */ (function () {
    function IndexService() {
    }
    IndexService.prototype.log = function (str) {
        console.log(str);
    };
    return IndexService;
}());
function inject(serviceIndefier) {
    console.log(serviceIndefier);
    return function (target, targetKey, index) {
        console.log(target, targetKey, index);
        if (!targetKey) {
            // target["indexService"] = new IndexService();
            Reflect.defineMetadata(serviceIndefier, new IndexService(), target);
        }
    };
}
function getParams(fn) {
    var ast = esprima_1.parseScript(fn.toString());
    var funParam = [];
    console.log(ast, 'ast====');
    var node = ast.body[0];
    if (node.type === 'FunctionDeclaration') {
        funParam = node.params;
    }
    var valiadParam = [];
    console.log(funParam);
    funParam.forEach(function (obj) {
        if (obj.type === 'Identifier') {
            valiadParam.push(obj.name);
        }
    });
    return valiadParam;
}
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}
function controller(constructor) {
    console.log('step3');
    var Controller = /** @class */ (function (_super) {
        __extends(Controller, _super);
        function Controller() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.call(this, args) || this;
            var injectParams = getParams(constructor);
            var indefy;
            for (var _a = 0, injectParams_1 = injectParams; _a < injectParams_1.length; _a++) {
                indefy = injectParams_1[_a];
                if (hasKey(_this, indefy)) {
                    _this[indefy] = Reflect.getMetadata(Types[indefy], constructor);
                }
            }
            console.log("step4");
            return _this;
        }
        return Controller;
    }(constructor));
    return Controller;
}
var IndexController = /** @class */ (function () {
    // constructor(@inject(Types.indexService) indexService: IIndexService) {
    function IndexController(indexService) {
        this.indexService = indexService;
    }
    IndexController.prototype.info = function () {
        this.indexService.log('JJJJ');
    };
    IndexController = __decorate([
        controller,
        __param(0, inject(Types.indexService))
    ], IndexController);
    return IndexController;
}());
// const indexController = new IndexController();
// indexController.info();
// const indexService = new IndexService();
// const indexController = new IndexController(indexService);
// indexController.info();
// 无侵入式注入
var index = new IndexController(null);
index.info();
