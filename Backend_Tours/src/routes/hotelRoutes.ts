import { Router } from 'express'
import { addHotel, getHotels, getHotel, updateHotel, deleteHotel } from '../controllers/hotelControllers'
import { verifyToken } from '../middleware' 
import { isAdmin } from '../middleware/authMiddle'


const hotelRouter = Router()

hotelRouter.post('/', verifyToken, isAdmin, addHotel)
hotelRouter.get('/', verifyToken, getHotels)
hotelRouter.get('/:id', verifyToken, getHotel)
hotelRouter.put('/:id', verifyToken, isAdmin, updateHotel)
hotelRouter.delete('/:id', verifyToken, isAdmin, deleteHotel)

export default hotelRouter