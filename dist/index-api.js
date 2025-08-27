"use strict";
//bai 21 
Object.defineProperty(exports, "__esModule", { value: true });
async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const todos = await response.json();
        console.log(todos.filter(todo => todo.completed));
    }
    catch (error) {
        console.error('Failed to fetch todos:', error);
    }
}
getTodo();
