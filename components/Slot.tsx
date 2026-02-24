import { StyleSheet, View } from "react-native"

export default function Slot() {
  return (
    <View style={styles.slot} />
  )
}

const styles = StyleSheet.create({
  slot: {
    flex: 1,
    margin: 3,
    backgroundColor: '#fff',
    aspectRatio: 113 / 157,
  },
})