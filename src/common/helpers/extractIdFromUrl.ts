export function extractIdFromUrl(url: string) {
  const fragments = url.split('/').reverse()
  const id = Number(fragments[1])

  return id
}
