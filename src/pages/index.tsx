// import axios from 'axios'
import { initialsUseCases } from "@api/pokemons/initials";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// import { PokemonType } from 'src/common/types/types'
// import {Pokedex} from 'pokeapi-js-wrapper'
import { getCLS, getFID, getLCP } from "web-vitals";

// import { Card, Figure, Wrapper } from '@styles/pages/home'

export default function HomePage() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const { isLoading, error, data } = useQuery("initials", () =>
    initialsUseCases.getInitials()
  );

  useEffect(() => {
    if (!data) return;

    const list = data;

    setPokemons(list);
  }, [data]);

  useEffect(() => {
    console.log({ pokemons });
    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);
  }, [pokemons]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <section
      style={{
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        width: "70%",
        margin: "0 auto",
      }}
    >
      {pokemons.map((pokemon) => {
        return (
          <section
            key={pokemon.id}
            style={{ textAlign: "center", padding: "20px" }}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{ width: "200px" }}
            />
            <p>{pokemon.name}</p>
          </section>
        );
      })}
    </section>
  );
}
