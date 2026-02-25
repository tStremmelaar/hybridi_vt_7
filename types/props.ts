import { card } from "./types"

export type betProps = {
  bank: number
  startGame: (bet: number) => void
}

export type cardProps = {
  card: card
}

export type foundationProps = {
  cards: card[]
}