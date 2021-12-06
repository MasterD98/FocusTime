import { StatusBar } from 'expo-status-bar';
import React, { useState ,useEffect } from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import {Focus} from './src/features/focus/Focus'
import {Timer} from './src/features/Timer/Timer'
import {FocusHistory} from './src/features/focus/FocusHistory'
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

const STATUSE={
  COMPLETE:1,
  CANCELLED:2,
}

export default function App() {
  const [focusSubject, setFocusSubject]=useState(null);
  const [focusHistory,setFocusHistory]=useState([]);
  
  const addFocusHistorySubjectWithState=(subject,status)=>{
    setFocusHistory([...focusHistory,{subject,status}])
  }
  const onClear=()=>{
    setFocusHistory([]);
  }


  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject}
          onTimerEnd={()=>{
            addFocusHistorySubjectWithState(focusSubject,STATUSE.COMPLETE)
            setFocusSubject(null)
          }}
          clearSubject={
            ()=>{
              addFocusHistorySubjectWithState(focusSubject,STATUSE.CANCELLED)
              setFocusSubject(null)
            }
          }
        />
      ):(
        <>
          <Focus addSubject= {setFocusSubject}/>
          <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
        </>
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











