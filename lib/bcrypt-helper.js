const bcrypt = require('bcrypt')
const SALT_ROUNDS = parseInt(10, 10)

function hashPassword (passwd) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(passwd, SALT_ROUNDS, (err, hash) => {
      if (err) { return reject(err) }
      resolve(hash)
    })
  })
}

function compareHash (hash, passwd) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(passwd, hash, (err, isValid) => {
      if (err) { return reject(err) }
      resolve(isValid)
    })
  })
}

module.exports = {
  compareHash,
  hashPassword
}
