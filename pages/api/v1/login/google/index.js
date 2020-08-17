import passport from 'passport';
import nextConnect from 'next-connect';
import { googleAuth } from '../../../../../lib/auth/providers/google';
import handler from '../../../../../lib/utils/handler';

export default nextConnect()
  .use(passport.initialize())
  .use(handler(googleAuth));
