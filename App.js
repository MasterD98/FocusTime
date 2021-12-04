import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import {Focus} from './src/features/focus/Focus'
import {Timer} from './src/features/Timer/Timer'
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject]=useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject}
          onTimerEnd={()=>{
            setFocusSubject(null)
          }}
        />
      ):(
        <Focus addSubject= {setFocusSubject}/>
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











