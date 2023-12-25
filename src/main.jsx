import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {
  QueryClient,  QueryClientProvider
} from '@tanstack/react-query'
import routes from './Routes/routes.jsx'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <QueryClientProvider client={queryClient}>
    <Toaster />
   <RouterProvider router={routes}></RouterProvider>
   </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>,
)
