import React, { PureComponent } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const {width, height} = Dimensions.get('window');



class Photo extends PureComponent {

  constructor(props){
      super(props)
      this.state = {
        
      }
  }

  render() {
    return (
    <SafeAreaView>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        >

        <View style={{flex:1, flexDirection:"row", alignItems:"flex-end"}}>
          <View style={{flex:1, justifyContent:'center', alignItems:'center', height:(width/2), width:(width)}}>
              <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                  {/* <Text style={{ fontSize: 14, alignSelf:'center' }}> SNAP </Text> */}
                <View style={styles.insideBall}>
                </View>
              </TouchableOpacity>
          </View>
        </View>

        </RNCamera>
        
      </SafeAreaView>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      //console.log(data.uri);
      this.props.navigation.navigate('Photo', {data:data});
    }
  };

}

const styles = StyleSheet.create({
  preview: {
    height: '100%',
    width:'100%'
  },
  capture: {
    borderWidth: 5,
    borderColor:'#eeee',
    borderRadius: (width),
    height:(width/5),
    width: (width/5),
    justifyContent:'center',
    alignItems:'center'
  },
  insideBall:{
    backgroundColor: '#fff',
    borderRadius: (width),
    height:(width/7),
    width: (width/7),
    justifyContent:'center'
  },
});

export default Photo