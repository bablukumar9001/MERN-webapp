import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { HiUsers } from "react-icons/hi2";
import { IoIosContacts } from "react-icons/io";
import { useAuth } from '../../store/auth';


const AdminLayout = () => {
    const  {user,isLoading} = useAuth()
    
    
    if(isLoading){
      return  <h1>....loading</h1>
    }

    if(!user.isAdmin){
    console.log("ghjhgjg",user.isAdmin);

       return <Navigate to= "/"/>
    }


    return (
        <>

            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users"><HiUsers /> Users</NavLink>
                            </li>
                            <li>   <NavLink to="/admin/contacts"><IoIosContacts/>Contact</NavLink>
                            </li>
                            {/* <li>   <NavLink to="/admin/users">Users</NavLink>
                            </li>
                            <li>   <NavLink to="/admin/users">Users</NavLink>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>


    )
}

export default AdminLayout