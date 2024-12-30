

 const adminMiddleware = async ( req,res,next) =>{
     
    try {

        const adminRole = req.user.isAdmin
        // console.log("admin middleware",adminRole)
        // res.status(200).json({message:adminRole})

        if(!adminRole){
             res.status(403).json({message:"Access Denied, user not an admin "})
        }
        

        next()

    } catch (error) {
        next(error)
        
    }
}

module.exports = adminMiddleware