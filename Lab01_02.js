import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Lab01_02 =() => {
    return(
    <View style={MyStyle.container}>
        <Button title="Button 1" onPress={()=> alert("hello 1")}></Button>
        <TouchableOpacity style={MyStyle.button} onPress={()=>alert("hello 2")}>
            <Text style={MyStyle.text}>
                 Button 2
            </Text>
        </TouchableOpacity>
    </View>
    )
}
export default Lab01_02;
const MyStyle = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center'
        },
        button:{
            backgroundColor: "blue",
            marginTop:10,
            alignItems: "center",
            padding:10
        },
        text:{
            color:"white",
            fontSize:18
        }
    }
)