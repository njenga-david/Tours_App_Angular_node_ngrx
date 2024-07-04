import { Router } from 'express';
import { addBooking, getBookings, getBooking, updateBooking, cancelBooking } from '../controllers/bookingControllers';
import {  isUserOrAdmin } from '../middleware/authMiddle'
import { verifyToken } from '../middleware' 
import { isAdmin } from '../middleware/authMiddle'

const bookingRouter = Router();

bookingRouter.post('/', verifyToken, addBooking);
bookingRouter.get('/', verifyToken, isAdmin, getBookings);
bookingRouter.get('/:id', verifyToken, isUserOrAdmin, getBooking);
bookingRouter.put('/:id', verifyToken, isUserOrAdmin, updateBooking);
bookingRouter.delete('/:id', verifyToken, isUserOrAdmin, cancelBooking);

export default bookingRouter
