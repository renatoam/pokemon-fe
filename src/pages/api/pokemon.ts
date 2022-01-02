import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@api/db/prisma';

export default async function pokemon(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.query
  const pokemon = await prisma.pokemon.findMany({
    include: {
      pokemon_types: true
    }
  })

  console.log({ id })
  response.status(200).send({ pokemon })
}
