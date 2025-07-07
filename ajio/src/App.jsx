import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Body from './components/Body'
import FilterSection from './components/FilterSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        
        <Body />
      </div>
    </>
  )
}

export default App
