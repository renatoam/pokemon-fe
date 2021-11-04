import { NextApiRequest, NextApiResponse } from 'next';

export default async function products(request: NextApiRequest, response: NextApiResponse) {
  return response.status(200).json({ owner: 'Novatics' })
}
