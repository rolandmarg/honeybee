import handler from '../../../lib/utils/handler';

export default handler((_req, res) => {
  res.status(200).json({ name: 'John Doe' });
});
