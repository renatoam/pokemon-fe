import { catalogUseCases } from '@api/pokemons/catalog'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (request: NextApiRequest, response: NextApiResponse) {
  const list = await catalogUseCases.getPokemonList()

  response.status(200).json(list)
}
