import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const FooterLoged = () => {
  const navigation = useNavigation();
  const route = useRoute(); 

  const getIconColor = (screenName) => {
    return route.name === screenName ? '#FFC107' : '#fff';  
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="home-filled" size={30} color={getIconColor('Home')} />
        <Text style={[styles.iconText, { color: getIconColor('Home') }]}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Products')}
      >
        <Icon name="shopping-bag" size={30} color={getIconColor('Products')} />
        <Text style={[styles.iconText, { color: getIconColor('Products') }]}>Productos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#333',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default FooterLoged;
