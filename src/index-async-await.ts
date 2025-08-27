//Bai 11

async function promisePrintHelloAsync() : Promise<void> {
    await new Promise<string>((resolve) => {
        setTimeout(() => console.log("Hello Async")
            , 1000)
    })
}

promisePrintHelloAsync()

//Bai 12

function simulateTask(time: number): Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve("task done"), time)
    })
}

async function callSimulate(time: number): Promise<void> {
    const stringPr = await simulateTask(time);
    console.log(stringPr);
}
callSimulate(1000)

//Bai 13

let b3 = new Promise<string>((resolve, reject) => {
    setTimeout(() => reject(new Error("Some thing went wrong")), 1000)
})

async function callB3() {
    try { await b3; }
    catch (err) {
        console.log(err);
    }
}

callB3()

//bai 14

async function bai14(num: number) : Promise<number> {
    num = await new Promise<number>((resolve) =>
        setTimeout(() => resolve(num * 3), 1000)
    )

    return num
}

bai14(2).then(num => console.log(num)
)

//bai 16
async function asyncFunc1(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve('Result 1'), 1000));
}

async function asyncFunc2(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve('Result 2'), 1500));
}

async function callInParallel() : Promise<void> {
  const results = await Promise.all([asyncFunc1(), asyncFunc2()]);
  console.log(results); 
}

callInParallel();


//bai 17


async function iteratePromises() {
  const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
  
  for await (const result of promises) {
    console.log(result);
  }
}

iteratePromises();

//bai 18 

interface User {
    id: number,
    name: string
}

async function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id : id, name: `User${id}` });
    }, 1000);
  });
}



//bai 19 
async function fetchUsers(ids : number[]) : Promise<User[]> {
  const userPromises: Promise<User>[] = ids.map(id => fetchUser(id));
  const users = await Promise.all(userPromises);
  return users;
}

fetchUsers([1, 2, 3]).then(console.log);






