import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeTodo} from '../app/features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector((state)=>state.todos.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div>
        Todos
    </div>
        {todos.map((todo)=>(
            <li
            className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
            key={todo.id}>
            <div className='text-white'>{todo.text}</div>
            <button
            onClick={()=>dispatch(removeTodo(todo.id))}
            className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            </li>
        ))}
    
    </>
    
)
}
  


export default Todos
