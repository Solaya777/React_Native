import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';

const auth = getAuth();

export const HeaderLoged = ({ showCart = false }) => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al cerrar sesión: ', error.message);
    }
  };

  return (
    <View style={styles.headerContainer}>
      {/* Icono de Usuario y Mensaje de Bienvenida a la izquierda */}
      <View style={styles.userInfoContainer}>
        <Icon name="person" size={24} color="#fff" />
        <Text style={styles.welcomeText}>Bienvenido!</Text>
      </View>

      {showCart ? (
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('ShoppingCart')}
        >
          <Icon name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={handleSignOut}
        >
          <Icon name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#121212',  
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: '#f0f0f0',  // Texto gris claro
    fontWeight: 'bold',
    marginLeft: 5,  // Espacio entre el icono y el texto
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HeaderLoged;
