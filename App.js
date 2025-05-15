import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  const products = [
    {
      id: 1,
      name: 'Barraca Compacta ⛺',
      price: 'R$ 299,99',
      image: require('./assets/img1.jpg'),
    },
    {
      id: 2,
      name: 'Fogareiro Portátil 🔥',
      price: 'R$ 149,90',
      image: require('./assets/img2.jpg'),
    },
    {
      id: 3,
      name: 'Lanterna LED 💡',
      price: 'R$ 89,90',
      image: require('./assets/img3.jpg'),
    },
    {
      id: 4,
      name: 'Mochila Legendária 🎒',
      price: 'R$ 199,99',
      image: require('./assets/img4.jpg'),
    },
    {
      id: 5,
      name: 'Isolante Térmico 🧘‍♂️',
      price: 'R$ 59,90',
      image: require('./assets/img5.jpg'),
    },
    {
      id: 6,
      name: 'Bússola Digital 🧭',
      price: 'R$ 69,90',
      image: require('./assets/img6.jpg'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
