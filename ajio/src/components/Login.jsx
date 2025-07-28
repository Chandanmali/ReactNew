import React, { useState } from 'react'
import { z } from "zod"

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'password at least 6 letters')
})



function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState({})

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const result = loginSchema.safeParse(formData);
        //console.log("Validation Result:", result);

        if (!result.success) {
            //console.log("Validation failed");
            //console.log("Zod error:", result.error.errors);

            const errorField = result?.error.format();
            //const newerrorField = errorField.fieldErrors;
            //console.log("Formatted fieldErrors:", errorField);

            //setError(newerrorField)
            setError(errorField)
            return;
        }
        // console.log(formData.email)
        // console.log(formData.password)
        console.log(formData)
    }
    console.log(error)

    return (
        <>

            <form action="" onSubmit={submitHandler}>

                <div className='flex flex-col w-[35rem] bg-gray-300 justify-center items-center mx-auto mt-24 rounded-xl py-10 gap-7 shadow-xl'>

                    <input value={formData.email}
                        name='email'
                        onChange={changeHandler}
                        className='border w-[28rem] px-7 rounded-md py-1'
                        type="text"
                        placeholder='Enter your mail'
                    />
                    {
                        error.email && <span className='text-red-500'>{error && error?.email?._errors}</span>
                    }

                    <input value={formData.password}
                        name='password'
                        onChange={changeHandler}
                        className='border w-[28rem] px-7 rounded-md py-1'
                        type="password"
                        id=""
                        placeholder='Enter your password'
                    />
                    {
                        error.password && <span className='text-red-500'>{error && error?.password?._errors}</span>
                    }

                    <button className='bg-blue-600 px-50 rounded-md py-1 font-bold text-white text-xl cursor-pointer'>Login</button>

                </div>

            </form>

        </>
    )
}

export default Login
