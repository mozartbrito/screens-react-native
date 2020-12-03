import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Login} from './src/Pages/Login'
import {Inicio} from './src/Pages/Inicio'
import {Tab1} from './src/Pages/Tab1'
import {Tab2} from './src/Pages/Tab2'

const Navegacao = createStackNavigator();
const NavegacaoTabs = createBottomTabNavigator();
const NavegacaoDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoDrawer.Navigator>
        <NavegacaoDrawer.Screen name="Tab1" component={Tab1} />
        <NavegacaoDrawer.Screen name="Tab2" component={Tab2} />
      </NavegacaoDrawer.Navigator>
    
    </NavigationContainer>

/* <NavegacaoTabs.Navigator>
<NavegacaoTabs.Screen name="Tab1" component={Tab1} />
<NavegacaoTabs.Screen name="Tab2" component={Tab2} />
<NavegacaoTabs.Screen name="Inicio" component={Inicio} />
</NavegacaoTabs.Navigator> */

    /* <NavigationContainer>
      <Navegacao.Navigator>
        <Navegacao.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown: false
          }}
        />
        <Navegacao.Screen name="Inicio" component={Inicio} />
      </Navegacao.Navigator>
    </NavigationContainer> */
  );
}
