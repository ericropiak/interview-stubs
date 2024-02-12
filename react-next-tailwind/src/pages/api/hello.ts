import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  console.log(req.method);
  console.log(req.body)

  res.status(200).json({ message: req.body?.foo || 'Hello from Next.js!' })
}