import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomNav({ navigation, currentPage }) {
  return (
    <View style={styles.navBar}>
      {/* Home */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={24} style={[styles.icon, currentPage === 'Home' && styles.activeIcon]} />
      </TouchableOpacity>

      {/* Filters */}
      <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
        <Icon name="filter" size={24} style={[styles.icon, currentPage === 'Filters' && styles.activeIcon]} />
      </TouchableOpacity>

      {/* Notes */}
      <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
        <Icon name="book" size={24} style={[styles.icon, currentPage === 'Notes' && styles.activeIcon]} />
      </TouchableOpacity>

      {/* Account Info */}
      <TouchableOpacity onPress={() => navigation.navigate('AccountInfo')}>
        <Icon name="user" size={24} style={[styles.icon, currentPage === 'AccountInfo' && styles.activeIcon]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  icon: {
    color: '#800000',
  },
  activeIcon: {
    color: '#FF4500',
  },
});
