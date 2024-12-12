import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Note {
  title: string;
  content: string;
  createdBy: string; // Field untuk menyimpan nama pembuat catatan
}

const notesData: Note[] = [
  { title: 'Meeting Notes', content: 'Discuss project timelines...', createdBy: 'Pakde Owi' },
  { title: 'Shopping List', content: 'Milk, Bread, Eggs...', createdBy: 'Radenta' },
  { title: 'Workout Plan', content: 'Monday: Cardio, Tuesday: Strength...', createdBy: 'Bang fufufafa' },
  // Tambahkan lebih banyak catatan di sini
];

export default function NotesAdmin() {
  const renderNote = ({ item }: { item: Note }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.titleCell]}>{item.title}</Text>
      <Text style={[styles.cell, styles.contentCell]} numberOfLines={1}>
        {item.content}
      </Text>
      <Text style={[styles.cell, styles.createdByCell]}>{item.createdBy}</Text>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => handleViewNote(item)}
      >
        <Text style={styles.viewButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  const handleViewNote = (note: Note) => {
    // Handle action ketika tombol "View" ditekan
    alert(`Viewing Note:\n\nTitle: ${note.title}\nContent: ${note.content}\nCreated By: ${note.createdBy}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Nexus Notes</Text>
      <View style={styles.tableHeader}>
        <Text style={[styles.headerCell, styles.titleCell]}>Title</Text>
        <Text style={[styles.headerCell, styles.contentCell]}>Content</Text>
        <Text style={[styles.headerCell, styles.createdByCell]}>Created By</Text>
        <Text style={styles.headerCell}>Action</Text>
      </View>
      <FlatList
        data={notesData}
        renderItem={renderNote}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  headerCell: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  cell: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  titleCell: {
    flex: 2,
  },
  contentCell: {
    flex: 3,
  },
  createdByCell: {
    flex: 2,
  },
  viewButton: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 5,
  },
  viewButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    marginTop: 5,
  },
});
