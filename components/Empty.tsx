import { StyleSheet, View } from "react-native";

export default function Empty() {
  return (
    <View style={styles.empty} />
  )
}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    aspectRatio: 113 / 157,
    margin: 3,
    backgroundColor: '#fff6',
    borderRadius: 5,
  },
})