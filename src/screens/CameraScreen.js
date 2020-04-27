import React from 'react'
import {} from 'react-native'
import Camera from '../components/Camera/Photo'

function CameraScreen(props) {
    return (
        <>
        <Camera navigation={props.navigation}/>
        </>
    )
}

export default CameraScreen
