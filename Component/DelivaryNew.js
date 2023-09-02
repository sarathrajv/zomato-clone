import {Image, StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';
import React from 'react';
import {goal} from './Datas';
import { resto } from './Datas';

import {ScrollView, TextInput} from 'react-native-gesture-handler';

const DelivaryNew = ({navigation}) => {
  return (
    <ScrollView style={{flexGrow: 1}}>
      <View>
        <View
          style={{
            width: '100%',
            height: 70,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 110,
              height: 70,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 3,
              justifyContent: 'space-around',
            }}>
            <View>
              <Image
                style={{width: 20, height: 20}}
                source={require('./image/pin.png')}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black', fontWeight: 600, fontSize: 18}}>
                  Kochi
                </Text>
                <Image
                  style={{width: 15, height: 15}}
                  source={require('./image/down.png')}
                />
              </View>
              <View>
                <Text>Kerala</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 130,
              height: 70,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <Image source={require('./image/language.png')} />
            <Image source={require('./image/account.png')} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0.2,
              padding: 5,
              width: '90%',
              height: 40,
              borderRadius: 6,
              backgroundColor: 'white',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('./image/magglass.png')}
            />
            <TextInput style={{width: '85%', height: 45, fontSize: 14}} />
            <Image
              style={{width: 25, height: 25}}
              source={require('./image/microphone.png')}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{width: '100%', height: 250, borderRadius: 10}}
            source={require('./image/happyonam.jpg')}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 600, letterSpacing: 2}}>
            RECOMMENDED FOR YOU
          </Text>
        </View>
        <ScrollView horizontal>
          <View style={{width: '100%', height: 200, backgroundColor: 'white'}}>
            <FlatList
              style={{flex: 1}}
              data={goal}
              renderItem={({item}) => (
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{width: 70, height: 70, borderRadius: 100}}
                    source={item.img}
                  />
                  <Text style={{color: 'black'}}> {item.name}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              numColumns={6}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 600, letterSpacing: 3}}>
            ALL RESTAURANTS
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 70,
              height: 30,
              borderColor: 'black',
              backgroundColor: '#fffaed',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:10,
              elevation:2
            }}>
            <Text style={{fontWeight: 600,color:'black'}}>Sort</Text>
          </View>
          <View
            style={{
              width: 70,
              height: 30,
              borderColor: 'black',
              backgroundColor: '#fffaed',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:10,
              elevation:2
            }}>
            <Text style={{fontWeight: 600,color:'black'}}>Nearest</Text>
          </View>
          <View
            style={{
              width: 70,
              height: 30,
              borderColor: 'black',
              backgroundColor: '#fffaed',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:10,
              elevation:2
            }}>
            <Text style={{fontWeight: 600,color:'black'}}>Rating </Text>
          </View>
          <View
            style={{
              width: 70,
              height: 30,
              borderColor: 'black',
              backgroundColor: '#fffaed',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:10,
              elevation:2
            }}>
            <Text style={{fontWeight: 600,color:'black'}}>Cuisines</Text>
          </View>
          
        </View>
        <View style={{width: '100%', height: 'auto', backgroundColor: 'white',alignItems:'center',flexDirection:'column'}} >
          <FlatList
          style={{flex: 1}}
          data={resto}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>navigation.navigate(item.link)}
            
              style={{
                width: 350,
                height: 300,
                borderRadius:16,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:30,
                elevation:5

              }}>
                <View style={{width:350,height:220,}} >
              <Image
                style={{ width:350,height:220,objectFit:'fill',borderTopLeftRadius:16,borderTopRightRadius:16}}
                source={item.reimg}
              />
              </View>
              <View style={{width:350,height:100,}}>
                <View style={{flexDirection:'row',width:'100%',height:33,backgroundColor:'white',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color: 'black',fontWeight:800,fontSize:25}}> {item.reshop} </Text>
              <View style= {{ backgroundColor:'green',width:40,height:20,borderRadius:5,alignItems:'center'}}><Text style={{fontWeight:600,color:'white'}}>{item.rerating}</Text></View>
              </View>
              <View style={{width:'100%',height:25,backgroundColor:'white'}}>
                <View style={{width:'60%',backgroundColor:'white',height:25,flexDirection:'row',justifyContent:'space-between',marginLeft:6}}>
                <Text style={{color:'black'}} >{item.reitem}</Text>
                  <Text style={{color:'black'}} >{item.retype}</Text>
                  <Text style={{color:'black'}} >{item.repriceinone}</Text>
                  
                </View>
                <View style={{width:'100%',height:25,}}>
                  <View style={{width:'40%',height:25,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                  <Image source={item.retimeicon} />
                  <Text style={{color:'black'}}>{item.retime}</Text>
                  <Text style={{color:'black'}} >{item.redistance}</Text>


                  </View>

                </View>

              </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          
          
        />
         


        </View>
      </View>
    </ScrollView>
  );
};

export default DelivaryNew;

const styles = StyleSheet.create({});
