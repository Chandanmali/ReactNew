import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)

    }



    return (
        <>

            <form action="" onSubmit={submitHandler}>

                <div className='flex flex-col w-[35rem] bg-gray-300 justify-center items-center mx-auto mt-24 rounded-xl py-10 gap-7 shadow-xl'>

                    <input value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className='border w-[28rem] px-7 rounded-md py-1'
                        type="text"
                        placeholder='Enter your mail'
                    />

                    <input value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        className='border w-[28rem] px-7 rounded-md py-1'
                        type="password"
                        name=""
                        id=""
                        placeholder='Enter your password'
                    />

                    <button className='bg-blue-600 px-50 rounded-md py-1 font-bold text-white text-xl cursor-pointer'>Login</button>

                </div>

            </form>

        </>
    )
}

export default Login
