import { Pokedex } from 'src/common/libs/pokeApi'
import { NamedAPIResourceList } from 'pokenode-ts'

export type CatalogServiceType = {
  getPokemonList: () => Promise<NamedAPIResourceList>
}

export const CatalogService: CatalogServiceType = {
  async getPokemonList() {
    const pokemons = await Pokedex.listPokemons(0, 12)

    return pokemons
  }
}
