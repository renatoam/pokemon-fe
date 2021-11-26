import { prisma } from '@api/db/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { NamedAPIResource } from 'pokenode-ts'
import { Pokedex } from 'src/common/libs/pokeApi'

export default async function populate(request: NextApiRequest, response: NextApiResponse) {
  const abilities = (await Pokedex.listAbilities(0, 267)).results as NamedAPIResource[]
  const mappedAbilities = await Promise.all(abilities.map(async ({ name }: NamedAPIResource) => {
    return await prisma.public_Ability.create({ data: { name } })
  }))

  // console.log({ mappedAbilities })

  // const abilityList = await prisma.public_Ability.createMany({
  //   data: mappedAbilities
  // })

  return response.status(200).json(mappedAbilities)
}
