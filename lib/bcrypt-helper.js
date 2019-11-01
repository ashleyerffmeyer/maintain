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

function compareHash (user, passwd) {
  const credentials = process.env[user]
  if (!credentials) { return Promise.reject(Error('No such user...')) }

  const hash = credentials.split(';')[1]
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
