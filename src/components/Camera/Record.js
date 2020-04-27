import React, { Component } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const {width, height} = Dimensions.get('window');

class Record extends Component {

  constructor(props) {
    super(props);
     this.state = {
      path: "",
      recorded: false,
      isRecording: false
    }
  }

  takeVideo() { 
    this.state.isRecording ?  this.stopRecord() : this.saveVideo();
    this.state.isRecording ? this.setState({isRecording: false}) : this.setState({isRecording: true})
  }

  async stopRecord(){
    this.camera.stopRecording();
    // const { config, fs, android } = RNFetchBlob;
    // const str = this.state.path;
    // const fileName = str.substr(str.indexOf("Camera")+7, str.indexOf(".mp4"));
    // const path = fs.dirs.CacheDir + '/Camera/'+fileName;

    // const res = await fetch(str);
    // const blob = await res.blob();

    // console.log("BLOB", blob); // -- it returns - 
    /*
      'BLOB', { _data:
      { name: '07395974-32e0-4e43-8f7c-af5ec2d7267b.mp4',
        type: 'video/mp4',
        size: 0,
        lastModified: 0,
        offset: 0,
        lobId: '445db879-9795-4cd9-a8cf-d33d60a41a13' } }
    */
  }

  async saveVideo () { 
    if (this.camera) { 
      const options = { maxDuration: 10 }
      const data = await this.camera.recordAsync(options)
      this.setState({path: data.uri })
      this.setState({recorded: false})
      this.props.navigation.navigate('Play', {videoPath: data})
      //console.log("FILE", data.uri); // -- it returns - 
      //'FILE', 'file:///data/user/0/com.project/cache/Camera/07395974-32e0-4e43-8f7c-af5ec2d7267b.mp4'
    }
  };

  render() {
    return (   
      <View style = {[styles.root, this.props.contentStyle]}>
        {this.props.header}
          <RNCamera
            // type = {RNCamera.Constants.Type.front}
              ref = {camera => {this.camera = camera}}
              style = {styles.preview}
              captureAudio = {true}
              //ratio = "16:9"
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
          >

            <View style={{flex:1, flexDirection:"row", alignItems:"flex-end"}}>
                 <View style={{flex:1, justifyContent:'center', alignItems:'center', height:(width/2), width:(width)}}>
                     <TouchableOpacity onPress={this.takeVideo.bind(this)} style={styles.capture}>
                         {/* <Text style={{ fontSize: 14, alignSelf:'center' }}> SNAP </Text> */}
                         <View style={this.state.isRecording ? styles.recording : styles.insideBall}>
                            <Text style={ this.state.isRecording ? styles.textRecording : styles.textInsideBall }>
                            {this.state.timer === 0 ? 'End' : this.state.timer }
                            </Text>
                          </View>
                     </TouchableOpacity>
                 </View>
            </View>

          </RNCamera>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      //console.log(data.uri);
      this.props.navigation.navigate('Video', {data: data});
    }
  };

  // takeVideo = async () => {
  //   if (this.camera) {
  //     try {
  //       const promise = this.camera.recordAsync(this.state.recordOptions);
  
  //       if (promise) {
  //         this.setState({ isRecording: true });
  //         const data = await promise;
  //         this.setState({ isRecording: false });
  //         console.warn('takeVideo', data);
  //       }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  // };

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
  recording: {
    backgroundColor: 'red',
    borderRadius: (width),
    height:(width/7),
    width: (width/7),
    justifyContent:'center'
  },
  insideBall:{
    backgroundColor: '#ffff',
    borderRadius: (width),
    height:(width/7),
    width: (width/7),
    justifyContent:'center'
  },
  textRecording:{
    alignSelf:'center',
    fontSize: 18, 
    color: '#ffff'
  },
  textInsideBall:{
    alignSelf:'center',
    fontSize: 18, 
    color: '#000'
  }
});

export default Record