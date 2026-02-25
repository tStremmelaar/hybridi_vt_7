export type deckResponse = {
  success: boolean
  deck_id: string
  shuffled: boolean
  remaining: number
}

export type cardResponse = {
  code: string
  image: string
  images: { svg: string, png: string }
  value: string
  suit: string
}

export type drawResponse = {
  success: boolean
  deck_id: string
  cards: cardResponse[]
  remaining: number
}
