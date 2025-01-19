import User from '../models/Users';
import bcrypt from 'bcrypt';
import logger from '../utils/logger'

export const signupUser = async (req, res, next) => {
    const { username, email, password, pic } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        // if email is already registered
        if (existingUser) {
            const error = new Error('email is already registered');
            error.statusCode = 400;
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, hashedPassword, pic });
        logger.info(`User registered: ${email}`);
        return res.status(200).json({
            success: true,
            message: 'User registered sucessfully',
            data: { id: user.id, email: user.email }
        })

    } catch (error) {
        logger.error(`error while signup`);
        next(error);
    }
}