import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        {/* Colocamos el logo centrado */}
        <Image source={require('../assets/images/LOGO.png')} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',  
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#1c1c1c',
  },
  logoContainer: {
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  logo: {
    width: 200,  
    height: 100,
    resizeMode: 'contain',  
  },
});
