import React from 'react'
import {useState, useEffect} from 'react'
import InputTodo from './TodoList/InputTodo';
import Todo from './TodoList/Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([ 
        {id: 1, text: "Learn React", done: false},
        {id: 2, text: "Build a Todo App", done: false},
    ]);

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const markTodoAsDone = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        }));
    }

    const editTodo = (id, text) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.text = text;
            }
            return todo;
        }));
    }

    return (
        <div>
            <InputTodo todos={todos} setTodos={setTodos}/>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodo={deleteTodo} 
                    markTodoAsDone={markTodoAsDone} 
                    editTodo={editTodo} 
                />
            ))}
        </div>
    )

}