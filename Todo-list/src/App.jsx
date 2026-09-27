import { useState , useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    const todostring = localStorage.getItem("todos")
    if(todostring){
    let todos = JSON.parse(todostring)
    settodos(todos)
    }
  }, [])
  useEffect(() => {
    if(todos.length>0){
  localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos])

  const handleEdit=(id)=>{
    let t = todos.find(i=>i.id===id)
    
    if(t.isCompleted){
      confirm("Task Completed")
      return
    }
    settodo(t.todo)
    setIsEditing(true);
    setEditId(id);
  }

  const handleDelete=(id)=>{
    let index = todos.findIndex(item=>{
      return item.id===id;
      
    })
    let newTodos=todos.filter(item=>{
      return item.id!==id
    });
    settodos(newTodos)
  }

  const handleAdd=()=>{
    if (todo.trim() === "") return;

  if (isEditing) {
    const newTodos = todos.map(item => {
      if (item.id === editId) {
        return {
          ...item,
          todo: todo
        };
      }

      return item;
    });

    settodos(newTodos);
    setIsEditing(false);
    setEditId(null);
  } else {
    settodos([
      ...todos,
      {
        id: uuidv4(),
        todo,
        isCompleted: false
      }
    ]);
  }

  settodo("");
}
  

  const handleChange=(e)=>{
    settodo(e.target.value)
  }

  const handleCheckbox=(e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos)
  }
  
  return (
    <>
      <Navbar />
      <div className="container max-w-5xl mx-auto rounded-lg bg-violet-300 min-h-[80vh] p-5 my-5 ">
        <div className="addtodo my-5">
          <h1 className='text-2xl font-bold'>Add a Todo</h1>
          <input onChange={handleChange} value={todo} type="text" className='bg-amber-100 rounded-lg w-80 text-black'  />
          <button onClick={handleAdd} className='bg-blue-400 rounded-md p-1 py-1 font-bold text-amber-200 mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length===0 && <div className='text-gray-500'>No Todos to display</div>}
          {todos.map(item=>{
          return <div key={item.id} className="todo flex w-1/2 justify-between my-3">
            <div className='flex gap-5'>
            <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="buttons">
            <button onClick={()=>{
              handleEdit(item.id)}} 
              className='bg-blue-400 rounded-md p-1 py-1 font-bold text-amber-200 mx-2' >Edit</button>
            <button onClick={()=>{
              if (confirm("Are you sure you want to delete ?")){
                handleDelete(item.id)
                }}} 
                className='bg-blue-400 rounded-md p-1 py-1 font-bold text-amber-200 mx-2'>Delete</button>
            </div>
          </div>
        })}
      </div>
      </div>
    </>
  )
}

export default App
