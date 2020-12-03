import React from 'react';
import {View, Text, Button} from 'react-native'
import estilo from './estilo';

const Tab2 = ({navigation}) => {
    return (
        <View style={estilo.container}>
            <Text>Tab 2</Text>
            <Button 
            title="Abrir menu" 
            onPress={() => navigation.openDrawer()} 
            />
        </View>
    )
}

export default Tab2