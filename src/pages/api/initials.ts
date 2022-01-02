import { NextApiRequest, NextApiResponse } from 'next'
// import { Pokemon } from 'pokenode-ts'
import { Pokedex } from 'src/common/libs/pokeApi'

export default async function products (request: NextApiRequest, response: NextApiResponse) {
  const bulbasaur = await Pokedex.getPokemonById(1)
  const charmander = await Pokedex.getPokemonById(4)
  const squirtle = await Pokedex.getPokemonById(7)

  const initials = await Promise.all([bulbasaur, charmander, squirtle])

  return response.status(200).json(initials)
}
