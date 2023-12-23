import express from 'express'
import {
  deleteUser,
  getUser,
  test,
  updateUser,
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/test', test)
router.post('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)
// router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', getUser)

export default router
