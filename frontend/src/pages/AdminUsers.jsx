import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import axios from 'axios';
import { Link


 } from 'react-router-dom';
const AdminUsers = () => {

    const [users, setusers] = useState([])


    const { authorizationToken  } = useAuth(); // Adjust if useAuth returns the token directly.

    console.log("token from frontend", authorizationToken);


    const getAllUsersData = async () => {



        try {
            const response = await axios.get("http://localhost:5000/api/admin/users", {
                headers: {
                    Authorization: authorizationToken, // Add 'Bearer' if needed.
                },
            });

            console.log("User data:", response.data);
            setusers(response.data)

        } catch (error) {
            console.error("Failed to fetch user data:", error.message);
            // Optional: Log more details if needed.
            if (error.response) {
                console.error("Error details:", error.response.data);
            }
        };
    }

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/admin/users/delete/${id}`, {
                headers: {
                    Authorization: authorizationToken, // Add 'Bearer' if needed.
                },
            });

            console.log("User after deletion:", response.data);
            if(response.data){
                getAllUsersData()
            }

        } catch (error) {
            console.error("Failed to fetch user data:", error.message);
            if (error.response) {
                console.error("Error details:", error.response.data);
            }
        };

    }


    useEffect(() => {
        getAllUsersData();
    }, []); // Include token as a dependency if it can change.

    return (
        <>
            <section className="admin-users-section section-form">
                <div className="container">
                    <h1>Admin User Data</h1>
                </div>
                <div className="conatiner admin-users section-form">

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((curUser, index) => {
                                    return <tr key={index}>
                                        <td>{curUser.username}</td>
                                        <td>{curUser.email}</td>
                                        <td>{curUser.phone}</td>
                                        <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                                        <td><button onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>



                </div>
            </section>

        </>
    );
};

export default AdminUsers;
