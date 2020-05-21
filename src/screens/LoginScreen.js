import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { loginAuthentication } from '../store/actions/authentication'
import { getUsers } from '../firebase/Firebase'

const {width, height} = Dimensions.get('window');

function LoginScreen(props) {

  const [emailState, setEmailState] = useState({
    email:''
  })
  const [passwordState, setPasswordState] = useState({
    password:''
  })

    /* Action */
    const dispatch = useDispatch();
    const createLoginHandler = (user, password) => {
      dispatch(loginAuthentication(user, password));
    }
    /* Action */

    const onUserReceived = (userList) => {
      userList.forEach((user) => {
        if (user.email === emailState.email.toLowerCase() && user.password === passwordState.password){
            createLoginHandler(emailState.email, passwordState.password);
        }
      })
      setEmailState
    }

    const componentDidMount = () => {
      getUsers(onUserReceived);
    }


    return (
        
        <>
        <SafeAreaView style={styles.notch} ></SafeAreaView>
        
        <StatusBar
        backgroundColor="#FF5F17"
        barStyle="light-content"
        />
        <SafeAreaView style={styles.container}>
          <Image  style={{tintColor:'#ffff',resizeMode:'contain',width: '100%',height:'30%', marginBottom: 20, backgroundColor:'#FF5F17'}}/>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.5)" 
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => setEmailState({email})}
                />
          </View>
          
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.5)" 
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => setPasswordState({password})}
                />
          </View>

          <View style={{ width: '100%', alignItems: 'center', height:(height)/4}}>
            <View style={{ width: '80%'}}>
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => componentDidMount()}>
                <Text style={styles.loginText}>Login</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => onClickListener('restore_password')}>
                <Text style={{color: 'white', fontSize:12}}>Forgot your password?</Text>
            </TouchableOpacity>          
          </View>
          </View>


          <View style={{ width: '100%', alignItems: 'center'}}>
            <View style={{ width: '80%'}}>

              <View style={{alignItems: 'center',flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
              <View style={{borderBottomWidth: 1, borderBottomColor:'white', width:'45%'}}></View>
              <Text style={{color:'white', textAlignVertical: "bottom", paddingBottom:0, fontSize:12}}> Or </Text>
              <View style={{borderBottomWidth: 1, borderBottomColor:'white', width:'45%'}}></View>
              </View>

            <Text style={{alignSelf:'center', color: 'white', marginBottom:15, fontSize:12}}>Don't have an account?</Text>

            <TouchableOpacity style={[styles.buttonContainer, styles.signButton]} onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.signText}>Sign up</Text> 
            </TouchableOpacity>

            </View>
          </View>
          
        </SafeAreaView>
        <StatusBar
        backgroundColor="#FF5F17"
        barStyle="light-content"
        />
        <SafeAreaView style={{backgroundColor: '#FF5F17' }}></SafeAreaView>
        </>
        );
}


const styles = StyleSheet.create({
    notch:{
      flex:0, 
      backgroundColor: "#FF5F17" 
    },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FF5F17',
    },
    inputContainer: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: '80%',
      aspectRatio: 7/1,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center',
      borderRadius: 100
    },
    inputs:{
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        color: 'white',
        
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      aspectRatio: 7/1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:10,
      width: '100%',
      borderRadius: 100
    },
    loginButton: {
      backgroundColor: "#FFC105",
      opacity: 0.8
    },
    loginText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '700'
    },
    signText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '700'
    },
    signButton: {
      backgroundColor: "#DA394A",
      opacity: 0.8
    },
  });
  
const mapStateToProps = state => {
  return {
    auth: state.user.auth
  };
};

export default LoginScreen;
