const User = require("../models/user-models");
const Contact = require("../models/contact-models.js");

const getAllUsers = async (req, res) => {
  try {
    const usersData = await User.find();

    if (!usersData || usersData.length === 0) {
      return res.status(404).json({ message: "No users found" }); // Return ensures no further code executes.
    }

    res.status(200).json(usersData); // Single response sent.
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contactData = await Contact.find();

    if (!contactData || contactData.length === 0) {
      return res.status(404).json({ message: "No contacts found" }); // Return ensures no further code executes.
    }

    res.status(200).json(contactData); // Single response sent.
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



const deleteUserById = async (req, res) => {

  try {
    const id = req.params.id
    await User.deleteOne({ _id: id })
    return res.status(200).json({ message: "user Deleted succcesfully" })

  } catch (error) {
    next(error )

  }

}


const getUserById = async (req, res) => {

  try {
    const id = req.params.id
   const data = await User.findOne({ _id: id },{password:0})
    return res.status(200).json( data )

  } catch (error) {
    next(error )

  }
}

const updateUserByid = async (req,res)=>{
  try {
    const id = req.params.id
    const updatedUserData  = req.body

   const updatedData =  await User.updateOne({_id:id},{$set:updatedUserData})
   return res.status(200).json({ message: "user updated succcesfully" })

  } catch (error) {
    next(error)
  }
   
}
const deleteContactsById = async (req, res) => {

  try {
    const id = req.params.id
    await Contact.deleteOne({ _id: id })
    return res.status(200).json({ message: "contact Deleted succcesfully" })

  } catch (error) {
    next(error )

  }
}




module.exports = { getAllUsers, getAllContacts, deleteUserById,getUserById ,updateUserByid,deleteContactsById};
