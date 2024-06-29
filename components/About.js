// components/About.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default About;
