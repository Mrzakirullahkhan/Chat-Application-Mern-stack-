import { User } from "../models/userModel.js";
// passwrod ko hash banane k liye 
import bcrypt from "bcryptjs"
// for new user registration 

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
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username${username}`
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username${username}`
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