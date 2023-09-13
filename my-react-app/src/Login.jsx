import React, { useState } from 'react'
import './CSS/Courses.css'
const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        let obj = {name,email,password}
        localStorage.setItem("user",JSON.stringify(obj))
        alert("loggedIn successfully")

    }
    return (
        <div className='bg-white shadow-lg ml-20'>
            <div className=''>
                <form action="" className='flex flex-col w-[350px] h-[500px] gap-10'>
                    <div className='h-[50px] w-[90%] m-auto mt-3 rounded-xl'> <h2 className='font-extrabold text-3xl bg-gray-200 text-gray-500'>Login</h2></div>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className=' border-b-2 font-extrabold text-lg p-3' />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-b-2 font-extrabold text-lg p-3' />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='border-b-2 font-extrabold text-lg p-3' />
                    <div className='h-[50px] w-[200px] border flex justify-center m-auto rounded-lg cursor-pointer bg-red-200 '>
                        <button className='font-black text-xl ' onClick={handleSubmit}>Login</button>
                    </div>
                </form>
            </div>
           
        </div>
  
    )
}

export default Login