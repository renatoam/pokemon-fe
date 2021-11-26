import { prisma } from '@api/db/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function list(request: NextApiRequest, response: NextApiResponse) {
  const abilities = await prisma.public_Ability.findMany()

  return response.status(200).json(abilities)
}
