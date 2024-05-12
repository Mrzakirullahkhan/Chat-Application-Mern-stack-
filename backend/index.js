import express from "express" 
//  env file ko run krne k liye 
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js"
dotenv.config({})


const app = express();


// middleware
app.use(express.json())

// routes
app.use("/api/v1/user",userRoute)

const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is listen at port ${PORT}`)
})