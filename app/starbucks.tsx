import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import Food from "@/components/chickiniFood/Food";
import Food2 from "@/components/chickiniFood/food2";
import Food3 from "@/components/chickiniFood/food3";
import Food4 from "@/components/chickiniFood/food4";
const Starbucks = () => {
  const router = useRouter();
  const [cart, setcart] = useState(0);
  const [money, setmoney] = useState(0);
  const add = () => {
    setcart(cart + 1);
    setmoney(money + 10000);
  };
  const minus = () => {
    setcart(cart - 1);
    setmoney(money - 10000);
  };

  return (
    <>
      <View className="flex-1 bg-gray-200/20">
        <View className="flex flex-col items-center w-full h-full gap-8">
          <View className="flex flex-row px-10 w-full pb-10 rounded-xl pt-6 items-center justify-between">
            <View className="flex flex-row items-center justify-center gap-8">
              <TouchableOpacity onPress={() => router.push("/")}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View className=" flex flex-row items-center space-x-2 px-6 py-2 bg-gray-500/20 rounded-full uppercase  text-gray-700 text-center">
                <TouchableOpacity>
                  <Text className="ml-2 text-2xl font-bold">STARBUCKS</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <View className="flex flex-row items-center gap-8">
              <TouchableOpacity>
                <AntDesign name="menufold" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Food4 />
          </View>
          <View className="flex flex-row w-[200px]  items-center justify-between bg-white shadow-md px-10 py-4 rounded-full">
            <TouchableOpacity onPress={minus}>
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-3xl font-bold">{cart}</Text>
            <TouchableOpacity onPress={add}>
              <FontAwesome6 name="add" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Text className="text-xl text-gray-600">
            We offer Cheap Meals , get Pizza , Rice and Beans and Chicken lap
          </Text>
        </View>
      </View>
      <View className="flex w-full h-[300px] bg-white rounded-t-[40px] shadow-md p-10">
        <View className="flex flex-col items-center  w-full h-full">
          <View className="flex flex-row w-full items-center justify-between border-b border-gray-300 py-10">
            <Text className="text-2xl font-bold">4 Items in Cart</Text>

            <Text className="text-2xl font-bold">#{money}</Text>
          </View>
          <View className="flex flex-row w-full items-center justify-between mt-2  py-10">
            <View className="flex flex-row items-center justify-center ">
              <Entypo name="location-pin" size={35} color="black" />
              <Text className="text-2xl font-bold">SouthGate</Text>
            </View>

            <View className="flex flex-row items-center justify-center ">
              <AntDesign name="creditcard" size={35} color="black" />
              <Text className="text-2xl ml-4 font-bold">******</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/placed/chikiniPlaced")}
            className="flex flex-row items-center justify-center w-full bg-green-600 rounded-full h-[50px] mx-10"
          >
            <Text className="text-white text-2xl ">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Starbucks;
