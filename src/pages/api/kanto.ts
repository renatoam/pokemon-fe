import { mongoConnect } from '@api/db/mongo'
import { NextApiRequest, NextApiResponse } from 'next'
import Pokemon from '@api/db/mongo/schemas/Pokemon'

export default async function kanto(request: NextApiRequest, response: NextApiResponse) {
  await mongoConnect()

  const pokemons = await Pokemon.findOne({ name: 'Venusaur' })

  return response.status(200).json(pokemons)
}
