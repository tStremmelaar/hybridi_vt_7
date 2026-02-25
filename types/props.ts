import { card } from "./types"

export type betProps = {
  bank: number
  bet: (bet: number) => void
}

export type cardProps = {
  card: card
}

export type foundationProps = {
  cards: card[]
}