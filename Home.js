import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNav from './BottomNav';
import { UserContext } from './UserContext';

export default function Home({ navigation, route }) {
  const { stories } = useContext(UserContext); // Fetch stories from context
  const [searchText, setSearchText] = useState('');
  const [filteredStories, setFilteredStories] = useState(stories);

  // Update filtered stories when filters are applied
  useEffect(() => {
    if (route.params?.filters) {
      const selectedFilters = route.params.filters;

      if (selectedFilters.includes('All Stories')) {
        // Show all stories
        setFilteredStories(stories);
      } else {
        // Filter stories based on selected tags
        const updatedStories = stories.filter((story) =>
          story.tags.some((tag) => selectedFilters.includes(tag))
        );
        setFilteredStories(updatedStories);
      }
    }
  }, [route.params?.filters, stories]);

  // Update filtered stories when search text changes
  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredStories(stories);
    } else {
      const lowerCaseSearch = searchText.toLowerCase();
      setFilteredStories(
        stories.filter((story) =>
          story.title.toLowerCase().includes(lowerCaseSearch)
        )
      );
    }
  }, [searchText, stories]);

  // Render individual story cards
  const renderStoryCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('FullStory', { story: item })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>
        {item.description.length > 100
          ? item.description.substring(0, 100) + '...'
          : item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Folklore</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={24} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Stories..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
            <Icon name="filter" size={20} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Stories */}
      <FlatList
        data={filteredStories}
        keyExtractor={(item) => item.id}
        renderItem={renderStoryCard}
        contentContainerStyle={styles.storyList}
      />

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} currentPage="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#800000',
  },
  settingsIcon: {
    color: '#800000',
  },
  searchBarContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 1,
    height: 40,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  filterIcon: {
    marginLeft: 10,
    color: '#800000',
  },
  storyList: {
    paddingBottom: 60,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  username: {
    fontWeight: 'bold',
    color: '#800000',
  },
  time: {
    color: '#888',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});
