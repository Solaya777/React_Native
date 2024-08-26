import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.section}>
        <Image source={require('../assets/images/LOGO.png')} style={styles.logo} />
        <Text style={styles.aboutText}>
          Tears of Misery Death Metal Latinoamericano, Fundación año 2003 Bogotá D.C. Colombia
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.followUs}>Síguenos</Text>
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
      </View>
      <View style={styles.section}>
        <Text style={styles.copyRight}>
          &copy; 2023 <Text style={styles.boldText}>Tears Of Misery</Text> - Todos los Derechos Reservados.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  section: {
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 40,
  },
  aboutText: {
    fontSize: 16,
    marginVertical: 8,
  },
  followUs: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialLink: {
    color: '#007BFF',
  },
  copyRight: {
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
