import jsonwebtoken from "jsonwebtoken"


const secret = process.env.SECRET;

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