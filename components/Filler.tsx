import { StyleSheet, View } from "react-native"

export default function Filler() {
  return (
    <View style={styles.slot} />
  )
}

const styles = StyleSheet.create({
  slot: {
    flex: 1,
    margin: 3,
    backgroundColor: '#0000',
    aspectRatio: 113 / 157,
  },
})