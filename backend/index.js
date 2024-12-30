require("dotenv").config()
const express = require ('express')
const cors = require ('cors')
const app = express()
const authroute= require("./router/auth-router.js")
const contactroute =require("./router/contact-router")
const serviceroute =require("./router/service-router.js")
const adminroute = require("./router/admin-router.js")
const connectDB = require("./utils/db.js")
const errorMiddleware = require("./middleware/error-middleware.js")


const corsOptions = {
    origin: "http://localhost:5174",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
  
  app.use(cors(corsOptions));


app.use(express.json());
app.use("/api/auth",authroute)
app.use("/api/contact",contactroute)
app.use("/api/data",serviceroute)
app.use("/api/admin",adminroute)

app.get("/",(req,res)=>{
    res.status(200).send("Welocoome to the MERN projects 2024")
})
// app.get("/register",(req,res)=>{
//     res.status(200).send("Welocoome to the register page of this project")
// })

app.use(errorMiddleware)

const port = 5000
connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(  `server is running on the port no ${port}`)
   })
})

