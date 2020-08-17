export class AppError extends Error {
  constructor(message = 'Ooh! Nasty things! Nasty!', statusCode = 500) {
    super(message);

    this.statusCode = statusCode;
  }
}

export class BadRequest extends AppError {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}

export class AuthError extends AppError {
  constructor(message = 'Authorization error') {
    super(message, 401);
  }
}
