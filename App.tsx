import { Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Delivery from './Component/Delivery';
import 'react-native-gesture-handler'
import History from './Component/History';
import { NavigationContainer } from '@react-navigation/native';
import Loginpage from './Component/Loginpage';
import { createStackNavigator } from '@react-navigation/stack';
import PizzaRicotta from './Component/PizzaRicotta';
import Rahath from './Component/Rahath';
import Midway from './Component/Midway';
import Oottupura from './Component/Oottupura';
import FarzaHotel from './Component/FarzaHotel';



const App = () => {

const Stack = createStackNavigator();;
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}}  name='Loginpage' component={Loginpage} />
        <Stack.Screen options={{headerShown:false}}  name='Delivery' component={Delivery} />
        <Stack.Screen options={{headerShown:false}} name='PizzaRicotta' component={PizzaRicotta} />
        <Stack.Screen options={{headerShown:false}} name='Rahath' component={Rahath} />
        <Stack.Screen options={{headerShown:false}} name='Oottupura' component={Oottupura} />
        <Stack.Screen options={{headerShown:false}} name='Midway' component={Midway} />
        
        <Stack.Screen options={{headerShown:false}} name='FarzaHotel' component={FarzaHotel} />


      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})
