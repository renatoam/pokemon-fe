import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors'
import cookies from 'cookie'

// Initializing the cors middleware
export const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: 'http://localhost:8080'
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function me(request: NextApiRequest, response: NextApiResponse) {
  // await runMiddleware(request, response, cors)
  // const headers = request.headers

  response.setHeader('Set-Cookie', cookies.serialize('auth', 'grant', {
    httpOnly: true,
    secure: false,
    sameSite: 'none',
    maxAge: 3600,
    path: '/'
  }))

  return response.status(200).send('ME')
}
