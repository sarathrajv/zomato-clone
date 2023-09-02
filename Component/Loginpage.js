import { Image, StyleSheet, Text, TouchableOpacity, View,TextInput, } from 'react-native'
import React from 'react'




const Loginpage = ({navigation}) => {



  return (
    <View>
      <View style={{width:'100%',height:350,backgroundColor:'red'}}>
        
       
        <Image source={require('./image/poster.png')} style={{width:'100%',height:350,objectFit:'cover'}}/>

      </View>
      <View style={{width:'100%',height:80,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
        <Text style={{textAlign:'center',fontSize:23,fontWeight:600,color:'black',backgroundColor:'white',width:'70%',}}>India's #1 Food Delivery and Dining App</Text>

      </View>
      <View style={{width:'100%',height:20,backgroundColor:'white',}}>
        <Text style={{textAlign:'center'}} >Login Or Signup</Text>
      </View>
      <View style={{width:'100%',height:80,backgroundColor:'white',flexDirection:'row'}}>
        <View style={{ backgroundColor:'white', width:'25%',height:80,alignItems:'center',justifyContent:'center'}}>
          <View style={{width:'70%',height:'60%',borderWidth:0.25,borderColor:"grey",borderRadius:6,alignItems:'center',justifyContent:'center' }}>
            <Image source={require('./image/india.jpg')} style={{width:35,height:30, borderRadius:6}}/>

          </View>

        </View>
        <View style={{ backgroundColor:'white', width:'75%',height:80,alignItems:'center',justifyContent:'center',flexDirection:'row'}} >
          
          <View style={{width:'10%'}} >
            <Text style={{color:'black'}}>+91</Text>
          </View>
          <View style={{width:'90%'}} >
          <TextInput keyboardType='phone-pad'  placeholder='Phonenumber' style={{width:"90%",height:"60%",borderWidth:0.25, borderColor:"grey",borderRadius:6}} />
          </View>

        </View>

      </View>
      <View style={{width:'100%',backgroundColor:'white',height:60,alignItems:'center',justifyContent:'center'}} >
        <View  style={{width:'85%',backgroundColor:'#ed301a',height:40,alignItems:'center',justifyContent:'center',borderRadius:8}}>
        
      <TouchableOpacity  onPress={()=>navigation.navigate('Delivery')}>
        
        <Text style={{fontSize:18,textAlign:'center',color:'white'}}>Continue</Text>
        
        </TouchableOpacity>
        </View>

       

      </View>
      <View style={{width:'100%',height:20,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <Text style={{textAlign:'center',fontSize:15,color:'black'}} >OR</Text>

      </View>
<View style={{width:'100%',height:80,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center',}} >
  <View style={{backgroundColor:'white',flexDirection:'row',width:200,justifyContent:'space-evenly'}}>
  <View style={{width:60,height:60,backgroundColor:"white",borderRadius:50,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'grey'}} >
<Image style={{width:30,height:30}} source={require('./image/google.png')}/>
  </View>
  <View  style={{width:60,height:60,backgroundColor:"white",borderRadius:50,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'grey'}} >
<Image style={{width:30,height:30}} source={require('./image/more.png')} />
  </View>
  </View>

</View>
<View style={{width:'100%',height:115,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
  <Text style={{color:'black',fontSize:13}}>By continuing,you agree to our</Text>
  <Text style={{color:'black',fontSize:13}}>Terms of Service Privacy Policy Content Policy</Text>

</View>



    </View>
  )
}

export default Loginpage

const styles = StyleSheet.create({})