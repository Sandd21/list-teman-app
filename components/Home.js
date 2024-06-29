// components/Home.js
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const friends = [
  { id: '1', name: 'Aisya Syakira Purnama', description: 'Mahasiswi Universitas Muhammadiyah Sukabumi dan juga merupakan ketua Umum UKM  Unit Pers Mahasiswa.' },
  { id: '2', name: 'Ziyah Sakinah', description: 'Mahasiswi Universitas Muhammadiyah Sukabumi Dan Juga merupakan Mojang Kota Sukabumi.' },
   { id: '2', name: 'Siti Nur Azizah', description: 'Mahasiswi Universitas Muhammadiyah Sukabumi.' },
    { id: '2', name: 'Raina Rahmawati', description: 'Mahasiswi Universitas Muhammadiyah Sukabumi.' },
     { id: '2', name: 'Ira Tri Jayanti', description: 'Mahasiswi Universitas Muhammadiyah Sukabumi.' },
      { id: '2', name: 'Aldi Ramadhani', description: 'Mahasiswa Universitas Muhammadiyah Sukabumi.' },
  // Tambahkan teman lainnya di sini
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Teman</Text>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('About', { friend: item })}>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
  },
});

export default Home;
