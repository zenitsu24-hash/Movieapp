import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';


const {width, height} = Dimensions.get('window')
const Loading = () => {
  return (
    <View style={{position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: height, width: width}}>
        <Progress.CircleSnail thickness={12} size={160} color={'orange'} />
    </View>
  )
}

export default Loading