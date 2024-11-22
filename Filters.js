import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const filtersData = [
  { id: '0', label: 'All Stories' },
  { id: '1', label: 'Abortion' },
  { id: '2', label: 'Miscarriage' },
  { id: '3', label: 'Infertility' },
  { id: '4', label: 'Live Birth' },
  { id: '5', label: 'Termination of Wanted Pregnancy' },
];

export default function Filters({ navigation }) {
  const [selectedFilters, setSelectedFilters] = useState([]); // Track selected filters

  const toggleFilter = (filter) => {
    if (filter === 'All Stories') {
      // If "All Stories" is selected, clear all other filters
      setSelectedFilters(['All Stories']);
    } else {
      // Deselect "All Stories" if other filters are selected
      if (selectedFilters.includes('All Stories')) {
        setSelectedFilters([filter]);
      } else {
        // Toggle other filters
        if (selectedFilters.includes(filter)) {
          setSelectedFilters(selectedFilters.filter((item) => item !== filter));
        } else {
          setSelectedFilters([...selectedFilters, filter]);
        }
      }
    }
  };

  // Apply filters and go back to Home
  const applyFilters = () => {
    navigation.navigate('Home', { filters: selectedFilters });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Story Tags</Text>
      <View style={styles.filtersContainer}>
        {filtersData.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterButton,
              selectedFilters.includes(filter.label) && styles.selectedFilterButton,
            ]}
            onPress={() => toggleFilter(filter.label)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedFilters.includes(filter.label) && styles.selectedFilterButtonText,
              ]}
            >
              {filter.label}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 20,
  },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedFilterButton: {
    backgroundColor: '#800000',
  },
  filterButtonText: {
    color: '#555',
    fontWeight: 'bold',
  },
  selectedFilterButtonText: {
    color: '#fff',
  },
  applyButton: {
    backgroundColor: '#800000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
