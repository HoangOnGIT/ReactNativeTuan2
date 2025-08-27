"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let p = new Promise((resolve) => {
    setTimeout(() => console.log("Hello Async"), 2000);
});
p.then(() => { }).catch(err => console.log(err));
