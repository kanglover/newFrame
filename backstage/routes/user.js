import express from 'express'
import UserController from '../controller/user/user'

const router = express.Router()

router.get('/add', UserController.save)

export default router
