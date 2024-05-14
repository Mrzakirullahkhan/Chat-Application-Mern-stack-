import { User } from "../models/userModel.js";
// passwrod ko hash banane k liye 
import bcrypt from "bcryptjs"
// for new user registration 
import jwt from "jsonwebtoken"

export const registure = async(req,res)=>{
    try {
        const {fullName, username, password, conformPassword, gender}= req.body;
        if(!fullName || !username || !password || !conformPassword || !gender){
            return res.status(400).json({message:"All fields are required"})
        }
        if(password!==conformPassword){
            return res.status(400).json({message:"password do not match"})

        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message:"this user name already exist"})
        }

        const hashedPassword = await bcrypt.hash(password,10)
        // profile photo
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username ${username}`
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username ${username}`
        await User.create({
            fullName,
            username,
            password:hashedPassword,
            profilePhoto:gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender

        })
        return res.status(200).json({
            message:"account created successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}


//  for login user 
export const login = async(req,res)=>{
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({
                message:"incorrect username or password",
                success:false
            })
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"incorrect username or password",
                success:false
            })
        };
        const tokenData={
            userId:user._id
        };
        const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY, {expiresIn:'1d'})
        return res.status(200).cookie("mytoken", token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
            _id:user._id,
            username:user.username,
            fullName:user.fullName,
            profilePhoto:user.profilePhoto
        })
    } catch (error) {
        console.log(error)
    }
}