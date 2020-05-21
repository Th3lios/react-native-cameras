import React from 'react';
import {} from 'react-native';
import Camera from '../components/Camera/Photo';

function CameraScreen(props) {
  props.navigation.setOptions({
    headerShown: false,
    tabBarVisible: false,
  });
  return (
    <>
      <Camera navigation={props.navigation} />
    </>
  );
}

export default CameraScreen;
