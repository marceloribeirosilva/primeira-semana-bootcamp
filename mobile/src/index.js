import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';

import api from './services/api'

export default function App(){
  const [projects, setProjects] = useState([]);

  function handleGetProjects() {
    api.get('/projects').then(response => {
      console.log(response.data)
      //setProjects(response.data);
    })
  };

  // useEffect(() => {
  //   try {
  //     api.get('/projects').then(response => {
  //       console.log(response.data)
  //       //setProjects(response.data);
  //     })

  //   } catch (err) {

  //     console.error(err);
  //   }
  // }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
      </View>
      <Button 
        onPress = {handleGetProjects}
        title = "Get Projects"
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});