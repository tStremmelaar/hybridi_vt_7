import { StyleSheet, Text, View } from "react-native";

export default function Win() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})