const express= require('express');
const { registerAdmin ,authAdmin} = require('../controllers/adminController');
const {getAllUsers ,deleteUser ,getUser ,updateUser,addUser}=require('../controllers/userController')

const router= express.Router();

// router.route("/").post(registerAdmin)
// router.post('/',registerAdmin)

router.route('/adminlogin').post(authAdmin)
router.route("/users").get(getAllUsers)
router.route("/deleteuser").delete(deleteUser)
router.route("/edituser/:userId").get(getUser)
router.route("/edituser/:userId").patch(updateUser) 

router.route('/adduser').post(addUser)

// router.get('/',register)


module.exports=router;