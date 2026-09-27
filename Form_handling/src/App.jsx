import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors,isSubmitting },
  } = useForm()

  const delay=(d)=>{
    return new Promise((res,rej)=>{
      setTimeout(() => {
        res()
      }, d*1000);
    })
  }

  
  const onSubmit= async(data)=>{
    //await delay(2) //simulating network delay
    let r=await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(data),headers: {
      "Content-Type": "application/json"
    }})
    let res = await r.text()
    console.log(data,res)
    if(data.username!=="aryan"){
      setError("myform",{message:"Invalid username"})
    }
    
  }
  return (
    <>
    {isSubmitting && <div>loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", {required:{value:true, message:"This feild is required"}, minLength:{value:3, message:"Min length is 3"}, maxLength:{value:10, message:"Max length is 10"}})} type="text" />
          {errors.username && <div>{errors.username.message}</div>}
          <br/>

          <input placeholder='password' {...register("password",{required:{value:true, message:"This feild is required"}, minLength:{value:3, message:"Min length is 3"}})} type="password" />
          {errors.password && <div>{errors.password.message}</div>}
          <br/>
          <input disabled={isSubmitting} type="submit" name='submit' id=''/>
          <br/>
          {errors.myform && <div>{errors.myform.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
