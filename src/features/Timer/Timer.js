import React, { useState } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { Coundtdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';

export const Timer=({focusSubject})=>{
    const [isStarted,setIsStarted]=useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Coundtdown isPaused={!isStarted}/>
            </View>
            <View style={{paddingTop:spacing.xxl}} >
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted ? (
                    <RoundedButton title='start' onPress={()=>setIsStarted(true)}/>
                ):(
                    <RoundedButton title='pause' onPress={()=>setIsStarted(false)}/>
                )}
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        color:colors.white,
        textAlign:'center',
    },
    task:{
        color:colors.white,
        textAlign:'center',
        fontWeight:'bold',
    },
    countdown:{
        alignItems:'center',
        justifyContent:'center',
    },
    buttonWrapper:{
        flex:0.3,
        padding:15,
        justifyContent:'center',
        alignItems:'center'
    }
})
