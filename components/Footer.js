import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Image source={require('../assets/images/LOGO.png')} style={styles.logo} />
      <Text style={styles.aboutText}>
        Tears of Misery Death Metal Latinoamericano, Fundación año 2003 Bogotá D.C. Colombia
      </Text>
      <View style={styles.socialLinks}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/tearsofmisery')}>
          <Text style={styles.socialLink}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/tearsof.misery/')}>
          <Text style={styles.socialLink}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UCjcaDSYUyl_VjlU31vPeH6Q')}>
          <Text style={styles.socialLink}>YouTube</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyRight}>
        &copy; 2023 <Text style={styles.boldText}>Tears Of Misery</Text> - Todos los Derechos Reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 30,
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 8,
  },
  socialLink: {
    color: '#007BFF',
    fontSize: 14,
  },
  copyRight: {
    fontSize: 10,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
