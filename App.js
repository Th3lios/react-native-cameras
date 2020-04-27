/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Camera from './src/screens/CameraScreen';
import Photo from './src/screens/PhotoScreen';
import Video from './src/screens/VideoScreen';
import Play from './src/screens/PlayScreen';


import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

const Stack = createStackNavigator();
const BottomTabs = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const createPhotoStack = () =>{
  return(
      <Stack.Navigator>
        <Stack.Screen name='Camera' component={Camera} options={{headerShown:false}}/>
        <Stack.Screen name='Photo' component={Photo} options={{headerShown:false, tabBarVisible:false}}/>
      </Stack.Navigator>
  );
}

const createVideoStack = ({navigation}) =>{
  return(
      <Stack.Navigator>
        <Stack.Screen name='Video' component={Video} options={{headerShown:false}}/>
        <Stack.Screen name='Play' component={Play} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator>
      <BottomTabs.Screen name="Camera" children={createPhotoStack} options={{
              tabBarLabel: 'Camera',
              tabBarIcon: ({ color }) => (
                <Icon name="md-camera" color={color} size={26} />
              ),
      }}/>
      <BottomTabs.Screen name="Record" children={createVideoStack} options={{
              tabBarLabel: 'Camera',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-videocam" color={color} size={26} />
              ),
      }}/>
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
