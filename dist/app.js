"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const localStorage_1 = __importDefault(require("localStorage"));
const app = express_1.default();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Welcome, \n /increment for adding number \n /decrement for minus number");
});
app.get("/increment", (req, res) => {
    let num = localStorage_1.default.getItem("num");
    if (!num) {
        localStorage_1.default.setItem("num", 1);
        num = 1;
    }
    else {
        localStorage_1.default.setItem("num", parseInt(num) + 1);
        num++;
    }
    res.send("Your number : " + parseInt(num));
});
app.get("/decrement", (req, res) => {
    let num = localStorage_1.default.getItem("num");
    if (!num) {
        localStorage_1.default.setItem("num", 0);
        num = 0;
    }
    else {
        localStorage_1.default.setItem("num", parseInt(num) - 1);
        num--;
    }
    res.send("Your number : " + parseInt(num));
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map