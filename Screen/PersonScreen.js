import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation, useRoute} from '@react-navigation/native';
import MovieList from '../Components/MovieList';
import Loading from '../Components/Loading';
import { image342, options } from '../api/MovieDb';

const {width, height} = Dimensions.get('window');
const PersonScreen = () => {

  const {params: item} = useRoute()
  const navigation = useNavigation();
  const [isFavorite, setIsfavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const [person, setPerson] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
       fetch(`https://api.themoviedb.org/3/person/${item.id}?language=en-US`, options)
      .then(res => res.json())
      .then(res => setPerson(res))
  },[item])

  useEffect(() => {
       fetch(`https://api.themoviedb.org/3/person/${item.id}/movie_credits?language=en-US`, options)
      .then(res => res.json())
      .then(res => setPersonMovies(res.cast))
  },[item])

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'black'}}
      contentContainerStyle={{paddingBottom: 20}}>
      <View
        style={{
          zIndex: 20,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginTop: 36,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderRadius: 10,
            padding: 4,
            backgroundColor: 'orange',
            marginLeft: 10,
          }}>
          <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsfavorite(!isFavorite)}
          style={{marginRight: 10}}>
          <HeartIcon size={35} color={isFavorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                borderRadius: 9999,
                overflow: 'hidden',
                height: 288,
                width: 288,
                borderColor: 'gray',
                borderWidth: 1,
              }}>
              <Image
                source={{
                  uri: image342(person?.profile_path),
                }}
                style={{height: height * 0.43, width: width * 0.74}}
              />
            </View>
          </View>

          <View>
            <View style={{marginTop: 14}}>
              <Text
                style={{
                  fontSize: 30,
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {
                  person?.name
                }
              </Text>
              <Text
                style={{fontSize: 15, color: '#a3a3a3', textAlign: 'center'}}>
                {
                  person?.place_of_birth
                }
              </Text>
            </View>

            <View>
              <View
                style={{
                  marginHorizontal: 8,
                  padding: 10,
                  marginTop: 14,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#404040',
                  borderRadius: 9999,
                }}>
                <View
                  style={{
                    borderRightWidth: 2,
                    borderRightColor: '#a3a3a3',
                    paddingHorizontal: 8,
                    alignItems: 'center',
                    marginLeft: 12,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'semibold'}}>
                    Gender
                  </Text>
                  <Text style={{color: '#a3a3a3', fontSize: 12}}>
                    {
                       person?.gender==1? 'Female' : 'Male'
                    }
                  </Text>
                </View>
                <View
                  style={{
                    borderRightWidth: 2,
                    borderRightColor: '#a3a3a3',
                    paddingHorizontal: 8,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: 'semibold'}}>
                    BirthDay
                  </Text>
                  <Text style={{color: '#a3a3a3', fontSize: 12}}>
                    {
                      person?.birthday
                    }
                  </Text>
                </View>
                <View
                  style={{
                    borderRightWidth: 2,
                    borderRightColor: '#a3a3a3',
                    paddingHorizontal: 8,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: 'semibold'}}>
                    Known for
                  </Text>
                  <Text style={{color: '#a3a3a3', fontSize: 12}}>
                    {
                      person?.known_for_department
                    }
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 8,
                    alignItems: 'center',
                    marginRight: 12,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'semibold'}}>
                    Popularity
                  </Text>
                  <Text style={{color: '#a3a3a3', fontSize: 12}}>
                    {
                      person?.popularity?.toFixed(2) + 'M '
                    }
                  </Text>
                </View>
              </View>
              <View style={{marginVertical: 14, marginHorizontal: 10}}>
                <Text style={{color: 'white', fontSize: 25}}>Biography</Text>
                <Text
                  style={{color: '#a3a3a3', letterSpacing: 0.6, marginTop: 10}}>
                  {
                    person?.biography
                  }
                </Text>
              </View>
            </View>
          </View>

          <MovieList title={'Movies'} data={personMovies} />
        </View>
      )}
    </ScrollView>
  );
};

export default PersonScreen;
