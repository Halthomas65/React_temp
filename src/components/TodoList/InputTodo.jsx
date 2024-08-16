import React, { useState } from 'react';


const InputTodo = ({ todos, setTodos }) => {
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, done: false }]);
            setInput('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
};

export default InputTodo