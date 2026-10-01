import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    removeTodo,
    updateTodo
} from '../app/features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()

    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleUpdate = (todo) => {
        setEditId(todo.id)
        setEditText(todo.text)
    }

    const saveUpdate = (id) => {
        if (editText.trim() !== '') {
            dispatch(
                updateTodo({
                    id: id,
                    text: editText
                })
            )

            setEditId(null)
            setEditText('')
        }
    }

    return (
        <>
            <div>
                Todos
            </div>

            {todos.map((todo) => (
                <li
                    className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                    key={todo.id}
                >

                    {editId === todo.id ? (
                        // Input while editing
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="text-white px-2 py-1 rounded"
                        />
                    ) : (
                        // Normal text
                        <div className="text-white">
                            {todo.text}
                        </div>
                    )}

                    <div className="flex gap-2">

                        {/* Delete */}
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 rounded text-md"
                        >
                            Delete
                        </button>

                        {/* Update / Save */}
                        {editId === todo.id ? (
                            <button
                                onClick={() => saveUpdate(todo.id)}
                                className="text-white bg-green-500 border-0 py-1 px-4 hover:bg-green-600 rounded text-md"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={() => handleUpdate(todo)}
                                className="text-white bg-blue-500 border-0 py-1 px-4 hover:bg-blue-600 rounded text-md"
                            >
                                Update
                            </button>
                        )}

                    </div>
                </li>
            ))}
        </>
    )
}

export default Todos