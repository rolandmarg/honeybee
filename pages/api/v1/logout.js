import handler from '../../../lib/utils/handler';
import { removeAuthCookie } from '../../../lib/auth/helpers';

export default handler((req, res) => {
  removeAuthCookie(res);

  res.redirect('/');
});
