import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Carts from './components/Carts.jsx';
import Wishlist from './components/Wishlist.jsx';
import MainLayout from './layout/MainLayout.jsx';
import FoodDetails from './components/FoodDetails.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/foods.json')
      },
      {
        path: 'food/:id',
        element: <FoodDetails />,
        loader: async ({params}) => {
          const res = await fetch('/foods.json')
          const foods =await res.json()
          const food = foods.find((item) => item.id === parseInt(params.id))
          return food
        }
      },
      {
        path: "cart",
        element: <Carts />  
      },
      {
        path: "wishlist",
        element: <Wishlist />  
      }
    ]
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
