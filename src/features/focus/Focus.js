import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput} from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import {fontSizes,spacing} from '../../utils/sizes' 

export const Focus= ({addSubject})=> {
  const[tmpItem,setTmpItem]=useState(null);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>What would you like to focus on a</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInputContainer}
            onSubmitEditing={({nativeEvent})=>{
              setTmpItem(nativeEvent.text)
            }}/>
          <RoundedButton size={50} title='+' onPress={()=>{addSubject(tmpItem)}
            }/>
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
    padding: spacing.md,
    justifyContent: 'center',
  },
  title:{
    color:colors.white,
    fontWeight:'bold',
    fontSize: fontSizes.lg
  },
  inputContainer:{
    paddingTop: spacing.md,
    flexDirection:'row',
    alignItems:'center'
  },
  textInputContainer:{
    flex:1,
    marginRight:spacing.md,
  }
});



 