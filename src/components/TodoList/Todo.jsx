import React from 'react'
import './Todo.css'

const Todo = ({ todo, deleteTodo, markTodoAsDone, editTodo }) => {
    const handleEdit = () => {
        const newText = prompt('Edit todo:', todo.text);
        if (newText) {
            editTodo(todo.id, newText);
        }
    };

    return (
        <div>
            <span className={todo.done ? 'done' : ''}>
                - {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>x</button>
            <button onClick={() => markTodoAsDone(todo.id)}>
                {todo.done ? 'Undo' : 'Done'}
            </button>
            <button onClick={handleEdit}>e</button>
        </div>
    );
};

export default Todo