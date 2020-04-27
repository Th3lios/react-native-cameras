import React from 'react'
import { TouchableOpacity,ImageBackground,Dimensions, View, Image, StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
Icon.loadFont();

const {width, height} = Dimensions.get('window');

function PhotoScreen(props) {

    const { data } = props.route.params;
    props.navigation.setOptions({ tabBarVisible: false })
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={data}>
                <TouchableOpacity onPress={()=> props.navigation.goBack()} style={{paddingHorizontal: 20}}>
                  <Icon color='white' name='ios-close' size={55}/>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        height:'100%',
        width: (width)
    }
});

export default PhotoScreen
