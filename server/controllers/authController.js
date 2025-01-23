import User from '../models/Users.js';
import bcrypt from 'bcrypt';
import logger from '../utils/logger.js'

export const signupUser = async (req, res, next) => {
    let { username, email, password, pic } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        // if email is already registered        
        if (existingUser) {
            const error = new Error('email is already registered');
            error.statusCode = 400;
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;
        
        const user = await User.create({ username, email, password, pic });
        logger.info(`User registered: ${email}`);
        return res.status(200).json({
            success: true,
            message: 'User registered sucessfully',
            data: { id: user.id, email: user.email }
        })

    } catch (error) {
        next(error);
    }
}