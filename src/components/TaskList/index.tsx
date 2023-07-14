import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ITasksContext, TasksContext} from '../../context/TasksContext';

export const TaskList = () => {
  const tasks = React.useContext(TasksContext);
  return (
    <FlatList
      data={tasks as unknown as ITasksContext[]}
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
