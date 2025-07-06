import jsonwebtoken from "jsonwebtoken"


const secret = "4a7a61d68f12e791561e628f5e99077426204d6a15663e25c5227520951b4ff27b7a9cb8dc5d80c5c6fa5587b059acb835d08085";

function auth(req, res, next) {
    
    const {email, senha} = req.body;

    if(!email || !senha) {
        return res.json({
            email: false,
            senha: false,
            status: false,  
        })
    }
    
    const token = jsonwebtoken.sign({useremail: email}, secret, {expiresIn: "30m"})
    req.token = token;
    next()
}

export default auth;