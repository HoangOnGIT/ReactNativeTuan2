let p = new Promise<string>((resolve) => {
    setTimeout(
        () => console.log("Hello Async")
        , 2000)
})

p.then(() => {}).catch(err => console.log(err)
)


