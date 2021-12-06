import React from "react";
import {View,StyleSheet,FlatList,Text,SafeAreaView} from 'react-native';
import {fontSizes,spacing} from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";

const historyItems=({item,index})=>{
    console.log(item)
    return(
        <Text style={ {color:item.status >1? 'red' :'green',fontSize:fontSizes.md}   }>{item.subject}</Text>
    )
}

export const FocusHistory=({focusHistory,onClear})=>{
    const clearHistory=()=>{
        onClear()
    }
    return(
        <>
            <SafeAreaView style={{flex:0.5,alignItems:"center"}}>
                {!!focusHistory.length && (
                    <>
                        <Text style={styles.title}>Things we've focused on</Text>
                        <FlatList
                            style={{flex:1}}
                            contentContainerStyle={{flex:1,alignItems:"center"}}
                            data={focusHistory}
                            renderItem={historyItems}
                        />
                    </>
                )}
            </SafeAreaView>
        </>
    )
}

const styles=StyleSheet.create({
    title:{
        color:'white',
        fontSize:fontSizes.lg
    }
})