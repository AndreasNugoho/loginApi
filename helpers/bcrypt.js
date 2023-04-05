const bcrypt = require('bcryptjs');
const hashPassword = async(password) => {
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(password, salt)
  
    return hash
  }
  
  const comparePassword = async(password, hash) => {
    return await bcrypt.compareSync(password,hash)
  }
  
  module.exports = {
    hashPassword,
    comparePassword
  }