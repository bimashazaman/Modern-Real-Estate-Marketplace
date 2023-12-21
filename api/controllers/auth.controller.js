import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { errorHandler } from '../utils/error.js'

export const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body

    // Check if user already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return next(errorHandler(409, 'User already exists with this email'))
    }

    const hashedPassword = await bcryptjs.hash(password, 10)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })

    await newUser.save()

    res.status(201).json('User Created')
  } catch (error) {
    next(error)
  }
}

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const validUser = await User.findOne({ email })

    if (!validUser) {
      return next(errorHandler(404, 'User not found!'))
    }

    const validPassword = await bcryptjs.compare(password, validUser.password)

    if (!validPassword) {
      return next(errorHandler(401, 'Wrong credentials'))
    }

    const token = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Optional: Set JWT expiration
    )

    const oneHour = 1000 * 60 * 60

    res.cookie('access_token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneHour),
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })

    const { password: pass, ...rest } = validUser._doc

    res.status(200).json(validUser)
  } catch (error) {
    next(error)
  }
}
