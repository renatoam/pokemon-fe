type PokemonTypes =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy'

type ImageStyleType = 'circle' | 'label-circle' | null

export function getPokemonTypeImage(type: PokemonTypes, style: ImageStyleType) {
  const source = process.env.NEXT_PUBLIC_IMAGES_URL
  const typeResource = style ? `/types/${type}-${style}.png` : `/types/${type}.png`
  const typeURL = `${source}${typeResource}`

  return typeURL
}
