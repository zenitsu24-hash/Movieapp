import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window')
const MovieList = ({title, data}) => {

    let movieName = "Harry Potter And The Philosopher Stone"
    let navigation = useNavigation();
    

  return (
    <View style={{marginBottom: 12, marginTop: 20}}>
        <View style={{marginHorizontal: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
            <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
            <TouchableOpacity>
                <Text style={{color: 'orange', fontSize: 15}}>See All</Text>
            </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}}>
            {
                data.map((item, index) => {
                    return (
                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)}>
                            <View style={{marginRight: 15, marginLeft: 4}}>
                                <Image source={{uri: 'https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1734647897/Events/2025/1979/HPpS_1000x1480.jpg.jpg'}} style={{width: width*0.33, height: height*0.22, borderRadius: 5}}/>
                                <Text style={{color: 'white', marginLeft: 5}}>{movieName.length > 14 ? movieName.slice(0,14)+'...' : movieName}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}

export default MovieList