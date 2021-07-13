import React, { useState } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import { Coundtdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';

export const Timer=({focusSubject})=>{
    const [timeInMin,setTimeInMin]=useState(0.1);
    const [isStarted,setIsStarted]=useState(false);
    const [progress,setProgress]=useState(1);
    const onProgress=(progress)=>{
        setProgress(progress)
    }

    const changeTime=(min)=>{
        setTimeInMin(min)
        setProgress(1)
        setIsStarted(false)
    }

    return(
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Coundtdown timeInMin={timeInMin}  isPaused={!isStarted} onProgress={onProgress}/>
            </View>
            <View style={{paddingTop:spacing.xxl}} >
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
                <View style={{paddingTop:spacing.sm}}>
                    <ProgressBar progress={progress} color='#5E84E2' style={{height:10}}/>
                </View>
                <View style={styles.buttonWrapper}>
                    <Timing onChangeTime={changeTime}/>
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
        flexDirection:'row',
        padding:15,
        justifyContent:'center',
        alignItems:'center'
    }
})
