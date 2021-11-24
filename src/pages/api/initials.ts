import { NextApiRequest, NextApiResponse } from 'next'
import { initialsUseCases } from '@api/pokemons/initials'

export default async function products (request: NextApiRequest, response: NextApiResponse) {
  const initials = await initialsUseCases.getInitials()

  return response.status(200).json(initials)
}
