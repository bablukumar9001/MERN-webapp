import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
// import default from './../../eslint.config';
import { useNavigate } from "react-router-dom"

export const UserUpate = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
    })

    const navigate = useNavigate()
    const params = useParams()

    const { authorizationToken } = useAuth()

    const baseUrl = import.meta.env.VITE_BASE_URL;


    // get a single user

    const getSingleUser = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/admin/users/${params.id}`, {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json()
            console.log("single user data",data);
            setUser(data)
            console.log("single user" , user.username);
            

        } catch (error) {
            console.log(error);
            

        }
    }
    useEffect(() => {
        getSingleUser()
    }, [])



    const handleInChange = (e) => {
        const { name, value } = e.target;

        setUser((prev) => ({ ...prev, [name]: value }));
    }

    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const responce = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
                body: JSON.stringify(user)
            })
            if(responce.ok){
                toast.success("updated successfully")
                navigate("/admin/users")
            }
             else{
                toast.error("not updated")
             }

        } catch (error) {
            console.log(error);

        }
    }


    return (
        <div>
            <h1>Update User Data</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="uername">
                    <b>Username</b>
                    <input type="text" name="username" id="username" value={user.username} onChange={handleInChange} />
                </label>
                <label htmlFor="Uername">
                    <b>Email</b>
                    <input type="text" name="email" id="email" value={user.email} onChange={handleInChange} />
                </label>
                <label htmlFor="Uername">
                    <b>Mobile</b>
                    <input type="text" name="phone"
                        id="phone" value={user.phone}
                        onChange={handleInChange}
                        className="phone" required />
                </label>
                <button type="subit">Update</button>
            </form>
        </div>
    )
}


export default  UserUpate