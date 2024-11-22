import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from './UserContext';

export default function AccountInfo({ navigation }) {
  const { user } = useContext(UserContext); // Access user data from context

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Information</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user?.name || 'N/A'}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email || 'N/A'}</Text>
      </View>

      {/* Password (Not Recommended in real apps) */}
      {/*
      <View style={styles.infoBox}>
        <Text style={styles.label}>Password:</Text>
        <Text style={styles.value}>{user?.password || 'N/A'}</Text>
      </View>
      */}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          navigation.navigate('Main'); // Navigate back to Main
        }}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 20,
  },
  infoBox: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#800000',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
