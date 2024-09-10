import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';

const auth = getAuth();

export const HeaderLoged = () => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Redirige a la pantalla de inicio de sesión después de cerrar sesión
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al cerrar sesión: ', error.message);
    }
  };

  return (
    <View style={styles.headerContainer}>
      {/* Logo o apartado de Inicio que lleva a 'Home' */}
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.linkText}>Inicio</Text>
      </TouchableOpacity>

      {/* Botón de productos */}
      <TouchableOpacity
        style={styles.productsButton}
        onPress={() => navigation.navigate('Products')} // Cambia 'Products' por la pantalla correspondiente
      >
        <Text style={styles.linkText}>Productos</Text>
      </TouchableOpacity>

      {/* Botón de cierre de sesión */}
      <TouchableOpacity
        style={styles.signOutButton}
        onPress={handleSignOut}
      >
        <Icon name="logout" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#121212', // Fondo oscuro
    padding: 30,
    margin: -20,
    marginBottom: -20,
  },
  logoContainer: {
    flex: 1,
  },
  linkText: {
    fontSize: 16,
    color: '#f0f0f0', // Texto gris claro
    marginHorizontal: 10,
  },
  productsButton: {
    backgroundColor: '#1c1c1c', // Fondo del botón
    padding: 10,
    borderRadius: 5,
  },
  signOutButton: {
    padding: 10,
  },
});

export default HeaderLoged;
