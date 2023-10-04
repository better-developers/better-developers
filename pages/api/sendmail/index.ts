import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Person[]>
) {
  return res.status(200).json({})
}