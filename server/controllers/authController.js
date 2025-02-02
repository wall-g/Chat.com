import User from '../models/Users.js';
import bcrypt from 'bcrypt';
import logger from '../utils/logger.js'
import jwt from 'jsonwebtoken'

export const signupUser = async (req, res, next) => {
    let { username, email, password, pic } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
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

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            const error = new Error('Invalid Credentials');
            error.statusCode = 400;
            throw error;
        }
        
        const isMatch = await bcrypt.compare(password, user.password);        
        if (!isMatch) {
            const error = new Error('Invalid Credentials');
            error.statusCode = 400;
            throw error;
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json(
            {
                token,
                user: { id: user._id, email: user.email, username: user.username }
            }
        )

    } catch (error) {        
        next(error);
    }
}