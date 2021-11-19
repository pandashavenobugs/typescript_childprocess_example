"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const forkedChild = (0, child_process_1.fork)("build/child1.js");
forkedChild.on("close", function () {
    console.log("closed");
});
forkedChild.on("message", function (message) {
    console.log(message);
});
forkedChild.on("error", (err) => {
    console.log(err);
});
setInterval(() => {
    forkedChild.send("does child get the message?");
}, 1000);
