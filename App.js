import React from "react";
import { registerRootComponent } from "expo";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import appFirebase from './Credenciales';
import { getAuth } from 'firebase/auth';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text, Image, Linking, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';


const auth = getAuth(appFirebase);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerTitle: "Registro" }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: "Home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

function LoginScreen() {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
  >
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Header />
      <LoginForm />
    </ScrollView>
    <Footer />
  </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
});

registerRootComponent(App);
