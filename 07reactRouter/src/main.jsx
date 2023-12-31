import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contactus from './components/Contact/Contactus.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contactus",
//         element:<Contactus/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path ="/" element={<Layout></Layout>}>
        <Route path="" element={<Home></Home>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contactus" element={<Contactus/>}/>
        <Route path="contactus" element={<Contactus/>}/>
        <Route path="user/:userId" element={<User/>}/>
        <Route path="github" element={<Github/>}/>
      </Route>    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
