import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function NotesScreen() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);

  const handleAddNote = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Error', 'Title and content cannot be empty.');
      return;
    }

    if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = { title: title.trim(), content: content.trim() };
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      setNotes([...notes, { title: title.trim(), content: content.trim() }]);
    }

    setIsDetailView(false);
    setTitle('');
    setContent('');
  };

  const handleBack = () => {
    setIsDetailView(false);
    setTitle('');
    setContent('');
    setEditingIndex(null);
  };

  const handleEditNote = (index) => {
    setTitle(notes[index].title);
    setContent(notes[index].content);
    setEditingIndex(index);
    setIsDetailView(true);
  };

  const handleDeleteNote = (index) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this note?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setNotes(notes.filter((_, i) => i !== index));
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {isDetailView ? (
        <View style={styles.detailContainer}>
          <Text style={styles.title}>
            {editingIndex !== null ? 'Edit Note' : 'Add Note'}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Title of your note"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={[styles.input, styles.contentInput]}
            placeholder="Write your note content here"
            value={content}
            onChangeText={setContent}
            multiline
          />

          <View style={styles.buttonContainer}>
            <Button title="Save Note" onPress={handleAddNote} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Back" onPress={handleBack} color="#888" />
          </View>
        </View>
      ) : (
        <View style={styles.mainView}>
          <Text style={styles.title}>Nexus Notes</Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setIsDetailView(true)}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <View style={styles.cardContainer}>
            {notes.length === 0 ? (
              <Text style={styles.emptyText}>No notes added yet!</Text>
            ) : (
              notes.map((item, index) => (
                <View key={index} style={styles.noteContainer}>
                  <TouchableOpacity onPress={() => handleEditNote(index)}>
                    <Text style={styles.noteTitle}>{item.title}</Text>
                  </TouchableOpacity>
                  <Text style={styles.noteContent}>{item.content}</Text>
                  <View style={styles.actionButtons}>
                    <TouchableOpacity
                      style={[styles.button, styles.deleteButton]}
                      onPress={() => handleDeleteNote(index)}
                    >
                      <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  contentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  noteContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
    width: '30%',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  noteContent: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 20,
    fontStyle: 'italic',
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
