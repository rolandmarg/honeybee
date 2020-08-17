import passport from 'passport';
import nextConnect from 'next-connect';
import { linkedinAuthCallback } from '../../../../../lib/auth/providers/linkedin';
import { authByProvider } from '../../../../../lib/auth/helpers';
import handler from '../../../../../lib/utils/handler';

export default nextConnect()
  .use(passport.initialize())
  .get(
    handler(async (req, res) => {
      const provider = await linkedinAuthCallback(req, res);

      await authByProvider(provider, res);

      res.redirect('/');
    })
  );
