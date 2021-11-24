import {
  animeSource,
  artworkSource,
  bwAnimatedSource,
  bwSource,
  vectorSource,
  xySource
} from '@constants/sprites'

type SpritesType =
  | 'anime'
  | 'artwork'
  | 'blackWhite'
  | 'blackWhiteAnimated'
  | 'vector'
  | 'xyAnimated'

function formatID(id: number) {
  const stringID = id.toString()

  return stringID.length >= 3 ? stringID : stringID.length === 2 ? `0${stringID}` : `00${stringID}`
}

export function getSprites(id: number, style: SpritesType = 'blackWhite', name?: string) {
  const urlSpritesBuilder: Record<SpritesType, string> = {
    anime: `${animeSource}/${id}.png`,
    artwork: `${artworkSource}/${id}.png`,
    blackWhite: `${bwSource}/${id}.png`,
    blackWhiteAnimated: `${bwAnimatedSource}/${id}.gif`,
    vector: `${vectorSource}/${formatID(id)}-${name}.svg`,
    xyAnimated: `${xySource}/${name}.gif`
  }

  return urlSpritesBuilder[style]
}
