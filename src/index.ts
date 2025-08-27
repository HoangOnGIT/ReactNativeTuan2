//Bai 1
// let b1 = new Promise<void>((resolve) => {
//     setTimeout(
//         () => console.log("Hello Async")
//         , 2000)
// })


// b1.then(() => {}).catch(err => console.log(err)
// )

//B2

// let b2 = new Promise<number>((resolve) => {
//     return setTimeout(() => resolve(12), 1000);
// })

// b2.then(data => console.log(data)).catch((err) => console.log(err))

// //Bai 3
// let b3 = new Promise<string>((resolve, reject) => {
//     setTimeout(() => reject(new Error("Some thing went wrong")), 1000)
// })

// b3.then(data => console.log(data)).catch((err) => console.log(err))

// //bai 5
// function simulateTask(time: number) {
//     return new Promise<string>(resolve => {
//         setTimeout(() => resolve("task done"), time)
//     })
// }

// simulateTask(2000).then(data => console.log(data)).catch((err) => console.log(err));

// //bai 6
// const arr = [simulateTask(1000), simulateTask(1500), simulateTask(1250)]
// Promise.all(arr).then(values => console.log(values)).catch(err => console.log(err))

function simulateTaskPrintTime(time: number) {
    return new Promise<number>(resolve => {
        setTimeout(() => resolve(time), time)
    })
}

//bai 7 
const arrTime = [simulateTaskPrintTime(1000), simulateTaskPrintTime(1500), simulateTaskPrintTime(1250)]
Promise.race(arrTime).then(value => console.log(value)).catch(err => console.log(err))


const b8 = new Promise<number>(resolve => {
    setTimeout(() => resolve(2), 1000)
})
//bai 8 
b8.then(value => value * value)
    .then(value => value * 2)
    .then(value => value + 5)
    .then(value => console.log(value))
    .catch(err => console.log(err))

const b9 = new Promise<number[]>(resolve => {
    setTimeout(() => resolve([1,2,3,4,5,6,7].filter(num => num%2 ==0)), 1000)
})
//bai 9 + 10
b9.then(values => console.log(values))
    .catch(err => console.log(err))
    .finally(() => console.log("Done"))
