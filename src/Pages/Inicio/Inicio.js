import React from 'react';
import {View, Text} from 'react-native'
import estilo from './estilo';

const Inicio = ({route, navigation}) => {
    return (
        <View style={estilo.container}>
            <Text>Página Inicial</Text>
            <Text>{route.params?.email}</Text>
        </View>
    )
}

export default Inicio