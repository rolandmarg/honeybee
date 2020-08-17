import { AppError, AuthError } from './errors';
import { removeAuthCookie } from '../auth/helpers';

export default (func) => {
  return async (...args) => {
    try {
      await func(...args);
    } catch (error) {
      const [_req, res] = args;
      if (error instanceof AuthError) {
        removeAuthCookie(res);

        res.redirect('/login');
      } else if (error instanceof AppError) {
        res.status(error.statusCode).json({
          error: {
            message: error.message,
            code: error.statusCode,
          },
        });
      } else {
        console.error(error);

        res
          .status(500)
          .json({ error: { message: 'Internal server error', code: 500 } });
      }
    }
  };
};
