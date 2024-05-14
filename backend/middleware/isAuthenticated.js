//  me yaha user k andr cookies k ander apna token leke aunga 

const isAuthenticated = async(req,res, next)=>{
    try {
    const token = req.cookies.mytoken;
    console.log(token)
    next();
    } catch (error) {
        console.log(error)
    }
}

export default isAuthenticated;