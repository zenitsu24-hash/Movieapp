import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { image185 } from '../api/MovieDb'

const Cast = ({cast}) => {

    let PersonName = 'Emma Watson'
    let CharacterName = 'Hermoine Granger'

    const navigation = useNavigation()


  return (
    <View style={{marginVertical: 12}}>
      <Text style={{color: 'white', fontSize: 18, lineHeight: 28, marginHorizontal: 15, marginBottom: 11}}>Top Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}}>
        {
            cast && cast.map((person,index) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Person', person)} key={index} style={{marginRight: 10, alignItems: 'center'}}>
                        <View style={{overflow: 'hidden', borderRadius: 9999, height: 80, width: 80, alignItems: 'center', borderColor: '#a3a3a3'}}>
                            <Image source={{uri: image185(person?.profile_path)}} style={{height: 96, width: 80, borderRadius: 60}}/>
                        </View>
                        <Text style={{color: 'white', fontSize: 12, marginTop: 10}}>
                            {
                                person?.character.length > 14 ? person?.character.slice(0,14) : person?.character
                            }
                        </Text>
                        <Text style={{color: 'white', fontSize: 12}}>
                            {
                                person?.original_name.length > 14 ?  person?.original_name.slice(0,14) :  person?.original_name
                            }
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default Cast