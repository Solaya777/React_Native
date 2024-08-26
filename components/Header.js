import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logoContainer}>

      </TouchableOpacity>
      <View style={styles.navigation}>
        <TouchableOpacity>
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userActions}>
        <TouchableOpacity>
          <Text style={styles.actionText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 40,
  },
  navigation: {
    flexDirection: 'row',
  },
  navText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  userActions: {
    flexDirection: 'row',
  },
  actionText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});