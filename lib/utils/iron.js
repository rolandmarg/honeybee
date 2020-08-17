import Iron from '@hapi/iron';
import { AppError, AuthError } from '.';

const TOKEN_MAX_AGE = 1000 * 60 * 60 * 24 * 30; // 1 Month

export async function seal(payload) {
  if (!payload) {
    throw new AppError();
  }

  const token = { payload, createdAt: Date.now() };

  let sealedToken;

  sealedToken = await Iron.seal(token, process.env.TOKEN_SECRET, Iron.defaults);

  return sealedToken;
}

export async function unseal(sealedToken) {
  let token;

  try {
    token = await Iron.unseal(
      sealedToken,
      process.env.TOKEN_SECRET,
      Iron.defaults
    );
  } catch (e) {
    throw new AuthError();
  }

  if (!token.createdAt || isNaN(token.createdAt)) {
    throw new AuthError();
  }

  const expiresAt = token.createdAt + TOKEN_MAX_AGE;

  if (Date.now() >= expiresAt) {
    throw new AuthError('Token expired');
  }

  if (!token.payload) {
    throw new AuthError('Invalid token');
  }

  return token.payload;
}
