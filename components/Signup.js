import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../Credenciales'; 

const auth = getAuth(appFirebase);

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Registro exitoso', '¡Te has registrado correctamente!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/LOGO.png')} style={styles.logo} />
      <Text style={styles.title}>¡Regístrate!</Text>

      <Text style={styles.label}>Nombre y apellido</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nombre completo"
        placeholderTextColor="#777"  // Color gris claro para el placeholder
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholder="ejemplo@correo.com"
        placeholderTextColor="#777"  // Color gris claro para el placeholder
      />

      <Text style={styles.label}>Contraseña</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor="#777"  // Color gris claro para el placeholder
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
          <Text style={styles.togglePassword}>{showPassword ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Registrarte</Text>
      </TouchableOpacity>

      <View style={styles.registrationLink}>
        <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Inicia Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    color: '#f0f0f0',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordInput: {
    flex: 1,
  },
  toggleButton: {
    paddingLeft: 10,
  },
  togglePassword: {
    fontSize: 18,
    color: '#d32f2f',
  },
  button: {
    backgroundColor: '#d32f2f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registrationLink: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#f0f0f0',
  },
  linkText: {
    color: '#d32f2f',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
