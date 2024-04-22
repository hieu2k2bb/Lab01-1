import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Lab01_01 = ()=>{
    return(
        <View style={MyStyle.ViewStyle}>
            <Text style={MyStyle.TextStyle}> Hello World</Text>
        </View>
    );
}
export default Lab01_01;
var MyStyle = StyleSheet.create(
    {
        ViewStyle: {
            width: 100,
            height: 100,
            backgroundColor: 'aqua',
            alignItems: 'center',
            justifyContent: 'center',
        },
        TextStyle: {
            color: 'black'
        }
    }
)