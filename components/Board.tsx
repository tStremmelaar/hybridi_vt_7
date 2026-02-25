import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Foundations from "./Foundations";
import { useEffect, useState } from "react";
import createDeck from "../functions/createDeck";
import Stock from "./Stock";
import CardBack from "./CardBack";
import Card from "./Card";
import Empty from "./Empty";

export default function Board() {
  const [drawUrl, setDrawUrl] = useState<string>('')

  async function handleStart() {
    try {
      const response = await createDeck()
      setDrawUrl(`https://deckofcardsapi.com/api/deck/${response.deck_id}/draw/`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.board}>
      <View style={styles.topRow}>
        <Stock />
        <Empty />
        <View style={styles.blank} />
        <Foundations />
      </View>
      <View style={styles.bottomRow}>

      </View>
      {(drawUrl.length === 0) && (
        <Pressable onPress={handleStart}>
          <Text style={styles.start}>Start</Text>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
  },
  blank: {
    flex: 1,
    margin: 3,
  },
  bottomRow: {
    flex: 5,
    backgroundColor: '#00f',
    flexDirection: 'row',
  },
  start: {
    padding: 5,
    marginBottom: 10,
    borderRadius: 7,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007',
  },
})