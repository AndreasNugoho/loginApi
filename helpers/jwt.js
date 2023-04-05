var jwt = require("jsonwebtoken");
const SECRET_KEY = "rahasia"

const generateToken = (payload) => {
    return jwt.sign(payload,SECRET_KEY)
}

const compareToken  = (token) => {
    return jwt.verify(token,SECRET_KEY)
}

module.exports = {
    generateToken,
    compareToken, 
}   