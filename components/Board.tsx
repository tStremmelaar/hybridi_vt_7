import { StyleSheet, View } from "react-native";
import { boardProps } from "../types/props";
import Card from "./Card";
import { useEffect, useState } from "react";
import { card } from "../types/types";
import Hand from "./Hand";
import drawInitial from "../functions/drawInitial";
import createDeck from "../functions/createDeck";

export default function Board({props}: {props: boardProps}) {
  const [drawUrl, setDrawUrl] = useState<string>('')
  const [dealerHand, setDealerHand] = useState<card[]>([])
  const [playerHand, setPlayerHand] = useState<card[]>([])

  useEffect(() => {
    async function handleStart() {
      try {
        const response = await createDeck()
        const newDrawUrl = `https://deckofcardsapi.com/api/deck/${response.deck_id}/draw/`
        setDrawUrl(newDrawUrl)

        const cards = (await drawInitial(newDrawUrl)).cards
        console.log(cards)
        setPlayerHand([cards[0], cards[2]])
        setDealerHand([{...cards[1], faceDown: true}, cards[3]])
      } catch (error) {
        console.error(error)
      }
    }
    handleStart()
  }, [])

  return (
    <View style={styles.board}>
      <Hand props={{hand: dealerHand}} />
      <Hand props={{hand: playerHand}} />
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
  }
})