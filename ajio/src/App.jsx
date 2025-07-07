import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Body from './components/Body'
import FilterSection from './components/FilterSection'


function App() {
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState(true)
  
    const toggle = () => {
      if(theme == true)
      {
        setTheme(false)
      }
      else
      {
        setTheme(true)
      }
    }

  return (
    <>
      <div className={`${theme ? "bg-white" : "bg-black text-white"}`}>
        <Navbar theme = {theme} toggle = {toggle} />
        <Body theme = {theme} toggle = {toggle}/>
      </div>
    </>
  )
}

export default App
