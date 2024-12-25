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
import Home from './pages/Home'
import Books from './components/Books'
import Login from './pages/Login'
import Register from './pages/Register'
import Details from './pages/Details'
import BorrowedBooks from './pages/BorrowedBooks'



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
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/books/:category",
        element: <Books></Books>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/book-details/:id",
        element: <Details></Details>
      },
      {
        path: "/borrowed-books",
        element: <BorrowedBooks></BorrowedBooks>
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