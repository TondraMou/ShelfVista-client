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
import PrivateRoute from './components/PrivateRoute/PrivateRoute'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/add-book",
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: "/books",
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
      },
      {
        path: "/update-book/:id",
        element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>
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
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: "/borrowed-books",
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
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