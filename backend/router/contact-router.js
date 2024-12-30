const express = require("express")
const router  = express.Router()
const contactForm = require("../controllers/contact-controller")

router.route('/DEMO').get((req,res)=>{
    res.send("ROUTE IS WORKING")
     
})

router.route('/contactform').post(contactForm)




module.exports = router