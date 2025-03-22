import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Image, Dimensions, Animated } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  {
    id: "1",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVELvqjGn3zMjSAR8kaS7915ngMwqTZGyk8w&s",
  },
  {
    id: "2",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kf5ctALzZnG2EptRvvBtt2ZL5Sq9VUXHxQ&s",
  },
  {
    id: "3",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IHwe6fmOFjVMdUbJ8GAIaF7Q3GAIUevKbg&s",
  },
  {
    id: "4",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADWh3aFmgnboSlCIE-h9BXs9vuHEf-Z_Drw&s",
  },
];

const Carousel = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        ref={flatListRef}
        data={images}
        className="rounded-md rounded-br-md"
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <Image
            className="rounded-md shadow-md mr-5"
            source={{ uri: item.uri }}
            style={{ width, height: 250, borderRadius: 10 }}
          />
        )}
      />

      {/* Pagination Indicators */}
      <View style={{ flexDirection: "row", position: "absolute", bottom: 10 }}>
        {images.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              width * (index - 1),
              width * index,
              width * (index + 1),
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#000",
                marginHorizontal: 5,
                opacity,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;
