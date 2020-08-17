import passport from 'passport';
import LinkedinStrategy from 'passport-linkedin-oauth2';
import { AuthError } from '../../utils';

const normalizeProvider = (accessToken, refreshToken, email, profile) => {
  const provider = {
    email,
    providerId: profile.id,
    providerName: profile.provider,
    accessToken: accessToken,
    refreshToken: refreshToken,
    displayName: profile.displayName,
  };

  if (profile.photos && profile.photos.length) {
    provider.photo = profile.photos[0].value;
  }

  const firstName = profile.name?.givenName;
  const lastName = profile.name?.familyName;
  if (firstName && lastName) {
    provider.fullName = firstName + ' ' + lastName;
  }

  return provider;
};

passport.use(
  new LinkedinStrategy.Strategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.APP_URL + '/api/v1/login/linkedin/callback',
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    (accessToken, refreshToken, profile, done) => {
      const emails = profile.emails;

      if (!emails || !emails.length || !emails[0].value) {
        return done(new AuthError('Email not provided'));
      }

      const email = emails[0].value;

      const provider = normalizeProvider(
        accessToken,
        refreshToken,
        email,
        profile
      );

      return done(null, provider);
    }
  )
);

export const linkedinAuth = passport.authenticate('linkedin', {
  session: false,
});

export const linkedinAuthCallback = async (req, res) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('linkedin', { session: false }, (error, provider) => {
      if (provider) {
        resolve(provider);
      } else {
        reject(error);
      }
    })(req, res);
  });
};
