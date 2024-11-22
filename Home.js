import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNav from './BottomNav';

const stories = [
  {
    id: '1',
    username: 'storyteller_213',
    time: '2hr',
    title: 'This is my abortion story',
    description:
      'I was 22 and had been dating my boyfriend for 3 years when I first thought I might be pregnant...',
    tags: ['Abortion', 'BIPOC', '1st trimester'],
  },
  {
    id: '2',
    username: 'Binks<3',
    time: '3d',
    title: 'My and my husband’s journey with IVF',
    description:
      'My husband and I talked about wanting kids for years before deciding it was the right time...',
    tags: ['Infertility', '2nd trimester'],
  },
];

export default function Home({ navigation, route }) {
  const [searchText, setSearchText] = useState('');
  const [filteredStories, setFilteredStories] = useState(stories);

  useEffect(() => {
    if (route.params?.filters) {
      const selectedFilters = route.params.filters;
      if (selectedFilters.includes('All Stories')) {
        setFilteredStories(stories); // Show all stories
      } else {
        setFilteredStories(
          stories.filter((story) =>
            story.tags.some((tag) => selectedFilters.includes(tag))
          )
        );
      }
    }
  }, [route.params?.filters]);

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
  }, [searchText]);

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
    paddingTop: 40, // Ensure content is not pushed under the status bar
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
    paddingBottom: 60, // Prevent content from overlapping the navigation bar
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
