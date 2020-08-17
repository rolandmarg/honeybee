import passport from 'passport';
import nextConnect from 'next-connect';
import { linkedinAuth } from '../../../../../lib/auth/providers/linkedin';
import handler from '../../../../../lib/utils/handler';

export default nextConnect()
  .use(passport.initialize())
  .use(handler(linkedinAuth));
