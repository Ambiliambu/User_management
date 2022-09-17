const express= require('express');
const { registerUser ,authUser,register} = require('../controllers/userController');
const router= express.Router();

router.route("/").post(registerUser)
router.route('/login').post(authUser)
router.get('/',register)


module.exports=router;