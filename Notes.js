import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <Text style={styles.content}>This page will display notes related to stories or user activity.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});
