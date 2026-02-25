import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { betProps } from "../types/props";

export default function Bet({props}: {props: betProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.bank}>
        {'Bank: $' + props.bank}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bank: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})