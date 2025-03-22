import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Text,
} from "react-native";
import "nativewind";

const { width } = Dimensions.get("window");

const images = [
  {
    id: "1",
    name: "Pizza",
    prize: "#5000",
    uri: "https://static.vecteezy.com/system/resources/previews/030/660/303/large_2x/pizza-with-white-background-high-quality-ultra-hd-free-photo.jpg",
  },
  {
    id: "2",
    name: "Rice and Beans",
    prize: "#1000 per plate",
    uri: "https://media.istockphoto.com/id/1303029433/photo/brazilian-typical-meal.webp?s=612x612&w=is&k=20&c=E0qkWLQlw3wMwKcxk4i-oDL92yuDGsmivRlub5JaGP0=",
  },
];

const Food = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="flex items-center max-h-[350px]">
      <FlatList
        ref={flatListRef}
        data={images}
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
          <View className="w-screen items-center justify-center">
            <Image
              source={{ uri: item.uri }}
              className="w-[250px] h-[250px] rounded-full"
            />
            <Text className="text-3xl font-bold p-5">
              {item.name} - {item.prize}
            </Text>
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View className="flex-row absolute bottom-5">
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
              className="w-3 h-3 rounded-full bg-black mx-1"
              style={{ opacity }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Food;
