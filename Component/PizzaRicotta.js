import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const PizzaRicotta = ({navigation}) => {
  return (
    <ScrollView>
    <View>
      <View style={{width:'100%',height:45,backgroundColor:'white',flexDirection:'row'}}>
        <View style={{width:'60%',height:45,backgroundColor:'white',justifyContent:'flex-start'}} >
          <View style={{width:40,height:45,backgroundColor:'white',alignItems:'center',justifyContent:'center'}} >
          <Image style={{width:25,height:25}} source={require('./image/leftarrow.png')} />
          </View>
        </View>
        <View style={{width:'40%',height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}} >
          <Image style={{width:25,height:25}} source={require('./image/serch.png')} />
          <Image style={{width:25,height:25}} source={require('./image/heart.png')} />
          <Image style={{width:25,height:25}} source={require('./image/share.png')} />
          <Image style={{width:25,height:25}} source={require('./image/menu2.png')} />
        </View>

      </View>
      <View style={{width:'100%',height:20 ,backgroundColor:'white',}}>
        

      </View>
      <View style={{width:'100%',height:40 ,backgroundColor:'white',alignItems:'center',}}>
      <Text style={{fontSize:30,fontWeight:600,color:'black',}} >Pizza Ricotta</Text>

      </View>
      <View style={{width:'100%',backgroundColor:'yellow',height:20,alignItems:'center'}}>
        <View style={{width:'70%',height:20,backgroundColor:'brown'}} >
          

        </View>


      </View>
      
    </View>
    </ScrollView>
  )
}

export default PizzaRicotta

const styles = StyleSheet.create({})