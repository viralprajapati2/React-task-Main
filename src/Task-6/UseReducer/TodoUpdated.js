import React, { useReducer, useState } from 'react';
import '../UseReducer/TodoUpdated.css';

function reducer(todos, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return todos.concat(action.payload);
        case 'DELETE_TODO':
            return todos.filter(todo => todo.id !== action.payload);
        case 'TOGGLE_COMPLETE':
            return todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        case 'EDIT_TODO':
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, text: action.payload.text };
                }
                return todo;
            });
        default:
            return todos;
    }
}

function Todo() {
    const [state, dispatch] = useReducer(reducer, []);
    const [todo, setTodo] = useState('');
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState('');

    function submitHere(e) {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        };

        dispatch({ type: 'ADD_TODO', payload: newTodo });
        setTodo('');
    }

    function deleteTodo(id) {
        dispatch({ type: 'DELETE_TODO', payload: id });
    }

    function toggleComplete(id) {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
    }

    function editTodo() {
        dispatch({ type: 'EDIT_TODO', payload: { id: todoEditing, text: editingText } });
        setTodoEditing(null);
        setEditingText('');
    }

    return (
        <div>
            <div className='Todo'>
                <form onSubmit={submitHere}>
                    <input type="text" className='inpt' onChange={(e) => setTodo(e.target.value)} value={todo} />
                    <br />
                    <button type='submit' className='btn'>Add Task</button>
                </form>
                <br />
                {state.map((todo) => (
                    <div key={todo.id}>
                        {todoEditing === todo.id ? (
                            <input className='inpt' type="text"  defaultValue={todo.text} onChange={(e) => setEditingText(e.target.value)} />
                        ) : (
                            <div>{todo.text}</div>
                        )}
                        <input type="checkbox" onChange={() => toggleComplete(todo.id)}  checked={todo.completed} />
                        <button onClick={() => deleteTodo(todo.id)} className='dbtn'>Delete</button>
                        {todoEditing === todo.id ? (
                            <button onClick={editTodo} className='ubtn'>Update</button>
                        ) : (
                            <button onClick={() => setTodoEditing(todo.id)} className='ebtn'> Edit</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;
