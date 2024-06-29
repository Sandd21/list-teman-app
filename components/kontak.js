import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Contact = ({ gambar, judul, telpon }) => {
  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.image} />
      <Text style={styles.title}>{judul}</Text>
      <Text style={styles.phone}>{telpon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  phone: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Contact;
