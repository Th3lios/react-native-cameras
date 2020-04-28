import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import firebase, { addUser } from '../firebase/Firebase'
export default class register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email   : '',
      username: '',
      password: '',
    }
  }

  onClickListener = (email, password) => {
    if(email === this.state.email || username === this.state.username && password === 'asd123'){
        return this.props.navigation.navigate('')
    }
  }

  _handleMultiInput(name) {
    return (text) => {
        if (name === 'email'){
            this.setState({ [name]:text.toLowerCase() })
        } else {
            this.setState({ [name]:text })
        }

    }
}

  render() {
    return (
      <>
      <SafeAreaView style={{ flex:0, backgroundColor: "#FF5F17" }} />
      <SafeAreaView style={styles.container}>
      <Image style={{tintColor:'#ffff',resizeMode:'contain',width: '100%',height:'30%', marginBottom: 10, backgroundColor:'#FF5F17'}}/>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Nombre"
              placeholderTextColor="rgba(255,255,255,0.5)" 
              underlineColorAndroid='transparent'
              onChangeText={this._handleMultiInput('name')}/>
        </View>
        
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Apellido"
              placeholderTextColor="rgba(255,255,255,0.5)" 
              underlineColorAndroid='transparent'
              onChangeText={this._handleMultiInput('lastName')}/>
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Email"
              placeholderTextColor="rgba(255,255,255,0.5)" 
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={this._handleMultiInput('email')}/>
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Nombre de usuario"
              placeholderTextColor="rgba(255,255,255,0.5)"
              onChangeText={this._handleMultiInput('username')}/>
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Contraseña"
              placeholderTextColor="rgba(255,255,255,0.5)" 
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={this._handleMultiInput('password')}/>
        </View>

        <View style={{ width: '100%', alignItems: 'center', flex:1}}>
          <View style={{ width: '80%'}}>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => {addUser({name:this.state.name, lastname:this.state.lastName, email:this.state.email, username:this.state.username, password:this.state.password});this.props.navigation.navigate('Login')}}>
              <Text style={styles.loginText}>Registrarse</Text> 
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

          <Text style={{alignSelf:'center', color: 'white', marginBottom:15, fontSize:12}}>Already have an account?</Text>

          <TouchableOpacity style={[styles.buttonContainer, styles.signButton]} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.signText}>Log in</Text> 
          </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
      aspectRatio: 7/1,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      justifyContent:'center'
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    aspectRatio: 8/1,
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
    fontSize: 15,
    fontWeight: '700'
  },
  signText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700'
  },
  signButton: {
    backgroundColor: "#DA394A",
    opacity: 0.8
  },
});