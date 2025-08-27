//bai 21 



// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// //bai 22
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// fetch("https://jsonplaceholder.typicode.com/todos/3")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//Bai 3:
interface Todo {
    userId: string,
    id: number,
    title: string,
    completed: boolean
}
async function getTodo(): Promise<void> {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const todos: Todo[] = await response.json();
    console.log(todos.filter(todo => todo.completed));

  } catch (error) {
    console.error('Failed to fetch todos:', error);
  }
}

getTodo()
