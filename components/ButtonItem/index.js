import React from "react";
import { Pressable, Text, View } from "react-native";
import style from "./styles";

const ButtonItem = (props) => {
    const {type, content, onPress} = props
  

    const backgroundColor = type === 'primary' ? '#232323' : 'white'
    const textColor = type === 'primary' ? 'white' : '#232323'

    return(
    <View style= {style.container}> 
        <Pressable
            style={[style.button, {backgroundColor: backgroundColor}]}
            onPress={() => onPress()}
        >

        <Text style={[style.text, {color: textColor}]}>{content}</Text> 
        </Pressable>
    </View>)
};

export default ButtonItem; 