// import axios from 'axios'
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// import { PokemonType } from 'src/common/types/types'
// import { CatalogPokemonType } from '@api/pokemons/catalog/useCases'

import Loading from "@components/organisms/Loading";
// import { Card, Figure, Wrapper } from '@styles/pages/home'
import { catalogUseCases } from "@api/pokemons/catalog";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const { isLoading, error, data } = useQuery("pokemons", () =>
    catalogUseCases.getPokemonList()
  );

  useEffect(() => {
    if (!data) return;

    const list = data;

    setPokemons(list);
  }, [data]);

  useEffect(() => {
    console.log({ pokemons });
  }, [pokemons]);

  if (isLoading) return <Loading />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <p>Pokemons</p>
    // <Wrapper>
    //   {pokemons.map((pokemon: CatalogPokemonType, index: number) => {
    //     return (
    //       <Fragment key={pokemon.}>
    //         <Card>
    //           <Figure>
    //             <img src={pokemon.img} alt={pokemon.name} />
    //           </Figure>
    //           <section>
    //             <small>Nº {pokemon.id}</small>
    //             <h2>{pokemon.name}</h2>
    //             {pokemon.type.map((type) => (
    //               <span poke-type={type.toLowerCase()}>{type}</span>
    //             ))}
    //           </section>
    //         </Card>
    //       </Fragment>
    //     )
    //   })}
    // </Wrapper>
  );
}
