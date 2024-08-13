import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CalculatorButton from '../../components/CalculatorButton';

export default function TabTwoScreen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value:any) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>{input}</Text>
      <Text style={styles.resultText}>{result}</Text>
    </View>
    <View style={styles.buttonContainer}>
      {['7', '8', '9', '/'].map((value) => (
        <CalculatorButton key={value} value={value} onPress={handleInput} />
      ))}
      {['4', '5', '6', '*'].map((value) => (
        <CalculatorButton key={value} value={value} onPress={handleInput} />
      ))}
      {['1', '2', '3', '-'].map((value) => (
        <CalculatorButton key={value} value={value} onPress={handleInput} />
      ))}
      {['0', '.', '=', '+'].map((value) => (
        <CalculatorButton
          key={value}
          value={value}
          onPress={value === '=' ? calculateResult : handleInput}
        />
      ))}
      <CalculatorButton value="C" onPress={clearInput} />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'flex-end',
    height: 150,  // Fixed height for the result container
    justifyContent: 'center',  // Center the content vertically
  },
  resultText: {
    fontSize: 36,
    color: '#fff',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    margin: '1%',
    aspectRatio: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
