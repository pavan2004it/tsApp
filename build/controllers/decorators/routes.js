"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
var MetaDataKeys_js_1 = require("./MetaDataKeys.js");
var Methods_js_1 = require("./Methods.js");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetaDataKeys_js_1.MetaDataKeys.path, path, target, key);
            Reflect.defineMetadata(MetaDataKeys_js_1.MetaDataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_js_1.Methods.get);
