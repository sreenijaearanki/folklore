import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNav from './BottomNav'; // Update the path based on the location of BottomNav.js

export default function FullStory({ route, navigation }) {
  const { story } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{story.username}</Text>
        <Text style={styles.time}>{story.time}</Text>
      </View>

      {/* Story Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{story.title}</Text>
        <Text style={styles.content}>{story.fullContent}</Text>
      </View>

      {/* Tags */}
      <View style={styles.tagsContainer}>
        {story.tags.map((tag, index) => (
          <TouchableOpacity key={index} style={styles.tagButton}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} currentPage="FullStory" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backIcon: {
    marginRight: 10,
    color: '#800000',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800000',
    flex: 1,
  },
  time: {
    color: '#888',
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  tagButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: '#800000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
