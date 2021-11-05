import { Pokemon } from '../Model/Pokemon'

export interface PokemonRepository {
    getPokemons(): Promise<Pokemon[]>
}
