import { extractIdFromUrl } from '@helpers/extractIdFromUrl'
import { getSprites } from '@helpers/getSprites'
import { CatalogServiceType } from './services'

export type CatalogPokemonType = { image: string; url: string; } | {
  image: string
  name: string
  url: string
}

export class CatalogUseCases {
  catalogService: CatalogServiceType

  constructor({ CatalogService }: { CatalogService: CatalogServiceType }) {
    this.catalogService = CatalogService
  }

  async getPokemonList(): Promise<CatalogPokemonType[]> {
    const pokemons = await this.catalogService.getPokemonList()
    const mappedPokemons = pokemons.results.map(pocket => ({
      ...pocket,
      image: getSprites(extractIdFromUrl(pocket.url), 'artwork')
    }))

    return mappedPokemons
  }
}
