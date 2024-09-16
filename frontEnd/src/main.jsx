import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ktm from './Ktm.jsx'
import Kawa from './Kawa.jsx'
import Airoh from './Airoh.jsx'
import Fox from './Fox.jsx'
import Ufo from './Ufo.jsx'
import Alp from './Alp.jsx'

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/ktm",
    element:  <Ktm></Ktm>
  },
  {
    path: "/kawasaki",
    element: <Kawa></Kawa>
  },
  {
    path: "/airoh",
    element: <Airoh></Airoh>
  },
  {
    path: "/fox",
    element: <Fox></Fox>
  },
  {
    path: "/ufo",
    element: <Ufo></Ufo>
  },
  {
    path: "/alpinestar",
    element: <Alp></Alp>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
