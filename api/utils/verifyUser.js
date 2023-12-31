import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

  if (!token) return next(errorHandler(401, 'Unauthorized'))

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err)
    // if (err) return next(errorHandler(403, 'Forbidden'))

    req.user = user
    next()
  })
}
