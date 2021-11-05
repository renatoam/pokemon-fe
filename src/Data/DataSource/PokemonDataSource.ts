import { Pokemon } from 'src/Domain/Model/Pokemon'

export default interface PokemonDataSource {
    getPokemons(): Promise<Pokemon[]>
}
