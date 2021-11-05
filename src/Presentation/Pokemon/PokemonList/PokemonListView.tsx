import { useEffect } from 'react'
import usePokemonViewModel from './PokemonListViewModel'
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText
} from '@mui/material'

export default function PokemonView () {
  const { getPokemons, pokemons } = usePokemonViewModel()

  useEffect(() => {
    getPokemons()
  }, [])

  return <List>
        {pokemons.map((pokemon, index) => {
          return (
                <ListItem key={index}>
                    <ListItemIcon>
                        <Checkbox checked={true} />
                    </ListItemIcon>
                    <ListItemText primary={pokemon.name} secondary={pokemon.type} />
                </ListItem>
          )
        })}
    </List>
}
