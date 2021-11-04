import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { PokemonType } from 'src/common/types/types';

import { Card, Figure, Wrapper } from '@styles/pages/home';

const fetcher = async () =>
  await axios.get('http://localhost:8080/pokemons', {
    params: {
      limit: 9,
    },
  });

export default function HomePage() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const { isLoading, error, data } = useQuery('pokemons', fetcher);

  useEffect(() => {
    if (!data) return;

    const rawList = data.data as PokemonType[];
    const list = rawList.sort((pok1, pok2) => pok1.id - pok2.id);

    setPokemons(list);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      <header></header>
      <section className="iniciais">
        <h2 className="iniciais__titulo">Escolha seu inicial</h2>
        <section className="iniciais__wrapper">
          <section className="iniciais__item" data-type="grass" data-id="1">
            <figure className="iniciais__imagem">
              <img src="/icons/icon-bullbasaur.svg" alt="Bulbasaur" />
            </figure>
            <p className="iniciais__descricao">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe perferendis et nemo sint amet a
              accusamus repellat autem non illo aut dolorem, nesciunt nihil labore neque quas ex ipsa.
            </p>
            <button className="iniciais__botao" data-type="${types}" data-id="${pokemon.id}">
              Pokédex
            </button>
          </section>
          <section className="iniciais__item" data-type="water" data-id="4">
            <figure className="iniciais__imagem">
              <img src="/icons/icon-squirtle.svg" alt="Squirtle" />
            </figure>
            <p className="iniciais__descricao">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe perferendis et nemo sint amet a
              accusamus repellat autem non illo aut dolorem, nesciunt nihil labore neque quas ex ipsa.
            </p>
            <button className="iniciais__botao" data-type="${types}" data-id="${pokemon.id}">
              Pokédex
            </button>
          </section>
          <section className="iniciais__item" data-type="fire" data-id="6">
            <figure className="iniciais__imagem">
              <img src="/icons/icon-charmander.svg" alt="Charmander" />
            </figure>
            <p className="iniciais__descricao">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe perferendis et nemo sint amet a
              accusamus repellat autem non illo aut dolorem, nesciunt nihil labore neque quas ex ipsa.
            </p>
            <button className="iniciais__botao" data-type="${types}" data-id="${pokemon.id}">
              Pokédex
            </button>
          </section>
        </section>
      </section>

      <section className="iniciais__modal">
        <section className="iniciais__modal--overlay"></section>
        <section className="iniciais__modal--wrapper"></section>
      </section>
    </>
  );
}
