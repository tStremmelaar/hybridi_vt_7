import { StyleSheet, View } from "react-native";
import { boardProps } from "../types/props";
import Card from "./Card";
import { useEffect, useState } from "react";
import { card } from "../types/types";
import Hand from "./Hand";
import drawInitial from "../functions/drawInitial";
import createDeck from "../functions/createDeck";
import Actions from "./Actions";
import drawOne from "../functions/drawOne";
import calculatePoints from "../functions/calculatePoints";

export default function Board({props}: {props: boardProps}) {
  const [drawUrl, setDrawUrl] = useState<string>('')
  const [dealerHand, setDealerHand] = useState<card[]>([])
  const [dealerPoints, setDealerPoints] = useState<number>(0)
  const [playerHand, setPlayerHand] = useState<card[]>([])
  const [playerPoints, setPlayerPoints] = useState<number>(0)
  const [canPlay, setCanPlay] = useState<boolean>(true)

  useEffect(() => {
    async function handleStart() {
      try {
        const response = await createDeck()
        const newDrawUrl = `https://deckofcardsapi.com/api/deck/${response.deck_id}/draw/`
        setDrawUrl(newDrawUrl)

        const cards = (await drawInitial(newDrawUrl)).cards
        const newPlayerHand = [cards[0], cards[2]]
        setPlayerHand(newPlayerHand)
        setDealerHand([{...cards[1], faceDown: true}, cards[3]])
        
        setCanPlay(true)
      } catch (error) {
        console.error(error)
      }
    }
    handleStart()
  }, [])

  useEffect(() => {
    setDealerPoints(calculatePoints(dealerHand))
  }, [dealerHand])

  useEffect(() => {
    setPlayerPoints(calculatePoints(playerHand))
  }, [playerHand])

  async function handleStand() {
    if (canPlay) {
      dealerHand.map((card, index) => {
        if (index === 0) {
          card.faceDown = false
        }
        return card
      })
      let dp = calculatePoints(dealerHand)
      while (dp < 17) {
        try {
          const card = await drawOne(drawUrl)
          const newDealerHand = [...dealerHand, card]
          dp = calculatePoints(newDealerHand)
          setDealerHand(newDealerHand)
        } catch (error) {
          console.error(error)
        }
      }
      const pp = calculatePoints(playerHand)
      let winnings = 0
      if ((dp > 21) || (pp > dp)) {
        props.endGame(2 * props.bet)
      } else if (pp === dp) {
        props.endGame(props.bet)
      } else {
        props.endGame(0)
      }
    }
  }

  async function handlePlayerHit() {
    if (canPlay) {
      try {
        const card = await drawOne(drawUrl)
        const newPlayerHand = [...playerHand, card]
        setPlayerHand(newPlayerHand)
        const points = calculatePoints(newPlayerHand)
        if (points > 21) {
          setCanPlay(false)
          props.endGame(0)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <View style={styles.board}>
      <Hand props={{hand: dealerHand, points: dealerPoints}} />
      <Hand props={{hand: playerHand, points: playerPoints}} />
      <Actions props={{stand: handleStand, hit: handlePlayerHit}} />
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
  }
})