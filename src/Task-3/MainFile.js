import React from 'react';
import { useState } from 'react';
import "./MainFile.css";

function Todo() {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")
    const [todoEditing, setTodoEditing] = useState('')
    const [editingText, setEditingText] = useState("")

    function submitHere(e) {
        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        }
        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

    function deleteTodo(id) {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id)

        setTodos(updatedTodos)
    }

    function toggleComplete(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    function editTodo(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText
            }
            return todo
        })
        setTodos(updatedTodos)
        setTodoEditing(null)
        setEditingText("")
    }

    return (
        <div>
            <div className='Todo'>
                <form onSubmit={submitHere}>
                    <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
                    <br />
                    <br />
                    <button  type='submit'>Add Task</button>
                </form>
                {todos.map((todo) => <div key={todo.id}>

                    {todoEditing === todo.id ? (<input className='inpt' type="text" Value={todo.text} onChange={(e) => setEditingText(e.target.value)} />) : (<div>{todo.text}</div>)}
                    <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed} />
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <br />
                    {todoEditing === todo.id ? (<button onClick={() => editTodo(todo.id)}>Update</button>) :
                        (<button onClick={() => setTodoEditing(todo.id)}> Edit</button>)}
                </div>)}
            </div>
        </div>
    )
}

export default Todo;