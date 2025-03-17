import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const randomCode = Math.floor(Math.random() * 10000);
  return res.status(200).json({ code: randomCode });
}
