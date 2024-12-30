import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Error from './pages/Error'
import { Navbar } from './components/Navbar/Navbar';
import Footer from './components/footer/Footer'
import AdminLayout from './components/layouts/AdminLayout'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import UserUpate from './pages/UserUpdate'


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/service' element={<Services />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Error />} />
          <Route path='/admin' element={<AdminLayout />} >

            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="/admin/users/:id/edit" element={<UserUpate/>} />


            {/* path : `/admin/users/:id/edit`,
            element:<UserupDate /> */}


          </Route>
        </Routes>

        <Footer />

      </BrowserRouter >
    </>
  )
}

export default App