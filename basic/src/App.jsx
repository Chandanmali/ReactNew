import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './components/todo'


function App() {
  const [count, setCount] = useState(0)

  const Increase = () => {
    setCount(count + 1)
  }
  
  const Decrease = () => {
    setCount(count-1)
  }


  return (
    <>
      <div className='mt-10'>
        <h1 className='font-bold text-2xl text-center'>Hello this is my couter app!</h1>
      </div>
      <div className='flex justify-center mt-20 gap-20 text-2xl font-bold'>
        <button onClick={() => {setCount(count+1)}}className='border border-black px-5 py-2 rounded-xl cursor-pointer '>Increase</button>

        <button onClick={Decrease} className='border border-black px-5 py-2 rounded-xl cursor-pointer '>Decrease</button>
      </div>

      <div className='m-auto text-center mt-20 border border-black w-1/5 py-4 rounded-2xl '>
        <h1 className='font-bold text-xl'>{count}</h1>
      </div>

      <div>
        <Todo />
      </div>
    </>
  )
}

export default App
