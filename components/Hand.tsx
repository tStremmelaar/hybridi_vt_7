import { StyleSheet, View } from "react-native"
import { handProps } from "../types/props"
import Card from "./Card"
import { useEffect } from "react"

export default function Hand({props}: {props: handProps}) {
  useEffect(() => {
  }, [])

  return (
    <View style={styles.hand}>
      {props.hand.map((card, index) => {
        return (
          <View key={'card' + index} style={styles.withFiller}>
            <View style={{width: `${6 * index}%`}} />
            <Card props={{card}} />
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  hand: {
    flexDirection: 'row',
    height: '30%',
    width: '100%' - 10,
    margin: 5,
    borderColor: '#f00',
    borderWidth: 3,
  },
  withFiller: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    height: '100%',
    width: '100%',
  }
})