import React from 'react'
import {StyleSheet} from 'react-native'
import Movie from '../components/Camera/Movie'

function PlayScreen(props) {
    const { videoPath } = props.route.params
    return (
        <>
        <Movie videoPath={videoPath} navigation={props.navigation}/>
        </>
    )
}

// Later on in your styles..
var styles = StyleSheet.create({

});
        

export default PlayScreen
