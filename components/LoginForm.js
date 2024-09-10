import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../Credenciales';

const auth = getAuth(appFirebase);

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Iniciando sesión', 'Accediendo...');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>¡Inicia sesión!</Text>

      {/* Etiqueta para el campo de correo electrónico */}
      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.inputBox} // Cambiado a estilo con caja
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Ingresa tu correo electrónico"
        placeholderTextColor="#777"
      />

      {/* Etiqueta para el campo de contraseña */}
      <Text style={styles.label}>Contraseña</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.inputBox, { flex: 1 }]} // Cambiado a estilo con caja
          secureTextEntry={!passwordVisible}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#777"
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.toggleText}>{passwordVisible ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <View style={styles.registrationLink}>
        <Text style={styles.text}>¿No tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>¡Regístrate!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#1c1c1c', // Fondo oscuro
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f0f0f0', // Texto gris claro
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: '#f0f0f0', // Texto gris claro
    marginBottom: 5,
    fontSize: 16,
  },
  inputBox: {
    borderWidth: 1, // Borde completo para la caja
    borderColor: '#555', // Borde gris oscuro
    marginBottom: 20,
    padding: 10,
    color: '#fff', // Texto blanco
    borderRadius: 5, // Esquinas redondeadas
    backgroundColor: '#2c2c2c', // Fondo gris oscuro
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleText: {
    marginLeft: 10,
    color: '#d32f2f', // Rojo oscuro para el texto de "Mostrar/Ocultar"
  },
  button: {
    backgroundColor: '#d32f2f', // Rojo oscuro para el botón
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
  },
  registrationLink: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#f0f0f0', // Texto gris claro
  },
  link: {
    color: '#d32f2f', // Rojo oscuro para el enlace
    fontWeight: 'bold',
  },
});
