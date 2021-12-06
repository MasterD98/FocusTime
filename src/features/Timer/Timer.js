import React, { useState } from 'react';
import {View,StyleSheet,Text,Vibration,Platform} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import { Coundtdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { useKeepAwake } from 'expo-keep-awake';

const DEFAULT_TIME=0.1;

export const Timer=({focusSubject,onTimerEnd,clearSubject})=>{
    useKeepAwake()
    const [timeInMin,setTimeInMin]=useState(DEFAULT_TIME);
    const [isStarted,setIsStarted]=useState(false);
    const [progress,setProgress]=useState(1);
    const onProgress=(progress)=>{
        setProgress(progress)
    }

    const vibrate=()=>{
        if(Platform.OS=='ios'){
            const intervel=setInterval(()=>Vibration.vibrate(),1000)
            setTimeout(()=>{clearInterval(intervel)},10000)
        }else{
            Vibration.vibrate(10000)
        }
    }

    const onEnd=()=>{
        vibrate()
        setTimeInMin(DEFAULT_TIME)
        setProgress(1)
        setIsStarted(false)
        onTimerEnd()
    }

    const changeTime=(min)=>{
        setTimeInMin(min)
        setProgress(1)
        setIsStarted(false)
    }

    return(
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Coundtdown 
                    timeInMin={timeInMin}  
                    isPaused={!isStarted} 
                    onProgress={onProgress} 
                    onEnd={onEnd}
                />
            </View>
            <View style={{paddingTop:spacing.xxl}} >
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
                <View style={{paddingTop:spacing.sm}}>
                    <ProgressBar 
                        progress={progress} 
                        color='#5E84E2' 
                        style={{height:10}}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Timing onChangeTime={changeTime}/>
                </View>
                <View style={styles.buttonWrapper}>
                    {!isStarted ? (
                        <RoundedButton 
                            title='start' 
                            onPress={()=>setIsStarted(true)}
                        />
                    ):(
                        <RoundedButton 
                            title='pause' 
                            onPress={()=>setIsStarted(false)}
                        />
                    )}
                    <RoundedButton 
                        title='-'
                        size={50} 
                        onPress={()=>clearSubject()}
                    />
                </View>
                {/*<view style={styles.clearSubject}>
                    dss
                    </view>*/}
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
        alignItems:'center',
        paddingBottom:25,
        paddingLeft:25,
    },
    clearSubject:{
        
    }
})
