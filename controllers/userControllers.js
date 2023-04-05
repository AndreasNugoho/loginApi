const fs = require('fs');
const {generateToken} = require('../helpers/jwt')
const {authentication} = require('../middleware/authentication')
const users = require('../users.json')

class UserController{
    static login(req, res) {
        const { username, password } = req.body
        if (username === users[0].username && password === users[0].password) {
            try {
                const payload = {
                    id: users[0].id,
                    username: users[0].username
                }
                const accessToken = generateToken(payload)
                res.status(200).json({accessToken})
                console.log(users[0].username)
            } catch (error) {
                res.status(error?.code || 500).json(error);
            }
        }
        
    }
} 

module.exports = UserController