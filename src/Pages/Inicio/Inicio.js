import React from 'react';
import {View, Text} from 'react-native'
import estilo from './estilo';

const Inicio = ({route, navigation}) => {
    const {email} = route.params
    return (
        <View style={estilo.container}>
            <Text>Página Inicial</Text>
            <Text>{email}</Text>
        </View>
    )
}

export default Inicio