const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { number } = require("zod")

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

})




// hash password

userSchema.pre("save", async function (next) {
    //  console.log("this",this)

    const user = this

    if (!user.isModified("password")) {
        next()
    }
    try {
        const saltRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password, saltRound)

        user.password = hash_password


    } catch (error) {
        next(error)

    }


    

})




//compare password 


userSchema.methods.comparePasswords = async function (password) {

    return bcrypt.compare(password, this.password)

    
}

//  jwt token


userSchema.methods.generateToken = async function () {
    try {

        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "5d"
            }
        )


    } catch (error) {

        console.log(error)
    }
}





const User = new mongoose.model("User", userSchema)
module.exports = User