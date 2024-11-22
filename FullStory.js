import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FullStory({ route }) {
  const { story } = route.params; // Get the story details from the route parameters

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{story.title}</Text>
        <Text style={styles.author}>by {story.tag}</Text>
        <Text style={styles.description}>{story.description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});
