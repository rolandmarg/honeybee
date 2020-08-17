import { getAuthPayload } from '../../../lib/auth/helpers';
import handler from '../../../lib/utils/handler';

export default handler(async (req, res) => {
  const session = await getAuthPayload(req);

  res.status(200).json({ user: session });
});
