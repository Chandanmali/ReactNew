import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom';

function ErrorPage() {
    const err = useRouteError();
    console.log(err)
  return (
    <div className='flex flex-col justify-center items-center mt-36'>
      <h1 className='text-5xl font-bold mb-20'>OPPS! Something went wrong...</h1>
      <h1 className='text-4xl font-semibold mb-4'>{err.status} - {err.statusText}</h1>
      <h1 className='font-bold text-2xl'>{err.data}</h1>

      <div className='mt-13'>
        <Link to = {"/"}><button className='bg-gray-400 px-10 py-3 rounded-2xl cursor-pointer text-xl font-semibold shadow-2xl'>Back to Home Page</button></Link>
      </div>
    </div>

  )
}

export default ErrorPage
