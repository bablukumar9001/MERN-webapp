import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../store/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",

  })
  const navigate = useNavigate()

  const { storeTokenInLS } = useAuth();


  const handleInput = (e) => {

    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name]: value

    })

    
  }

  const baseUrl = import.meta.env.VITE_BASE_URL;


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)



    try {
      const response = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log("response data: ", data);

      if (response.ok) {
        toast.success("Login successful");

        const token = data.tokenn;
        console.log(token);
        

        storeTokenInLS(token);

        setUser({ email: "", password: "" });
        navigate("/")
        console.log(data);
      } else {
        // console.log("Error inside response", "error");
        toast.error(data.extraDetails ? data.extraDetails : data.message)
      }
    } catch (error) {
      console.error("Error", error);
    }


  }



  return (


    <>

      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>

  )
}

export default Login