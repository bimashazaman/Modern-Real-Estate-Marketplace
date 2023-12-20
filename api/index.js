import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

console.log('Connection String:', process.env.MONGO_URL)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to the database.')
  })
  .catch((err) => console.error('DB Connection Error:', err))

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
