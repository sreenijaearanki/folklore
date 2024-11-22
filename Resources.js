import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Resources() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Resources</Text>
      <View style={styles.section}>
        <Text style={styles.heading}>Abortion Pills</Text>
        <Text style={styles.content}>
          Abortion pills are a safe and effective way to terminate a pregnancy within the first
          trimester. Contact your local healthcare provider or visit organizations like Planned
          Parenthood for assistance.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Support Groups</Text>
        <Text style={styles.content}>
          Join support groups to share your experiences or seek guidance. Websites like
          PostAbortionHelp.org provide resources and forums.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Helpline</Text>
        <Text style={styles.content}>Call 1-800-123-4567 for confidential help and support.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: '#555',
  },
});
