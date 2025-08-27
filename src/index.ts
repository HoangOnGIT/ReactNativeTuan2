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

let b3 = new Promise<string>((resolve, reject) => {
    setTimeout(() => reject(new Error("Some thing went wrong")), 1000)
})

b3.then(data => console.log(data)).catch((err) => console.log(err))


function simulateTask(time: number) {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve("task done"), time)
    })
}

simulateTask(2000).then(data => console.log(data)).catch((err) => console.log(err));

const arr = [simulateTask(1000), simulateTask(1500), simulateTask(1250)]


Promise.all(arr).then(values => console.log(values)).catch(err => console.log(err)
)