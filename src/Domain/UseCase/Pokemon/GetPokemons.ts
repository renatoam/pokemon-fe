import { Pokemon } from 'src/Domain/Model/Pokemon'
import { PokemonRepository } from 'src/Domain/Repository/PokemonRepository'

export interface GetPokemons {
    invoke(): Promise<Pokemon[]>
}

export class GetPokemonsUseCase implements GetPokemons {
    private pokemonRepository: PokemonRepository

    constructor (_pokemonRepository: PokemonRepository) {
      this.pokemonRepository = _pokemonRepository
    }

    async invoke (): Promise<Pokemon[]> {
      return this.pokemonRepository.getPokemons()
    }
}
