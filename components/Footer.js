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
    padding: 15,
    backgroundColor: '#1c1c1c',  // Fondo oscuro
    borderTopWidth: 1,
    borderTopColor: '#444',  // Borde gris oscuro
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 110
  },
  logo: {
    width: 80,
    height: 30,
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#f0f0f0',  
    marginBottom: 10,
    fontStyle: 'italic',  
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 12,
  },
  socialLink: {
    color: '#d32f2f',  
    fontSize: 14,
    textTransform: 'uppercase',  
    fontWeight: 'bold', 
  },
  copyRight: {
    fontSize: 11,
    color: '#888',  
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#f0f0f0',  
  },
});
