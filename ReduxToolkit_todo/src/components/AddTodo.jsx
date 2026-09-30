import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../app/features/todo/todoSlice";

function AddTodo() {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    const addTodohandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return(
        <form onSubmit={addTodohandler} className='space-x-3 mt-12'>
            <input
            type="text"
            placeholder="Enter a todo..."
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 
            focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            >
            Add Todo
            </button>
        </form>
    )
}