import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { PokemonType } from 'src/common/types/types'

import Loading from '@components/organisms/Loading'
import { Card, Figure, Wrapper } from '@styles/pages/home'

const fetcher = async () =>
  await axios.get('http://localhost:8080/pokemons', {
    params: {
      limit: 9
    }
  })

export default function Pokemons () {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])
  const { isLoading, error, data } = useQuery('pokemons', fetcher)

  useEffect(() => {
    if (!data) return

    const rawList = data.data as PokemonType[]
    const list = rawList.sort((pok1, pok2) => pok1.id - pok2.id)

    setPokemons(list)
  }, [data])

  if (isLoading) return <Loading />
  if (error) return <p>Something went wrong!</p>

  return (
    <Wrapper>
      {pokemons.map((pokemon: PokemonType) => {
        return (
          <React.Fragment key={pokemon.mongoId}>
            <Card>
              <Figure>
                <img src={pokemon.img} alt={pokemon.name} />
              </Figure>
              <section>
                <small>Nº {pokemon.id}</small>
                <h2>{pokemon.name}</h2>
                {pokemon.type.map((type) => (
                  <span poke-type={type.toLowerCase()}>{type}</span>
                ))}
              </section>
            </Card>
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}
