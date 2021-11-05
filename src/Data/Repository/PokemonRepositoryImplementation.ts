import PokemonDataSource from 'src/Data/DataSource/PokemonDataSource'
import { Pokemon } from 'src/Domain/Model/Pokemon'
import { PokemonRepository } from 'src/Domain/Repository/PokemonRepository'

export class PokemonRepositoryImplementation implements PokemonRepository {
    dataSource: PokemonDataSource

    constructor (_dataSource: PokemonDataSource) {
      this.dataSource = _dataSource
    }

    async getPokemons (): Promise<Pokemon[]> {
      return this.dataSource.getPokemons()
    }
}
