
import jwt from "jsonwebtoken";

const tokenVerify = (req, res, next) => {
    const authtoken = req.headers['authorization'];
    if(!authtoken) {
       return res.status(401).json({
            message: "Unauthorized",
        })
    }
    
    const token = authtoken.split(" ")[1];

    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    }catch (error) {
       return res.status(401).json({ message: "Token inválido ou expirado" });
    }
 
         
}


export default tokenVerify;