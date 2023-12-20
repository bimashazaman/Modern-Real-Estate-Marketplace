import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

const app = express()

app.use(express.json())

// For security, setting various HTTP headers
app.use(helmet())

// Setting a policy for resources loaded from different origins
app.use(
  helmet.crossOriginResourcePolicy({
    policy: 'cross-origin',
  })
)

// Enabling CORS for cross-origin requests
app.use(cors())

console.log('Connection String:', process.env.MONGO_URL)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to the database.')
  })
  .catch((err) => console.error('DB Connection Error:', err))

//Routes

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

// app.use(express.static(path.join(__dirname, '/client/dist')))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
// })

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
