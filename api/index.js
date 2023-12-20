import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRouter from './routes/user.route.js'

dotenv.config()

const app = express()

console.log('Connection String:', process.env.MONGO_URL)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to the database.')
  })
  .catch((err) => console.error('DB Connection Error:', err))

//Routes

app.use('/api/users', userRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
