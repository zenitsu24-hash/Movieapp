// CarouselComponent.js
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Image, ViewToken, TouchableWithoutFeedback } from 'react-native';
import { image500 } from '../api/MovieDb';

const { height, width } = Dimensions.get('window');


const Carousel = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef();

  const navigation = useNavigation()

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });


useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex(prevIndex => {
      const nextIndex = (prevIndex + 1) % data.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex });
      return nextIndex;
    });
  }, 3000); // Change slide every 3 seconds

  return () => clearInterval(interval);
}, []);


  const renderItem = ({ item}) => (
    <View style={styles.card}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Movie', item)}>
            <Image source={{ uri: image500(item.poster_path) }} style={styles.image} />
        </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  card: {
    width,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: width*0.8,
    height: height*0.5,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#aaa',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});

export default Carousel;
