import { Router } from 'express'
import { registerUser  , loginUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/authControllers' 
import { verifyToken } from '../middleware/authMiddle'
import { isAdmin } from '../middleware/authMiddle'
import { isUserOrAdmin } from '../middleware/authMiddle'

const authRouter = Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.get('/users', verifyToken, isAdmin, getUsers)
authRouter.get('/users/:id', verifyToken, isUserOrAdmin, getUser)
authRouter.put('/users/:id', verifyToken, isUserOrAdmin, updateUser)
authRouter.delete('/users/:id', verifyToken, isAdmin, deleteUser)

export default authRouter