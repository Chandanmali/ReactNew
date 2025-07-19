import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Men from './components/Men'
import Women from './components/Women.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Profile from './components/Profile.jsx'
import Kids from './components/Kids.jsx'


const App = () => {

  const [theme, setTheme] = useState(true)
  const [product, setProduct] = useState([]);
  const [updatedProduct, setupdatedProduct] = useState([])
  
  const toggle = () => setTheme(!theme);

  const filterData = (searchText) => {
    const filter = product.filter((prev) => {
      return prev.brandname.toLowerCase().includes(searchText.toLowerCase())
    })
    setupdatedProduct(filter)
  }

  return(
    <div className={`${theme ? "bg-white" : "bg-black text-white"}`}>
      <div >
        <Navbar theme={theme} toggle={toggle} matchCard={filterData} />
         <Outlet context={{ theme, toggle, product, setProduct, updatedProduct, setupdatedProduct }} />
      </div>
    </div>
  )
}

const appRouter = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      
      {
        index: true,
        element: <Body />
          
      },
      
      {
        path: "/men",
        element: <Men />
      },
      
      {
        path: "/women",
        element: <Women />
      },
      
      {
        path: "/kids",
        element: <Kids />
      },
      
      {
        path: "/shoes/:productID",
        element: <ProductDetail />
      },
      
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  },
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {appRouter} />
  </StrictMode>,
)




// function App() {
  
//   const [theme, setTheme] = useState(true)
  
    
//     const toggle = () => setTheme(!theme);
    

//   return (
//     <>
//       <div className={`${theme ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen`}> 
//         {/* <Navbar theme = {theme} toggle = {toggle}/>
//         <Outlet /> */}
//         <Layout theme = {theme} toggle = {toggle} />
//       </div>
//     </>
//   )
// }

// export default App
