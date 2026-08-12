import jwt from 'jsonwebtoken';
import User from '../models/User.js'


export const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization || ''
    const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7).trim()
        : authHeader.trim()

    if (!token) {
        return res.json({ success: false, message: 'Not authorized' })
    }

    try {
        const userId = jwt.verify(token, process.env.JWT_SECRET)
        if (!userId) {
            return res.json({ success: false, message: 'Not authorized' })
        }

        req.user = await User.findById(userId).select('-password')
        if (!req.user) {
            return res.json({ success: false, message: 'User not found' })
        }

        next()
    } catch (error) {
        return res.json({ success: false, message: 'Not authorized' })
    }
}