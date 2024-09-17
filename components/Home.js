import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Footer from './Footer';
import HeaderLoged from './HeaderLoged';

const Home = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.albumsTitle}>
        <Text style={styles.title}>ALBUMS</Text>
      </View>

      <View style={styles.album}>
        <Text style={styles.albumTitle}>Tragedias Del Tercer Mundo</Text>
        <TouchableOpacity onPress={() => openLink('https://open.spotify.com/intl-es/album/6l8IE2U59Ymwe7RxEUmfnY?si=jXVLTB2iR42MADFkY9AUUw')}>
          <Image source={require('../assets/images/Album1.jpg')} style={styles.albumImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.album}>
        <Text style={styles.albumTitle}>Inconformity Manifesto</Text>
        <TouchableOpacity onPress={() => openLink('https://open.spotify.com/intl-es/album/6J43Bnpj3YUdWGEAOsGq9x?si=IyeFzWSXRumzgCYGitXJPQ')}>
          <Image source={require('../assets/images/Album2.jpg')} style={styles.albumImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.album}>
        <Text style={styles.albumTitle}>Roses Impalement</Text>
        <TouchableOpacity onPress={() => openLink('https://open.spotify.com/intl-es/album/7mPabZnNwpk6adX8PE2P21?si=k7_5xecrTlydSBT1L1aPbw')}>
          <Image source={require('../assets/images/Album3.jpg')} style={styles.albumImage} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Fondo oscuro
    paddingVertical: 20,
    paddingTop: 10,
    marginTop: 20,
    marginBottom: 0
  },
  albumsTitle: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#ffffff', // Texto claro
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo semitransparente
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8B0000',
  },
  album: {
    marginBottom: 20,
    alignItems: 'center',
  },
  albumTitle: {
    fontSize: 18,
    color: '#ffffff', // Texto claro
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo semitransparente
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8B0000',
    marginBottom: 10,
  },
  albumImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A52A2A', 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    padding: 10,
  },
});

export default Home;
