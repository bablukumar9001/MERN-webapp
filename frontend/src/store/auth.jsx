import { createContext, useContext, useEffect, useState } from "react";
import Services from './../pages/Services';

export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [user, setUser] = useState("")
  const [services, setServices] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  


  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);


  };

  let isLoggedIn = !!token

  // tackling the logout functionality

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token")

  } 


  const authorizationToken = `Bearer ${token}`
  console.log("zccs",authorizationToken);


  // JWT authentication
  const userAuthentication = async () => {

    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      })

      if (response.ok) {
        const data = await response.json()
        console.log("user data ", data);
        setUser(data.userData)
        setIsLoading(false)

      }
      else{
        setIsLoading(false)

        console.log("fetching errors while user data");
        
      }

    } catch (error) {
      console.error("error fetching user data")

    }

  }

  // get service data

  const getServiceData = async () => {

    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET"
      })
      if (response.ok) {
        const service = await response.json()
        setServices(service.data)
        console.log("service from auth", service)
      }
      

    } catch (error) {
      console.log(error);


    }

  }





  useEffect(() => {
    getServiceData()
    userAuthentication()
  }, [])


  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services , authorizationToken ,isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};