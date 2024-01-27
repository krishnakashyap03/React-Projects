import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, About, Contact, User, Github} from './components/Index.js'
import { GetloaderInfo } from './components/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, {
//         path: "About",
//         element: <About />
//       }, {
//         path: "Contact-us",
//         element: <Contact />
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route path="" element={<Home />} />
    <Route path="About" element={<About />} />
    <Route path="Contact-us" element={<Contact />} />
    <Route path="User/:userID" element={<User />} />
    <Route loader={ GetloaderInfo }
    path="Github" 
    element={<Github />} />
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
