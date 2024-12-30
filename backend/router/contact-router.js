const express = require("express")
const router  = express.Router()
const contactForm = require("../controllers/contact-controller")

router.route('/contactform').get((req,res)=>{
    res.send("this is contact form ")
     
})

router.route('/contactform').post(contactForm)




module.exports = router