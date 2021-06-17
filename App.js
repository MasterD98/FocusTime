import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Focus} from './src/features/focus/Focus'

export default function App() {
  const [focusSubject, setFocusSubject]=useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where Im going to build a timer</Text>
      ):(
        <Focus></Focus>
      )}
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
