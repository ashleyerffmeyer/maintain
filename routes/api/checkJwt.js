const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const checkJwt = jwt({
    // Dynamically provide a signing key based on the kid in the header
    // and the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true, // cache the signing key
      rateLimit: true,
      jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
      jwksUri: `https://${
        process.env.REACT_APP_AUTH0_DOMAIN
      }/.well-known/jwks.json`
    })
})

module.exports = checkJwt