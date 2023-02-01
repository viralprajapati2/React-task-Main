import React, { useState } from 'react';
import './MainFile.css';

function MainFile() {

    //using Usestate
    const[newItem, setNewItem] = useState("");
    const[items, setItems] = useState([]);


    //Helper functions additem
    function addItem() {

        if(!newItem){
            alert("Please add an item then press Add");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        };

        setItems(oldList => [...oldList, item]);
        setNewItem("");
    }

    function deleteItem(id) {
        const newArray = items.filter(item => item.id != id);
        setItems(newArray);  
    }

    return (
        <>
            {/* 1.Header */}
            <h1 className='container'>Todo List App</h1>

            {/* 2. Input elements button  */}
            <input type="text" placeholder='Add an item..' value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button onClick={() => addItem() }>Add</button>

            {/* 3.List of items (unordered list with list items) */}
            <ul>
                {items.map(item => {
                    return(
                        <li key={item.id}>{item.value} <button className='delete-button' onClick={() => deleteItem(item.id)}>❌</button></li>
                    )
                })}
            </ul>

        </>
    )
}

export default MainFile;
