import express from "express";
import { protect } from "../middleware/auth.js";
import { checkAvailability, createBooking, getUserBookings, getOwnerBookings, changeBookingStatus } from "../controllers/bookingController.js";


const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailability)
bookingRouter.post('/create', protect, createBooking)
bookingRouter.get('/user', protect, getUserBookings)
bookingRouter.get('/owner', protect, getOwnerBookings)
bookingRouter.post('/change-status', protect, changeBookingStatus)


export default bookingRouter;
