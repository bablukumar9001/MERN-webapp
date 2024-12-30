const express = require("express")
// import { adminMiddleware } from './../middleware/admin-middleware';
const admincontroller = require("../controllers/admin-controller")
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware")
const adminMiddleware = require("../middleware/admin-middleware")



router.route("/users").get(authMiddleware,adminMiddleware, admincontroller.getAllUsers)
router.route("/contacts").get(authMiddleware,adminMiddleware,admincontroller.getAllContacts)
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,admincontroller.deleteUserById) // delete single user by id 
router.route("/users/:id").get(authMiddleware,adminMiddleware, admincontroller.getUserById)   // show single user data by id
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware, admincontroller.updateUserByid)   // update single user data by id

router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,admincontroller.deleteContactsById) // delete single contact by id 



module.exports  = router