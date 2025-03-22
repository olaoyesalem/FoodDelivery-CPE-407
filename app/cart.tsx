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

const Cart = () => {
  const router = useRouter();
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
                  <Text className="ml-2 text-2xl">CART</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <View className="flex flex-row items-center gap-8">
              <TouchableOpacity>
                <AntDesign name="menufold" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <Text>No items found</Text>
        </View>
      </View>
    </>
  );
};

export default Cart;
