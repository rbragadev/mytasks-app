import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Task {
  id: string;
  title: string;
}
interface TaskListProps {
  tasks: Task[];
}
export const TaskList = ({tasks}: TaskListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.buttonTask}>
          <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
      )}></FlatList>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#f1f1f1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
});
