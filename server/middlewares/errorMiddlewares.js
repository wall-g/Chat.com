import logger from "../utils/logger.js";

// Error handling for not found routes (404)
export const notFoundHandler = (req, res, next) => {
    const error = new Error(`invalid url: ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
}

// General error handler
export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    logger.error(message);

    res.status(statusCode).json({
      success: false,
      message,
    });
  };
  
