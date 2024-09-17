import React from "react";
import { registerRootComponent } from "expo";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import HeaderLoged from "./components/HeaderLoged";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Products from "./components/Products";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import appFirebase from './Credenciales';
import { getAuth } from 'firebase/auth';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text, Image, Linking, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { LogBox } from 'react-native';
import FooterLoged from "./components/FooterLoged";
import ShoppingCart from './components/ShoppingCart';

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews']);


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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShoppingCart"
            component={ShoppingCart}
            options={{ headerShown: false }}
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
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <LoginForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function HomeScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <HeaderLoged />
        <Home />
        <Footer />
      </ScrollView>
      <FooterLoged/>
    </KeyboardAvoidingView>
  );
}

function ProductsScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <HeaderLoged showCart={true}  />
        <Products />
        <Footer />
      </ScrollView>
      <FooterLoged/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0, 
    backgroundColor: '#121212',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 0, 
  },
});

registerRootComponent(App);
