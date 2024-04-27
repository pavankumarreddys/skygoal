import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

//protected route token base 
export const requireSignIn = async(req,res,next) =>{
    try{
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
    req.user = decode
    next()
    }catch (error){
        console.log("jwt",error)
    }
}

