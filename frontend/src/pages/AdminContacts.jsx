import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import axios from 'axios';
import { Link
// import AdminContacts from './AdminContacts';


 } from 'react-router-dom';
import { toast } from 'react-toastify';
const AdminContacts = () => {

    const [contactData, setContactData] = useState([])


    const { authorizationToken } = useAuth(); // Adjust if useAuth returns the token directly.

    console.log("token from frontend", authorizationToken);


    const getAllUsersData = async () => {



        try {
            const response = await axios.get("http://localhost:5000/api/admin/contacts", {
                headers: {
                    Authorization: authorizationToken, // Add 'Bearer' if needed.
                },
            });

            console.log("contact data:", response.data);
            setContactData(response.data)

        } catch (error) {
            console.error("Failed to fetch contact data:", error.message);
            // Optional: Log more details if needed.
            if (error.response) {
                console.error("Error details:", error.response.data);
            }
        };
    }

    const deleteContact = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                headers: {
                    Authorization: authorizationToken, // Add 'Bearer' if needed.
                },
            });

            console.log("contacts after deletion:", response.data);
            if(response.data){
                getAllUsersData()
                toast.success("contact deleted succsessfully")
            }

        } catch (error) {
            console.error("Failed to fetch contacts data:", error.message);
            if (error.response) {
                console.error("Error details:", error.response.data);
            }
        };

    }


    useEffect(() => {
        getAllUsersData();
    }, []);
  return (
   
    <>
    
     <section className="admin-contacts-section">
      <h1>Admin Contact Data</h1>
      <div className="container admin-users">
        {contactData.map((curContactData,index)=>{
          const {_id,username,email,message} = curContactData

          return(
             <div key={index}>

              <h2>{username}</h2>
              <h2>{email}</h2>
              <h3>{message}</h3>
              <button className='btn' onClick={()=>{deleteContact(_id)}}>Delete</button>

             </div>
          )
        })}
      </div>
     </section>
    
    </>
  )
}

export default AdminContacts