import { StyleSheet, Text, View } from "react-native"
import { handProps } from "../types/props"
import Card from "./Card"
import { useEffect } from "react"

export default function Hand({props}: {props: handProps}) {
  return (
    <View style={styles.hand}>
      {/* <Text style={styles.points}>
        {props.points}
      </Text> */}
      {props.hand.map((card, index) => {
        return (
          <View key={'card' + index} style={styles.withFiller}>
            <View style={{width: `${10 * index}%`}} />
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
    flex: 2,
    width: '100%' - 10,
    margin: 5,
    // borderColor: '#f00',
    // borderWidth: 3,
  },
  points: {
    height: '20%',
    fontSize: 30,
    color: '#fff',
  },
  withFiller: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    bottom: 0,
    // height: '80%',
    height: '100%',
    width: '100%',
  }
})