import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";
import { betProps } from "../types/props";
import { useState } from "react";

export default function Bet({props}: {props: betProps}) {
  const [input, setInput] = useState<string>('')

  function handleBet() {
    if (!isNaN(Number(input)) && Number(input) > 0 && Number(input) <= props.bank) {
      props.startGame(Number(input))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bank}>
        {'Bank: $' + props.bank}
      </Text>
      <View style={styles.bet}>
        <Text style={styles.betText}>
          Place your bet:
        </Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          keyboardType={'numeric'}
        />
      </View>
      
      <Pressable onPress={handleBet}>
        <Text style={styles.button}>Deal</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bank: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bet: {
    backgroundColor: '#000',
    padding: 5,
  },
  betText: {
    color: '#fff',
    fontSize: 26,
  },
  input: {
    margin: 10,
    minWidth: 50,
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 24,
  },
  button: {
    margin: 10,
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    borderRadius: 8,
    padding: 5,
  },
})