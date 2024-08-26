import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Signup from './Signup' ;

export default function Home({ route }) {

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Bienvenido!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});