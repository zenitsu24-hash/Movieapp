import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation, useRoute } from '@react-navigation/native'
import Cast from '../Components/Cast'
import MovieList from '../Components/MovieList'
import Loading from '../Components/Loading'
import { image500, options } from '../api/MovieDb'


const {width, height} = Dimensions.get('window')
const MovieScreen = () => {

    const {params: item} = useRoute()
    const navigation = useNavigation()
    const [isFavorite, setIsfavorite] = useState(true)
    const [cast, setCast] = useState([])
    const [related, setRelated] = useState([])
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState({})

    let movieName = "Harry Potter And The Philosopher Stone"

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${item.id}?language=en-US`, options)
        .then(res => res.json())
        .then(res => setMovie(res))
        setLoading(false)
    },[item])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${item.id}/credits?language=en-US`, options)
        .then(res => res.json())
        .then(res => setCast(res.cast))
        setLoading(false)
    },[item])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${item.id}/similar?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setRelated(res.results))
        setLoading(false)
    },[item])

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}} style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{width: '100%'}}>
            <View style={{position: 'absolute', zIndex: 20, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginTop: 36}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{borderRadius: 10, padding: 4, backgroundColor: 'orange', marginLeft: 10}}>
                    <ChevronLeftIcon  size={28} strokeWidth={2.5} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsfavorite(!isFavorite)} style={{marginRight: 10}}>
                    <HeartIcon size={35} color={isFavorite ? 'white' : 'orange'} />
                </TouchableOpacity>
            </View>

            {
                loading?
                (
                    <Loading/>
                ):
                (
                    <View>
                        <Image source={{uri: image500(movie?.poster_path)}} style={{width, height: height*0.65}}/>
                    </View>
                )
            }
        </View>

        <View style={{marginTop: (height*0.04), marginBottom: 12}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 30, lineHeight: 36, fontWeight: 'bold', letterSpacing: 1}}>
                {
                    movie?.title
                }
            </Text>

            {
                movie?.id? 
                (
                    <Text style={{color: '#a3a3a3', fontWeight: 'semibold', fontSize: 16, lineHeight: 24, textAlign: 'center', marginTop: 10}}>
                        {movie?.status}. {movie?.release_date?.split('-')[0]} . {movie?.runtime} min
                    </Text>
                ): null
            }
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginRight: 8}}>

                {
                    movie?.genre?.map((genre,index) => {
                        let showDot = index+1 != movie.genre.length;
                        return(
                            <Text key={index} style={{color: '#a3a3a3', fontWeight: 'semibold', fontSize: 16, lineHeight: 24, textAlign: 'center'}}>
                                {genre?.name}{showDot? '.' : null}
                            </Text>
                        )
                    })
                }
            </View>

            <Text style={{color: '#a3a3a3', marginHorizontal: 10, letterSpacing: 0.6, marginTop: 10}}>
                {movie?.overview}
            </Text>
        </View>

        <Cast cast={cast}/>
        
        <MovieList title='Related Movies' data={related} />
    </ScrollView>
  )
}

export default MovieScreen