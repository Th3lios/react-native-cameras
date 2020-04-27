import React, {Component} from "react";
import {View,StyleSheet,TouchableOpacity} from "react-native";
import Video from 'react-native-video';
// https://codedaily.io/courses/4/Fundamentals-of-React-Native-Video/37
import Icon from "react-native-vector-icons/Ionicons";
Icon.loadFont();
export default class Movie extends Component {
    constructor(props){
      super(props)
      this.state = {
        path: this.props.videoPath
      }
    }
        render(){
        return(
            <View style={styles.container}>
                <Video source={this.state.path}   // Can be a URL or a localfile.
                ref={(ref) => {
                    this.player = ref
                }}
                repeat={true}
                onLoad={this.onLoad}                                  // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onEnd={this.onEnd}                      // Callback when playback finishes
                onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo}/>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}style={{paddingHorizontal: 20,}}>
                  <Icon color='white' name='ios-close' size={55}/>
                </TouchableOpacity>
            </View>
            );
        }
}

const styles = StyleSheet.create({
  container:{ flex: 1},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
});