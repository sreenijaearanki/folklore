import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const tagList = [
  'All Stories',
  'Abortion',
  'Miscarriage',
  'Infertility',
  'Live Birth',
  'Termination of Wanted Pregnancy',
];

export default function Filters({ navigation, route }) {
  const [selectedTags, setSelectedTags] = useState(['All Stories']);

  const toggleTag = (tag) => {
    if (tag === 'All Stories') {
      setSelectedTags(['All Stories']); // Reset to show all stories
    } else {
      setSelectedTags((prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((t) => t !== tag)
          : [...prevTags.filter((t) => t !== 'All Stories'), tag]
      );
    }
  };

  const applyFilters = () => {
    navigation.navigate('Home', { filters: selectedTags });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Filter Story Tags</Text>
      <View style={styles.tagsContainer}>
        {tagList.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[
              styles.tag,
              selectedTags.includes(tag) ? styles.tagSelected : null,
            ]}
            onPress={() => toggleTag(tag)}
          >
            <Text
              style={[
                styles.tagText,
                selectedTags.includes(tag) ? styles.tagTextSelected : null,
              ]}
            >
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    margin: 5,
  },
  tagSelected: {
    backgroundColor: '#800000',
  },
  tagText: {
    fontSize: 14,
    color: '#555',
  },
  tagTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#800000',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
