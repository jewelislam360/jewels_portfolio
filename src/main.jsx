import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main.jsx';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      
    ]

    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='md:px-40 '>
    <RouterProvider router={router}/> 
    </div>
  </React.StrictMode>
)
