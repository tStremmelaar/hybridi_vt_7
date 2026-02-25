import { useState } from "react"
import { StyleSheet, View } from "react-native"
import Bet from "./Bet"

export default function Game() {
  const [gameInProgress, setGameInProgress] = useState<boolean>(false)
  const [bank, setBank] = useState<number>(0)

  function bet(bet: number) {

  }

  return (
    <View style={styles.game}>
      {!gameInProgress && (
        <Bet props={{bank, bet}} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  game: {
    flex: 1,
  }
})