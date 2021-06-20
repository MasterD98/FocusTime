import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput} from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus= ({addSubject})=> {
  const[tmpItem,setTmpItem]=useState(null);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>What would you like to focus on</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInputContainer}
            onSubmitEditing={({nativeEvent})=>{
              setTmpItem(nativeEvent.text)
            }}/>
            <RoundedButton size={50} title='+' onPress={()=>{
              addSubject(tmpItem)
            }}></RoundedButton>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
  },
  titleContainer:{
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title:{
    color:'white',
    fontWeight:'bold',
    fontSize: 24
  },
  inputContainer:{
    paddingTop: 20,
    flexDirection:'row',
    alignItems:'center'
  },
  textInputContainer:{
    flex:1,
    marginRight:20,
  }
});



 