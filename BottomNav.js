import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomNav({ navigation, currentPage }) {
  return (
    <View style={styles.navbar}>
      {/* Home Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={[styles.navItem, currentPage === 'Home' && styles.active]}
      >
        <Icon name="home" size={24} style={styles.icon} />
      </TouchableOpacity>

      {/* Add Story Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddStory')} // Navigate to AddStory
        style={[styles.navItem, currentPage === 'AddStory' && styles.active]}
      >
        <Icon name="plus" size={24} style={styles.icon} />
      </TouchableOpacity>

      {/* Resources Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Resources')}
        style={[styles.navItem, currentPage === 'Resources' && styles.active]}
      >
        <Icon name="book" size={24} style={styles.icon} />
      </TouchableOpacity>

      {/* Account Info Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AccountInfo')}
        style={[styles.navItem, currentPage === 'AccountInfo' && styles.active]}
      >
        <Icon name="user" size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    color: '#800000',
  },
  active: {
    borderTopWidth: 2,
    borderTopColor: '#800000',
  },
});
