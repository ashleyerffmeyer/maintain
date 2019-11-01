const jwt = require('jsonwebtoken')
const logger = require('logops')
const KEY = process.env.JWT_KEY || "insecure_key"

/**
 * Create a JWT token
 * @param {Object} payload
 * @param {Object} [options]
 * @return {String|undefined}
 */
function createToken (payload, options = {}) {
  try {
    return jwt.sign(payload, KEY, { expiresIn: '24h', ...options })
  } catch (err) {
    logger.warn(err)
  }
}

/**
 * Decode a JWT token
 * @param {Object} req
 * @return {Object|undefined}
 */
function decodeToken (req) {
  const token = req.headers.authorization.split(' ')[1]

  try {
    return jwt.verify(token, KEY)
  } catch (err) {
    logger.warn(err)
  }
}

/**
 * Create a new token if the existing token is valid
 * @param {Objec} req
 * @return {String|undefined}
 */
function refreshToken (req) {
  const payload = decodeToken(req)

  if (payload) {
    delete payload.iat
    delete payload.exp
    return createToken(payload)
  }
}

/**
 * Auth express middleware function
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function middleware (req, res, next) {

  if (!~req.path.indexOf('/api/')) {
    return next()
  }

  if (req.headers['content-type'] !== 'application/json' ) {
    return res.status(400).json({
      errors: [
        {
          status: 400,
          title: 'Bad Request',
          detail: 'Content type must be application/json'
        }
      ]
    })
  }

  req.authorize = null
  req.refresh = null
  req.createToken = null

  if (req.headers.authorization) {
    req.authorize = (role = 'any') => {
      const payload = decodeToken(req)

      if (payload && (role === 'any' || payload.role.includes(role))) {
        return payload
      }
    }

    req.refresh = refreshToken
  }

  let { user, passwd } = req.body

  user = user && user.trim()
  passwd = passwd && passwd.trim()

  if (user && passwd) {
    req.body.user = user
    req.body.passwd = passwd
    req.createToken = createToken
  }

  next()
}

module.exports = {
  createToken,
  decodeToken,
  middleware,
  refreshToken
}
