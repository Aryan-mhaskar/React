import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Aryan")
  const [form, setForm] = useState({name:"",email:""})

  const handleClick=()=>{
    alert("I am clicked")
  }
  const handlehover=()=>{
    alert("I am hovered")
  }
  const handlechange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  useEffect(() => {
  console.log(form);
}, [form]);

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Cick me</button>
      </div>
      <div className="hover" onMouseOver={handlehover}>
        I am hover div
      </div>
      <input type="text" name='name' value={form.name} onChange={handlechange} />
      <input type="text" name='email' value={form.email} onChange={handlechange} />
    </>
  )
}

export default App
