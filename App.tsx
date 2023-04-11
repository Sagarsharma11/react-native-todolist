/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  TextInput,
  View,
} from 'react-native';


function App(): JSX.Element {
  const [task,setTask] = useState([])
  const [text,setText] = useState('')
  const addToDo = ()=>{
    if (text.length > 0) {
      const newTodos:any = [...task, text ];
      setTask(newTodos);
      console.log('tasks ',task)
      setText('');
    }
  }

  return (
    <SafeAreaView >
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sizeMain}>
          <Text style={styles.headingText}>
            To do List
          </Text>
          <View>
            <View style={styles.card1}>
                {
               
                  task.map((e)=>{
                    return <Text style={styles.taskText}>{e}</Text>
                  })
                }
            </View>
            <View style={styles.card2}>
              <TextInput
                style={styles.inputBox}
                placeholder="useless placeholder"
                keyboardType="numeric"
                onChangeText={setText}
              />
              <Button
                title="Add Tasks"
                color="blue"
                accessibilityLabel="Add task"
                onPress={addToDo}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'white',
    marginTop:6
  },
  taskText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'blue',
    marginTop:6
  },
  sizeMain: {
    height: 800,
    width: 400,
    backgroundColor: '#20232A',
    margin: 5,
    flex: 1,
    alignItems: "center"
  },
  card1: {
    height: 200,
    width: 400,
    backgroundColor: 'white',
    margin: 1,
    marginTop:14,
    flex: 14
  },
  card2: {
    height: 200,
    width: 400,
    backgroundColor: 'white',
    margin: 1,
    flex: 3
  },

  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

});

export default App;
