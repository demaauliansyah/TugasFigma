/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{
  useState,useEffect
}
 from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const SplashScreen = props =>
{
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 4000);
  }, []);
  
  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Login');
    }
  }, [authLoaded, props.navigation]);
   
  return(
    <View style={{flex:1,backgroundColor:'#005690'}}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image style={{position:'absolute'}}source={require('D:/Javascript and React Native/Tugas_Design/aset/lambang2.png')} />
      </View>
      <View style={{flex:1}}>
        <Text style={{fontSize:36,textAlign:'center',color:'white'}}>
          e-wallet apps{"\n"}{"\n"}Final Project{"\n"}React Native</Text>
      </View>
    </View>
    );
}
const LoginScreen = ({navigation}) =>
{
  return(
    <View style={{flex:1}}>
      <View style={{flex:1}}>
        <Image source={require('D:/Javascript and React Native/Tugas_Design/aset/lambang.png')} style={{position:'absolute',left:135,top:93}}/>
      </View>
      <View style={{flex:1}} >
      <Text style={{fontSize:24,textAlign:'center',right:6}}>e-wallet</Text>
      <TextInput style={{borderRadius:4,borderWidth:1,borderColor:'grey',height:48,marginLeft:15,marginRight:15}}
      underlineColorAndroid='transparent'
      placeholderTextColor='#ACACAC'
      autoCapitalize='none'
      placeholder="Email"/>
      <TextInput style={{borderRadius:4,borderWidth:1,borderColor:'grey',height:48,marginLeft:15,marginRight:15,marginTop:20}}
      underlineColorAndroid='transparent'
      placeholderTextColor='#ACACAC'
      autoCapitalize='none'
      placeholder="Password"/>
      </View>
      <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{width: 280,margin: 55,borderRadius: 4,height: 40,alignItems: 'center',justifyContent: 'center',marginTop: 25,marginBottom: 10,backgroundColor: '#4982C1'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>
          LOGIN
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
      onPress={() => navigation.navigate('Account Registration')}>
      <Text style={{marginLeft: 160, marginTop: 1, fontSize: 14, color: '#4E4E4E'}}>Registration</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const HomeScreen= ({navigation}) =>
{
  return(
    <View style={{flex:1}}>
      <View style={{marginTop:85,marginLeft:20,marginBottom:27}}>
        <Text style={{fontSize:14}}>
        YourBalence
        </Text>
        <Text style={{fontSize:36,fontWeight:'bold'}}>
        RP. 1.234.567.890
        </Text>
      </View>
      <View>
      <View style={{flexDirection:'row',paddingTop:13,paddingBottom:14,backgroundColor:'#4982C1',marginHorizontal:17,borderBottomLeftRadius:4,borderBottomRightRadius:4}}>
            <View style={{flex:1,alignItems:'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Top Up')}>
              <Image source={require('./aset/Plus.png')}/>
              </TouchableOpacity>
              <Text style={{fontWeight:'bold',fontSize:13,color:'white',marginTop:15}}>TopUp</Text>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
            <Image source={require('./aset/Q.png')}/>
              <Text style={{fontWeight:'bold',fontSize:13,color:'white',marginTop:15}}>QrPay</Text>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
            <Image source={require('./aset/tr.png')}/>
              <Text style={{fontWeight:'bold',fontSize:13,color:'white',marginTop:15}}>Transfer</Text>
            </View>
      </View>
      </View>
      <View style={{marginTop: 37, marginLeft: 37, color: '#000000', fontSize: 14}}>
      <Text>5 Latest Transaction</Text>
      <View
      style={{
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOpacity: 3.0,
        marginTop: 9,
        height: 70,
        width: 320,
        backgroundColor: '#FFFFFF'
      }}
      >
        <Image
        style={{marginTop:24,marginRight:37}}
        source={require('./aset/pnh.png')}
        />
                <Text style={{marginLeft: 11, marginTop: 16, color: '#000000'}}>
          Rp. 80.000
        </Text>
        <Text style={{marginTop: 16, marginLeft: 123, color: '#000000'}}>
          11/11/2021
        </Text>
        <Text
          style={{
            position: 'absolute',
            marginTop: 39,
            marginLeft: 40,
            color: '#000000',
          }}>
          Transfer to 085156540916
        </Text>
        
      </View>
      <View
      style={{
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOpacity: 3.0,
        marginTop: 9,
        height: 70,
        width: 320,
        backgroundColor: '#FFFFFF'
      }}
      >
        <Image
        style={{marginTop:24,marginRight:37}}
        source={require('./aset/pnh.png')}
        />
                <Text style={{marginLeft: 11, marginTop: 16, color: '#000000'}}>
          Rp. 80.000
        </Text>
        <Text style={{marginTop: 16, marginLeft: 123, color: '#000000'}}>
          11/11/2021
        </Text>
        <Text
          style={{
            position: 'absolute',
            marginTop: 39,
            marginLeft: 40,
            color: '#000000',
          }}>
          Transfer to 085156540916
        </Text>
        
      </View>
      <View
      style={{
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOpacity: 3.0,
        marginTop: 9,
        height: 70,
        width: 320,
        backgroundColor: '#FFFFFF'
      }}
      >
        <Image
        style={{marginTop:24,marginRight:37}}
        source={require('./aset/pnh.png')}
        />
                <Text style={{marginLeft: 11, marginTop: 16, color: '#000000'}}>
          Rp. 80.000
        </Text>
        <Text style={{marginTop: 16, marginLeft: 123, color: '#000000'}}>
          11/11/2021
        </Text>
        <Text
          style={{
            position: 'absolute',
            marginTop: 39,
            marginLeft: 40,
            color: '#000000',
          }}>
          Transfer to 085156540916
        </Text>
      </View>
      </View>
      <View style={{height : 54,flexDirection: 'row',backgroundColor:'white'}}>
            <View style={{flex :1,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('./aset/h.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{flex :1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('./aset/S.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{flex :1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={require('./aset/o.png')}/>
              </TouchableOpacity>
            </View>
        </View>
    </View>

  );
}

const AccountRegistrationScreen= ({navigation}) =>
{
  return(
  <View style={{flex:1,marginTop:151}}>
      <View style={{flex:1}}>
      <TextInput style={{borderRadius:4,borderWidth:1,borderColor:'grey',height:48,marginLeft:15,marginRight:15}}
      underlineColorAndroid='transparent'
      placeholderTextColor='#ACACAC'
      autoCapitalize='none'
      placeholder="Email"/>
      </View>
      <View style={{flex:1}}>
     <TextInput style={{borderRadius:4,borderWidth:1,borderColor:'grey',height:48,marginLeft:15,marginRight:15}}
      underlineColorAndroid='transparent'
      placeholderTextColor='#ACACAC'
      autoCapitalize='none'
      placeholder="Password"/>
      </View>
      <View style={{flex:1}}>
      <TextInput style={{borderRadius:4,borderWidth:1,borderColor:'grey',height:48,marginLeft:15,marginRight:15}}
      underlineColorAndroid='transparent'
      placeholderTextColor='#ACACAC'
      autoCapitalize='none'
      placeholder="Name"/>
      </View>
      <View style={{flex:1}}>
      <TextInput style={{borderRadius:4,borderWidth:1,borderColor:'grey',height:48,marginLeft:15,marginRight:15}}
      underlineColorAndroid='transparent'
      placeholderTextColor='#ACACAC'
      autoCapitalize='none'
      placeholder="No Handphone"/>
      </View>
      <View style={{flex:1}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{width: 280,margin: 55,borderRadius: 4,height: 40,alignItems: 'center',justifyContent: 'center',marginTop: 25,marginBottom: 10,backgroundColor: '#4982C1'}}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>
      Submit
      </Text>
      </TouchableOpacity>
      </View>
  </View>
  );
}
const ProfileScreen= ({navigation}) =>
{
  return(
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#005690',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <Image source={require('./aset/L.png')}/>
      <Text style={{fontSize:18,color:'white'}}>
        Dema
      </Text>
      <Text style={{fontSize:18,color:'white'}}>
        08115588772
      </Text>
      </View>
      <View style={{flex:1,marginTop:35,marginLeft:39,marginRight:39}}>
        <View style={{}}>
          <Button title="Change Profile"/>
        </View>
        <View style={{top:33}}>
          <Button title="Change Password"/>
        </View>
        <View style={{top:66}}>
          <Button title="Logout"/>
        </View>
      </View>
      <View style={{height : 54,flexDirection: 'row',backgroundColor:'white'}}>
            <View style={{flex :1,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('./aset/h.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{flex :1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('./aset/S.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{flex :1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={require('./aset/o.png')}/>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}
const TopUpScreen= ({navigation}) =>
{
  return(
    <View style={{flex:1}}>
      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
      <Image
       source={require('./aset/d.png')}/>
       </View>
       <View style={{flex:1,marginRight:40,marginLeft:40}}>
       <TextInput style={{borderRadius:4,borderWidth:1,borderColor:'grey',height:48}}
      underlineColorAndroid='transparent'
      placeholderTextColor='#ACACAC'
      autoCapitalize='none'
      placeholder="Nominal Top Up"/>
      <View style={{top:20}}>
          <Button title="Submit"/>
        </View>
       </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash"
        options={{headerShown: false}}
         component={SplashScreen} />
        <Stack.Screen name="Login" 
        options={{headerShown:false}}
         component={LoginScreen}/>
        <Stack.Screen name="Home" 
        options={{headerShown:false}}
         component={HomeScreen}/>
        <Stack.Screen name="Account Registration" 
        options={{
            headerStyle: {
              backgroundColor: '#005690',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
         component={AccountRegistrationScreen}/>   
         <Stack.Screen name="Profile" 
        options={{headerShown:false}}
         component={ProfileScreen}/>
         <Stack.Screen name="Top Up"
                 options={{
                  headerStyle: {
                    backgroundColor: '#005690',
                  },
                  headerTitleStyle: {
                    color: 'white',
                  },
                  headerTintColor: 'white',
                }}
         component={TopUpScreen} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
  export default App;