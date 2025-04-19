import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import TrendingMovies from '../Components/TrendingMovies'
import MovieList from '../Components/MovieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../Components/Loading'
import { options } from '../api/MovieDb'

const HomeScreen = () => {

    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [toprated, setToprated] = useState([])
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(res => res.json())
        .then(res => setTrending(res.results))
        setLoading(false)
    },[])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => setUpcoming(res.results))
    },[])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => setToprated(res.results))
    },[])

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{marginTop: 30}}>
            <StatusBar barStyle='light'/>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 8}}>
                <Bars3CenterLeftIcon size={30} strokeWidth={2} color='white' />
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}><Text style={{color: 'orange'}}>M</Text>ovies</Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon onPress={() => navigation.navigate('Search')} size={30} strokeWidth={2} color='white' />
                </TouchableOpacity>
            </View>
        </View>

        {
            loading? 
            (
                <Loading/>
            ):
            (
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>
                    {trending.length > 0 && <TrendingMovies data={trending} />}
                    <MovieList title='Upcoming' data={upcoming} />
                    <MovieList title='Top Rated' data={toprated} />
                </ScrollView>
            )
        }
    </View>
  )
}

export default HomeScreen