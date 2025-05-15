import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';

export default function ProductCard({ name, price, image }) {
  const handleBuy = () => {
    Alert.alert(
      'Compra realizada ✅',
      `Você comprou: ${name}`,
      [{ text: 'OK', onPress: () => console.log('Alerta fechado') }],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <Button title="COMPRAR" onPress={handleBuy} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    width: 250,
    elevation: 4,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#777',
    marginBottom: 8,
  },
});
