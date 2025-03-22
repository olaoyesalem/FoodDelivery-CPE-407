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
    name: "Chocolate drink",
    prize: "#5000",
    uri: "https://media.istockphoto.com/id/547535302/photo/one-side-of-people-drinking-starbucks-coffee.jpg?s=612x612&w=0&k=20&c=ONfiG4B3Mm5rLJqPi3PsqHR6sPPF02zbl9KDG6pi20k=",
  },
  {
    id: "2",
    name: "Strawberry drink",
    prize: "#6000",
    uri: "https://people.com/thmb/WdAW3qHRNFUQJJaORblu_VF8D1A=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/starbucks-frappuccino-trio_1-1-2000-74b3b47876614aeb84d0e18ba03c6647.jpg",
  },
];

const Food4 = () => {
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

export default Food4;
