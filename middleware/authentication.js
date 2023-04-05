const {compareToken} = require('../helpers/jwt')
const data = require('../users.json')

const authentication = (req, res, next) => {
    try {
        const authHeader = req.headers.token;
        if (!authHeader) {
            throw {
                code: 401,
                message: "Access token is required"
            }
        }
        const auth = compareToken(authHeader)

        if (auth.username === data[0].username) {
            return next()
        }
    } catch (error) {
        res.status(error?.code || 500).json(error);
        console.log(error)
    }
}

module.exports = authentication;