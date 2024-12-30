const express = require("express")
const router  = express.Router()
// const {home ,register}  =  require("../controllers/auth-controller")
const authcontroller =  require("../controllers/auth-controller")
const {signupSchema,loginSchema} = require("../validators/auth-validator")
const validate = require("../middleware/validate-middleware")
const authMiddleware = require("../middleware/authMiddleware")



// router.route("/home").get(authcontroller.home)
router.route("/register").post (validate(signupSchema), authcontroller.register)
router.route("/login").post(validate(loginSchema),authcontroller.login)
router.route("/user").get(authMiddleware, authcontroller.user)



module.exports=router