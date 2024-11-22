import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { UserContext } from './UserContext';

export default function AddStory({ navigation }) {
  const { stories, setStories } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddStory = () => {
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert('Error', 'Both title and story content are required.');
      return;
    }

    const newStory = {
      id: (stories.length + 1).toString(),
      username: 'Anonymous', // You can replace it with the logged-in user
      time: 'Just now',
      title,
      description,
      tags: [], // Optionally allow the user to add tags later
    };

    setStories([newStory, ...stories]); // Add the new story to the top
    Alert.alert('Success', 'Your story has been added!');
    setTitle('');
    setDescription('');
    navigation.navigate('Home'); // Redirect to the home screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add a New Story</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Write your story here..."
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={5}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleAddStory}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#800000',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
