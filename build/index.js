"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
// import cookieSession from "cookie-session";
var AppRouter_1 = require("./AppRouter");
require("./controllers/RootController");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use(cookieSession({keys: ['UU6D4b10StP2zvexJeoSsoGSRBBB7jhzzZqe3yH0y7vU7E']}))
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
