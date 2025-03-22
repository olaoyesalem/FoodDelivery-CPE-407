// tab one screen
import { vars, useColorScheme } from "nativewind";
import {
  Pressable,
  Text,
  View,
  PressableProps,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import Carousel from "@/components/Carousel";
import { useRouter } from "expo-router";

const TabOneScreen = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      <View className="flex flex-col w-full h-full gap-8">
        <View className="flex flex-row px-10 bg-white pb-10 rounded-xl pt-6 items-center justify-between">
          <View className="flex flex-row items-center justify-center gap-8">
            <TouchableOpacity>
              <AntDesign name="setting" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="fast-food-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View className=" flex flex-row items-center space-x-2 px-6 py-2 bg-gray-300/20 rounded-full uppercase  text-gray-700 text-center">
              <TouchableOpacity>
                <MaterialCommunityIcons name="bike" size={24} color="black" />
              </TouchableOpacity>
              <Text className="ml-2 text-2xl font-bold">FOOD DELIVERY</Text>
            </View>
          </TouchableOpacity>

          <View className="flex flex-row items-center gap-8">
            <TouchableOpacity onPress={() => router.push("/cart")}>
              <Feather
                className=""
                name="shopping-cart"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row  items-center justify-between rounded-full bg-gray-300/20 mx-10 p-3">
          <Ionicons name="search-outline" size={24} color="black" />
          <TextInput
            placeholder="Search for Resturants Nearby"
            className=" h-full  "
          />
          <MaterialIcons name="filter-list" size={24} color="black" />
        </View>

        <View className="flex items-center justify-center h-[300px] w-fit rounded-md mx-10  ">
          <Carousel />
        </View>

        <View className="flex flex-col mx-10">
          <View className="flex flex-row items-center justify-between rounded-md shadow-">
            <Text className="text-3xl font-bold">Resturants</Text>
            <View className="flex flex-row items-center">
              <Text className="text-xl">See all</Text>
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </View>
          <Text className="text-xl text-gray-600 ">
            We offer the best food delivery in town
          </Text>
        </View>
        <ScrollView
          className="flex flex-col gap-y-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex items-center justify-center bg-white blur shadow-md rounded-md mx-10 w-fit  max-w-[500px] ">
            <Image
              className="flex w-full h-[200px] rounded-t-md backdrop-filter backdrop-blur-3xl bg-opacity-10"
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
            <View className="w-full px-4">
              <View className="flex flex-col p-4">
                <Text className="text-xl font-bold">Chickini Monie</Text>

                {/* Food categories - now with flex-wrap */}
                <View className="flex flex-row flex-wrap items-center">
                  <Text className="text-base text-gray-600">Burger</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">Chickin Wings</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">Pounded Yam</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">
                    Rice and Beans
                  </Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />
                </View>
              </View>

              {/* Ratings and info section - now with flex-wrap */}
              <View className="flex flex-row flex-wrap items-center p-4">
                {/* Stars section */}
                <View className="flex flex-row items-center mb-2 mr-4">
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="staro"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <Text className="text-gray-600 font-bold text-base">4.0</Text>
                </View>

                {/* Delivery time section */}
                <View className="flex flex-row items-center mb-2 mr-4">
                  <Octicons
                    name="dot-fill"
                    size={12}
                    color="green"
                    className="mr-2"
                  />
                  <FontAwesome6 name="truck-fast" size={18} color="green" />
                  <Text className="text-gray-600 text-base ml-1">20min</Text>
                </View>

                {/* Location section */}
                <View className="flex flex-row items-center mb-2">
                  <Octicons
                    name="dot-fill"
                    size={12}
                    color="green"
                    className="mr-2"
                  />
                  <Ionicons name="location" size={20} color="green" />
                  <Text className="text-gray-600 text-base ml-1">
                    SouthGate
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex items-center justify-center bg-white blur shadow-md rounded-md mx-10 mt-10   ">
            <Image
              className="flex w-full h-[200px] rounded-t-md backdrop-filter backdrop-blur-3xl bg-opacity-10"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXwp1ZGSTGm7lQGUkSW8zaBwP9qAeTnatRw&s",
              }}
            />
            <TouchableOpacity onPress={() => router.push("/simple")}>
              {/* Restaurant name and food categories */}
              <View className="flex flex-col w-full p-4">
                <Text className="text-2xl font-bold">Simple Eateries</Text>

                {/* Food categories with flex-wrap */}
                <View className="flex flex-row flex-wrap items-center mt-1">
                  <Text className="text-base text-gray-600">Burger</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">Chickin Wings</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">Pounded Yam</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">
                    Rice and Beans
                  </Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />
                </View>
              </View>

              {/* Ratings and additional info */}
              <View className="flex flex-row flex-wrap items-center p-4">
                {/* Stars section */}
                <View className="flex flex-row items-center mb-2 mr-4">
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="staro"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="staro"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <Text className="text-gray-600 font-bold text-base">3.8</Text>
                </View>

                {/* Delivery time section */}
                <View className="flex flex-row items-center mb-2 mr-4">
                  <Octicons
                    name="dot-fill"
                    size={12}
                    color="green"
                    className="mr-2"
                  />
                  <FontAwesome6 name="truck-fast" size={18} color="green" />
                  <Text className="text-gray-600 text-base ml-1">30min</Text>
                </View>

                {/* Location section */}
                <View className="flex flex-row items-center mb-2">
                  <Octicons
                    name="dot-fill"
                    size={12}
                    color="green"
                    className="mr-2"
                  />
                  <Ionicons name="location" size={20} color="green" />
                  <Text className="text-gray-600 text-base ml-1">
                    SouthGate
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex items-center justify-center bg-white blur shadow-md rounded-md mx-10 mt-10  ">
            <Image
              className="flex w-full h-[200px] rounded-t-md backdrop-filter backdrop-blur-3xl bg-opacity-10"
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />

            <TouchableOpacity onPress={() => router.push("/chicken")}>
              {/* Restaurant name and food categories */}
              <View className="flex flex-col w-full p-4">
                <Text className="text-2xl font-bold">Chicken Republic</Text>

                {/* Food categories with flex-wrap */}
                <View className="flex flex-row flex-wrap items-center mt-1">
                  <Text className="text-base text-gray-600">Burger</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">Chickin Wings</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">Pounded Yam</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">
                    Rice and Beans
                  </Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />
                </View>
              </View>

              {/* Ratings and additional info */}
              <View className="flex flex-row flex-wrap items-center p-4">
                {/* Stars section */}
                <View className="flex flex-row items-center mb-2 mr-4">
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <Text className="text-gray-600 font-bold text-base">4.8</Text>
                </View>

                {/* Delivery time section */}
                <View className="flex flex-row items-center mb-2 mr-4">
                  <Octicons
                    name="dot-fill"
                    size={12}
                    color="green"
                    className="mr-2"
                  />
                  <FontAwesome6 name="truck-fast" size={18} color="green" />
                  <Text className="text-gray-600 text-base ml-1">60min</Text>
                </View>

                {/* Location section */}
                <View className="flex flex-row items-center mb-2">
                  <Octicons
                    name="dot-fill"
                    size={12}
                    color="green"
                    className="mr-2"
                  />
                  <Ionicons name="location" size={20} color="green" />
                  <Text className="text-gray-600 text-base ml-1">
                    SouthGate
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex items-center justify-center bg-white blur shadow-md rounded-md mx-10  mt-10  mb-10">
            <Image
              className="flex w-full h-[200px] rounded-t-md backdrop-filter backdrop-blur-3xl bg-opacity-10"
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
            <TouchableOpacity onPress={() => router.push("/starbucks")}>
              {/* Restaurant name and food categories */}
              <View className="flex flex-col w-full p-4">
                <Text className="text-2xl font-bold">Star Bucks</Text>

                {/* Food categories with flex-wrap */}
                <View className="flex flex-row flex-wrap items-center mt-1">
                  <Text className="text-base text-gray-600">Burger</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">Chickin Wings</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">Pounded Yam</Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />

                  <Text className="text-base text-gray-600">
                    Rice and Beans
                  </Text>
                  <Octicons
                    name="dot-fill"
                    size={14}
                    color="green"
                    className="mx-1"
                  />
                </View>
              </View>

              {/* Ratings and additional info */}
              <View className="flex flex-row flex-wrap items-center p-4">
                {/* Stars section */}
                <View className="flex flex-row items-center mb-2 mr-4">
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <AntDesign
                    name="star"
                    size={20}
                    color="green"
                    className="mr-1"
                  />
                  <Text className="text-gray-600 font-bold text-base">5.0</Text>
                </View>

                {/* Delivery time section */}
                <View className="flex flex-row items-center mb-2 mr-4">
                  <Octicons
                    name="dot-fill"
                    size={12}
                    color="green"
                    className="mr-2"
                  />
                  <FontAwesome6 name="truck-fast" size={18} color="green" />
                  <Text className="text-gray-600 text-base ml-1">60min</Text>
                </View>

                {/* Location section */}
                <View className="flex flex-row items-center mb-2">
                  <Octicons
                    name="dot-fill"
                    size={12}
                    color="green"
                    className="mr-2"
                  />
                  <Ionicons name="location" size={20} color="green" />
                  <Text className="text-gray-600 text-base ml-1">
                    NorthGate
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TabOneScreen;
