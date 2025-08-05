import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/shared/Navbar'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Inbox from './components/Inbox'
import DashBoard from './components/DashBoard'
import Mail from './components/Mail'
import { MessageProvider } from './utils/MessageContext'
import SendEmail from './components/SendEmail'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
    children: [
      {
        path: '/',
        element: <Inbox />
      },

      {
        path: '/mail/:id',
        element: <Mail />
      }
    ]
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <MessageProvider>

      <div className='bg-[#f8fafd] h-screen w-screen overflow-hidden'>
        <Navbar />
        <RouterProvider router={appRouter} />
        <div className='absolute w-[30%] bottom-0 right-20 z-10'>
          <SendEmail />
        </div>
      </div>
    </MessageProvider>
  )
}

export default App
