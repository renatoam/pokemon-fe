import { useState } from 'react'
import PokemonAPIDataSourceImplementation from 'src/Data/DataSource/API/PokemonAPIDataSourceImplementation'
import { PokemonRepositoryImplementation } from 'src/Data/Repository/PokemonRepositoryImplementation'
import { Pokemon } from 'src/Domain/Model/Pokemon'
import { GetPokemonsUseCase } from 'src/Domain/UseCase/Pokemon/GetPokemons'

export default function PokemonListViewModel () {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  const UseCase = new GetPokemonsUseCase(
    new PokemonRepositoryImplementation(new PokemonAPIDataSourceImplementation())
  )

  async function getPokemons () {
    setPokemons(await UseCase.invoke())
  }

  return {
    getPokemons,
    pokemons
  }
}
