import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import TrendingMovies from '../Components/TrendingMovies'
import MovieList from '../Components/MovieList'

const HomeScreen = () => {

    const [trending, setTrending] = useState([1,2,3])
    const [upcoming, setUpcoming] = useState([1,2,3])
    const [toprated, setToprated] = useState([1,2,3])

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{marginTop: 30}}>
            <StatusBar barStyle='light'/>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 8}}>
                <Bars3CenterLeftIcon size={30} strokeWidth={2} color='white' />
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}><Text style={{color: 'orange'}}>M</Text>ovies</Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size={30} strokeWidth={2} color='white' />
                </TouchableOpacity>
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>
            <TrendingMovies data={trending} />
            <MovieList title='Upcoming' data={upcoming} />
            <MovieList title='Top Rated' data={toprated} />
        </ScrollView>
    </View>
  )
}

export default HomeScreen