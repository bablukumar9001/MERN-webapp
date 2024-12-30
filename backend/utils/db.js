
const  mongoose = require('mongoose');

//Set up default mongoose connection

// const  URI = 'mongodb://127.0.0.1/MERN-admin';

// const  URI = 'mongodb+srv://bk559722:bk123433@mern-admin.8l48w.mongodb.net/MERN_admin?retryWrites=true&w=majority&appName=MERN-admin'


const  URI = process.env.MONGOURI


const connectDB = async ()=>{
    try {
      await mongoose.connect(URI)
      console.log("database connection is successfull")
        
    } catch (error) {
        console.log("database connection failed",error)
        process.exit(0)
        
    }
}

module.exports = connectDB