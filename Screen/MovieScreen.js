import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import Cast from '../Components/Cast'
import MovieList from '../Components/MovieList'


const {width, height} = Dimensions.get('window')
const MovieScreen = () => {

    const navigation = useNavigation()
    const [isFavorite, setIsfavorite] = useState(false)
    const [cast, setCast] = useState([1,2,3,4])
    const [related, setRelated] = useState([1,2,3,4])

    let movieName = "Harry Potter And The Philosopher Stone"

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}} style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{width: '100%'}}>
            <View style={{position: 'absolute', zIndex: 20, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginTop: 36}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{borderRadius: 10, padding: 4, backgroundColor: 'orange', marginLeft: 10}}>
                    <ChevronLeftIcon  size={28} strokeWidth={2.5} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsfavorite(!isFavorite)} style={{marginRight: 10}}>
                    <HeartIcon size={35} color={isFavorite ? 'orange' : 'white'} />
                </TouchableOpacity>
            </View>
            <View>
                <Image source={{uri: 'https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1734647897/Events/2025/1979/HPpS_1000x1480.jpg.jpg'}} style={{width, height: height*0.65}}/>
            </View>
        </View>

        <View style={{marginTop: (height*0.04), marginBottom: 12}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 30, lineHeight: 36, fontWeight: 'bold', letterSpacing: 1}}>
                {
                    movieName
                }
            </Text>
            <Text style={{color: '#a3a3a3', fontWeight: 'semibold', fontSize: 16, lineHeight: 24, textAlign: 'center', marginTop: 10}}>
                Released . 2020 . 170 min
            </Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginRight: 8}}>
                <Text style={{color: '#a3a3a3', fontWeight: 'semibold', fontSize: 16, lineHeight: 24, textAlign: 'center'}}>
                    Fantasy . 
                </Text>
                <Text style={{color: '#a3a3a3', fontWeight: 'semibold', fontSize: 16, lineHeight: 24, textAlign: 'center'}}>
                    Adventure .
                </Text>
                <Text style={{color: '#a3a3a3', fontWeight: 'semibold', fontSize: 16, lineHeight: 24, textAlign: 'center'}}>
                    Coming-of-age 
                </Text>
            </View>

            <Text style={{color: '#a3a3a3', marginHorizontal: 10, letterSpacing: 1, textAlign: 'center', marginTop: 10}}>
                Harry Potter and the Philosopher’s Stone is the magical beginning of the legendary saga where a young boy discovers he’s no ordinary child. On his 11th birthday, Harry learns that he is a wizard and has been accepted into the Hogwarts School of Witchcraft and Wizardry. As he explores this new world filled with spells, enchanted creatures, and ancient secrets, Harry befriends Ron and Hermione, uncovers the truth about his parents’ mysterious past, and stumbles upon the powerful Philosopher’s Stone — all while facing the dark shadow of Lord Voldemort, the dark wizard who tried to destroy him as a baby.
            </Text>
        </View>

        <Cast cast={cast}/>
        
        <MovieList title='Related Movies' data={related} />
    </ScrollView>
  )
}

export default MovieScreen