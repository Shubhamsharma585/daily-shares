import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const CalculatorButton = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;


const styles = StyleSheet.create({
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