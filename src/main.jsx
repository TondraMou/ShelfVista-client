import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import AuthProvider from './components/AuthProvider/AuthProvider'
import MainLayout from './components/MainLayout'
import AddBook from './pages/AddBook'
import AllBooks from './pages/AllBooks'
import UpdateBook from './pages/UpdateBook'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/add-book",
        element: <AddBook></AddBook>
      },
      {
        path: "/books",
        element: <AllBooks></AllBooks>
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook></UpdateBook>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}>
    </AuthProvider>
  </StrictMode>,
)