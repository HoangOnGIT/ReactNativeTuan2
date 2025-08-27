"use strict";
//Bai 1
// let b1 = new Promise<void>((resolve) => {
//     setTimeout(
//         () => console.log("Hello Async")
//         , 2000)
// })
Object.defineProperty(exports, "__esModule", { value: true });
// b1.then(() => {}).catch(err => console.log(err)
// )
//B2
let b2 = new Promise((resolve) => {
    return setTimeout(() => resolve(12), 1000);
});
b2.then(data => console.log(data)).catch((err) => console.log(err));
