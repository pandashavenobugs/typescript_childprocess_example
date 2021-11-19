"use strict";
setInterval(function () {
    process.send?.("sea");
    // this code as
    // if (process.send) {
    //   process.send("sea");
    // }
}, 1000);
process.on("message", (message) => {
    console.log(message);
});
