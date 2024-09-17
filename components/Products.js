import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const productsData = [
  {
    id: '1',
    name: 'Camisetas conmemorativas de los 20 años de Tears of Misery',
    price: '65.000',
    image: require('../assets/images/camisas_dobles_tears.jpg'),
  },
  {
    id: '2',
    name: 'Hoodie conmemorativo + revista impresa',
    price: '125.000',
    image: require('../assets/images/saco_tears.jpg'),
  },
  {
    id: '3',
    name: 'CD + revista impresa Metal Live',
    price: '25.000',
    image: require('../assets/images/cd.jpg'),
  },
  {
    id: '4',
    name: 'CD roses\'s impalement',
    price: '25.000',
    image: require('../assets/images/cd2.jpg'),
  },
  {
    id: '5',
    name: 'Camisa negra + revista impresa',
    price: '55.000',
    image: require('../assets/images/camisa_tears2.jpg'),
  },
  {
    id: '6',
    name: 'Camisa blanca + revista impresa',
    price: '55.000',
    image: require('../assets/images/camisa_blanca_tears.jpg'),
  },
];

const screenWidth = Dimensions.get('window').width;
const productWidth = (screenWidth - 30) / 3; // Ajusta el espacio entre productos

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderProduct = ({ item }) => (
    <View style={styles.product}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Content */}
      <View style={headerStyles.container}>
        <View style={headerStyles.headerTxt}>
          <Text style={headerStyles.seasonText}>Nueva Temporada</Text>
          <Text style={headerStyles.headerTitle}>¡Explora la colección exclusiva!</Text>
          <Text style={headerStyles.headerDescription}>
            Diseñados para los verdaderos fanáticos del death metal, cada pieza captura el espíritu rebelde y la
            intensidad emocional que define nuestra música. Cada compra apoya directamente a la banda.
          </Text>
          <TouchableOpacity style={headerStyles.btn} onPress={() => {/* Acción para el botón */}}>
            <Text style={headerStyles.btnText}>Comprar Ahora</Text>
          </TouchableOpacity>
        </View>
        <View style={headerStyles.headerImg}>
          <Image
            source={require('../assets/images/tears_of_misery.png')} // Asegúrate de reemplazar esta ruta con la de tu imagen
            style={headerStyles.image}
          />
        </View>
      </View>

      {/* Products Section */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Buscar productos..."
          placeholderTextColor="#999"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row} // Añadimos estilo para el espacio entre columnas
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    paddingTop: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTxt: {
    alignItems: 'center',
    marginBottom: 20,
  },
  seasonText: {
    fontSize: 16,
    color: '#424343',
    fontWeight: '700',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 30, // Reducido para mejor ajuste
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerDescription: {
    fontSize: 14, // Reducido para mejor ajuste
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#7b0808',
    borderRadius: 25,
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
  },
  headerImg: {
    marginTop: 10,
  },
  image: {
    width: 350, // Ajusta el tamaño de la imagen según sea necesario
    height: 150, // Ajusta el tamaño de la imagen según sea necesario
    resizeMode: 'contain',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Fondo oscuro
    paddingHorizontal: 0, 
    paddingVertical: 0, 
    marginBottom: 0,
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#555',
    borderWidth: 1,
    marginTop: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  product: {
    backgroundColor: '#2c2c2c', // Fondo oscuro para los productos
    borderRadius: 10,
    padding: 10,
    width: productWidth, // Ajuste de tamaño dinámico según el ancho de la pantalla
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 120, // Altura fija para que todas las imágenes tengan el mismo tamaño
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    color: '#fff', // Texto en blanco
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#ccc', // Precio en gris claro
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default Products;
