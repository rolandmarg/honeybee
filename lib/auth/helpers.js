import { serialize, parse } from 'cookie';
import { unseal, seal, AuthError } from '../utils';

const COOKIE_NAME = 'token';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 1 Month

const getTokenFromCookie = (req) => {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) {
    return req.cookies[COOKIE_NAME];
  }

  // For pages we do need to parse the cookies.
  const cookies = req.headers?.cookie;
  if (!cookies) {
    return null;
  }

  const cookieObj = parse(cookies);

  return cookieObj[COOKIE_NAME];
};

const getTokenFromHeader = (req) => {
  return req.headers?.authorization?.split(' ')[1];
};

export const getAuthPayload = async (req) => {
  const cookieToken = getTokenFromCookie(req);
  const authBearerToken = getTokenFromHeader(req);

  const token = cookieToken || authBearerToken;
  if (!token) {
    return null;
  }

  const payload = await unseal(token);

  if (!payload || !payload.email) {
    throw new AuthError();
  }

  return payload;
};

export const encryptPayload = async (payload) => {
  const token = await seal(payload);

  return token;
};

export const setAuthCookie = (token, res) => {
  const cookie = serialize(COOKIE_NAME, token, {
    maxAge: COOKIE_MAX_AGE,
    expires: new Date(Date.now() + COOKIE_MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'strict',
  });

  res.setHeader('Set-Cookie', cookie);
};

export const removeAuthCookie = (res) => {
  const cookie = serialize(COOKIE_NAME, '', {
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
};

export const authByProvider = async (provider, res) => {
  // TODO store sessionID in cookie, not whole provider
  const token = await encryptPayload({
    email: provider.email,
    photo: provider.photo,
    name: provider.displayName,
  });

  setAuthCookie(token, res);
};
