import { Dispatch, SetStateAction } from 'react';

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type EvolutionType = {
  num: string;
  name: string;
};

export type PokemonTypesType =
  | 'bug'
  | 'dragon'
  | 'fairy'
  | 'fire'
  | 'ghost'
  | 'ground'
  | 'normal'
  | 'psych'
  | 'steel'
  | 'dark'
  | 'electric'
  | 'fight'
  | 'flying'
  | 'grass'
  | 'ice'
  | 'poison'
  | 'rock'
  | 'water';

export type PokemonType = {
  mongoId: string;
  id: number;
  num: string;
  name: string;
  img: string;
  type: PokemonTypesType[];
  height: string;
  weight: string;
  candy: string;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[] | null;
  weaknesses: PokemonTypesType[];
  prev_evolution?: EvolutionType[];
  next_evolution?: EvolutionType[];
};
