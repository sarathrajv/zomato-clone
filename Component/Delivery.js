import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DelivaryNew from './DelivaryNew';
import History from './History';
const Delivery = () => {
  const Tab = createBottomTabNavigator();
  return (
<View style={{height:'100%'}}>
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
    }}>
  <Tab.Screen name='DelivaryNew'component={DelivaryNew} options={{
    title:'Delivery',
    
    tabBarIcon:({focused})=>{
return(
  <Image  source={require('./image/delivery-man.png')}style={{tintColor:focused ?'red':'black',width:32,height:32}} />
)
    }

    
  }} />
  <Tab.Screen name='History' component={History}options={{
     tabBarIcon:({focused})=>{
return(
  <Image  source={require('./image/manuscript.png')}style={{tintColor:focused ?'red':'black',width:32,height:32}} />
)
    }}} />
  </Tab.Navigator>
  </View>
  )
}

export default Delivery

const styles = StyleSheet.create({})