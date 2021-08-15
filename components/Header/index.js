import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";

const Header = () => {
    return(
        <View style={styles.container}>
            <Image 
            source={{uri:'https://www.freepnglogos.com/uploads/tesla-logo-png-20.png'}}
            style={styles.logo}
            />
            
            <Image 
            source={{uri:'http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png'}}
            style={styles.menu}
            />
        </View>
    );
};

export default Header