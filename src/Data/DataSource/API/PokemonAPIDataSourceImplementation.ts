import { Pokemon } from 'src/Domain/Model/Pokemon'
import PokemonDataSource from '../PokemonDataSource'
import { PokemonAPIEntity } from './Entity/PokemonAPIEntity'

const BASE_URL = 'link da api'

interface TypedResponse<T = any> extends Response {
    json<P = T>(): Promise<P>
}

function myFetch<T> (...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args)
}

export default class PokemonAPIDataSourceImplementation implements PokemonDataSource {
  async getPokemons (): Promise<Pokemon[]> {
    const response = await myFetch<PokemonAPIEntity[]>(`${BASE_URL}/pokemons`)
    const data = await response.json()

    return data.map(pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.type
    }))
  }
}
