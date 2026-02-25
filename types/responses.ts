import { card } from "./types"

export type deckResponse = {
  success: boolean
  deck_id: string
  shuffled: boolean
  remaining: number
}

export type drawResponse = {
  success: boolean
  deck_id: string
  cards: card[]
  remaining: number
}
