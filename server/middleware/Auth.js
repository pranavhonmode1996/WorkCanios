const jwt = require('jsonwebtoken');
const JWT_SEQRET = process.env.JSON_WEB_TOKEN_SEQRET;

const Auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        
        let decodedData;
        if(token) {
            decodedData = jwt.verify(token, JWT_SEQRET)
            next();
        } else {
            next();
        }
    } catch(error) {
         console.log(error);
    }
}

module.exports = Auth;