// CarouselComponent.js
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Image, ViewToken, TouchableWithoutFeedback } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', title: 'Slide 1', image: 'https://metropolisjapan.com/wp-content/uploads/2023/05/r2J02Z2OpNTctfOSN1Ydgii51I3-scaled.jpg' },
  { id: '2', title: 'Slide 2', image: 'https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1734647897/Events/2025/1979/HPpS_1000x1480.jpg.jpg' },
  { id: '3', title: 'Slide 3', image: 'https://th.bing.com/th/id/OIP.k9NvyyZrTH-TfdZxMFRklAHaKj?rs=1&pid=ImgDetMain' },
];

const Carousel = () => {
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
            <Image source={{ uri: item.image }} style={styles.image} />
        </TouchableWithoutFeedback>
      <Text style={styles.title}>{item.title}</Text>
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
    marginTop: 20,
  },
  card: {
    width,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '90%',
    height: 430,
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
