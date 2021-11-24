import { Pokedex } from 'src/common/libs/pokeApi'
import { Pokemon } from 'pokenode-ts'

export type InitialsServiceType = {
  getInitials: () => Promise<[Pokemon, Pokemon, Pokemon]>
}

export const InitialsService: InitialsServiceType = {
  async getInitials() {
    const bulbasaur = await Pokedex.getPokemonById(1)
    const charmander = await Pokedex.getPokemonById(4)
    const squirtle = await Pokedex.getPokemonById(7)

    return await Promise.all([bulbasaur, charmander, squirtle])
  }
}
