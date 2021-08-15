import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import ButtonItem from '../ButtonItem';
import styles from './styles';


const CarItem = (props) => {
    
    const { name, tag, image } = props.car;
    
    return(
        <View style={styles.carContainer}>

            <ImageBackground
            source={image}
            style={styles.image}
            />
            
            <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{tag}</Text>
            </View>

            <View style={styles.buttonContainer}> 
            <ButtonItem 
                type='primary' 
                content={'Custom Order'}
                onPress={() => {
                  console.warn('Custom button pressed')
                 }}
            />
            <ButtonItem  
                type='secondary'
                content={'Existing Inventory'}
                onPress={() => {
                  console.warn('Existing buttton pressed')
                }}
            />
            </View>
            

        </View>
    )
};

export default CarItem;
