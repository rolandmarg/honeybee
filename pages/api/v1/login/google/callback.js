import passport from 'passport';
import nextConnect from 'next-connect';
import { googleAuthCallback } from '../../../../../lib/auth/providers/google';
import { authByProvider } from '../../../../../lib/auth/helpers';
import handler from '../../../../../lib/utils/handler';

export default nextConnect()
  .use(passport.initialize())
  .get(
    handler(async (req, res) => {
      const provider = await googleAuthCallback(req, res);

      await authByProvider(provider, res);

      res.redirect('/');
    })
  );
