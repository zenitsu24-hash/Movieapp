import { View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Loading from '../Components/Loading'


const {height, width} = Dimensions.get('window')
const SearchScreen = () => {

    const navigation = useNavigation()
    const [totalResult, setTotalResult] = useState([1,2,3,4])
    const [loading, setLoading] = useState(false)
    const movieName = 'Guardians of the Galaxy'

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{marginHorizontal: 10, marginBottom: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 9999, marginTop: 36}}>
            <TextInput placeholder='Search Movie' placeholderTextColor={'lightgray'} style={{paddingBottom: 14, paddingLeft: 14, flex: 1, fontSize: 16, fontWeight: 'bold', color: 'white', letterSpacing: 1}}/>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{borderRadius: 9999, padding: 8, margin: 4, backgroundColor: '#a3a3a3'}}>
                <XMarkIcon size={25} color='white'/>
            </TouchableOpacity>
        </View>

        {
            loading? 
            (
                <Loading/>
            ):
            (
                    totalResult.length > 0 ? 
                    (
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}}>
                        <Text style={{color: 'white', fontWeight: 'semibold', marginLeft: 4}}>Results ({totalResult.length})</Text>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                            {
                                totalResult.map((item, index) => {
                                    return (
                                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)}>
                                            <View style={{marginBottom: 10, marginTop: 16}}>
                                                <Image source={{uri: 'https://metropolisjapan.com/wp-content/uploads/2023/05/r2J02Z2OpNTctfOSN1Ydgii51I3-scaled.jpg'}} style={{height: height*0.3, width: width*0.44}}/>
                                                <Text style={{color: '#a3a3a3', marginLeft: 4, marginTop: 10}}>{movieName > 22 ? movieName.slice(0,22) : movieName}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                    ) :
                    (
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                            <Image source={{uri: 'https://wallpapers.com/images/hd/fierce-monkey-d-luffy-qeey992hkerxu6cs.jpg'}} style={{height: 400, width: 400, marginTop: 120}}/>
                        </View>
                    )        
            )
        }
    </View>
  )
}

export default SearchScreen