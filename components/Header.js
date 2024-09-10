import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();  // Define `navigation` aquí

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logoContainer}>
        {/* Aquí podrías poner el logo */}
      </TouchableOpacity>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Inicio</Text>
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
    padding: 40,
    margin: -20,
    backgroundColor: '#1c1c1c',  // Fondo oscuro
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
  link: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#f0f0f0',  // Texto en gris claro
  },
  userActions: {
    flexDirection: 'row',
  },
  actionText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#d32f2f',  // Texto en rojo oscuro
    fontWeight: 'bold',
  },
});
