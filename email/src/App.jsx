import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/shared/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#f8fafd] h-screen w-screen overflow-hidden'>
        <Navbar />
        <Sidebar />

      </div>
    </>
  )
}

export default App
