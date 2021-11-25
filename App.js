import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import {Focus} from './src/features/focus/Focus'
import {Timer} from './src/features/Timer/Timer'
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';
import { useKeepAwake } from 'expo-keep-awake';

export default function App() {
  useKeepAwake();
  const [focusSubject, setFocusSubject]=useState('Timer');
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject}></Timer>
      ):(
        <Focus addSubject= {setFocusSubject}></Focus>
      )}
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS=='ios'? 
      spacing.md:spacing.lg,
    backgroundColor: colors.darkblue,
  },
});











