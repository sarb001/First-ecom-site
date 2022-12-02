import express from 'express';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../util.js';

const userRouter = express.Router();

// way of Checking Login here 

userRouter.post('/login', expressAsyncHandler(async (req,res) => {

    const user = await User.findOne({email : req.body.email});      // db email 
    if(user) 
    {
         if(bcrypt.compareSync(req.body.password , user.password))   // db pass vs inserted pass
         {
            res.send({
                _id : user._id,
                name : user.name,
                email : user.email,
                isAdmin : user.isAdmin,
                token : generateToken(user)
            });
            return;
         }
    }
    res.status(401).send({message : ' Ivalid Email or Password '})
}));

export default userRouter;