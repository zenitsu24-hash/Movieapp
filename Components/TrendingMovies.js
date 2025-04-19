import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Carousel from './Carousel'
import { Image } from 'react-native-svg'

const TrendingMovies = ({data}) => {
  return (
    <View style={{marginBottom: 16}}>
      <Text style={{color: 'white', fontSize: 20, marginHorizontal: 30, marginTop: 20}}>Trending</Text>
      <Carousel data={data}/>
    </View>
  )
}


export default TrendingMovies