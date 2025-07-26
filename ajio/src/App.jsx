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
import ThemeContext, { ThemeProvider } from './utils/themeContext.jsx'
import { useContext } from 'react'
import Cart from './components/Cart.jsx'
import {Provider} from "react-redux"
import appStore from './store/Store.jsx'
import Login from './components/Login.jsx'


const App = () => {
  const { theme, toggle, product, setProduct, updatedProduct, setupdatedProduct, filterData } = useContext(ThemeContext)

  //const [theme, setTheme] = useState(true)
  // const [product, setProduct] = useState([]);
  // const [updatedProduct, setupdatedProduct] = useState([])
  
  //const toggle = () => setTheme(!theme);

  // const filterData = (searchText) => {
  //   const filter = product.filter((prev) => {
  //     return prev.brandname.toLowerCase().includes(searchText.toLowerCase())
  //   })
  //   setupdatedProduct(filter)
  // }

  return(
    <Provider store={appStore}>
      <div className={`${theme ? "bg-white" : "bg-black text-white "} min-h-screen`}>
      <div >
        <Navbar />
        <Outlet />
      </div>
    </div>


    </Provider>
    
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
      },
      
      {
        path: "/cart",
        element: <Cart />
      },
      
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router = {appRouter} />
    </ThemeProvider>
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
