import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const SimplePlaced = () => {
  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      {/* Top View (Floating Over Map) */}
      <View style={[styles.overlayBox, styles.topBox]} className="rounded-full">
        <View className="flex flex-row w-full items-center gap-4 px-4">
          <Ionicons name="car-sport" size={24} color="black" />
          <Text className="text-2xl font-bold">Futa SouthGate, Akure</Text>
          <View className="flex-1" />
          <Text className="text-2xl font-bold">30mins</Text>
        </View>
      </View>

      {/* Bottom View (Floating Over Map) */}
      <View
        style={[styles.overlayBox, styles.bottomBox]}
        className="rounded-lg"
      >
        <View className="flex flex-col items-center w-full h-full gap-6 py-4">
          <View className="flex flex-row w-full items-center gap-4 px-4">
            <AntDesign name="user" size={24} color="black" />
            <Text className="text-2xl font-bold">Salem Nyaris</Text>
            <View className="flex-1" />
            <View className="flex flex-row items-center">
              <AntDesign name="star" size={24} color="green" />
              <Text className="text-2xl font-bold">4.7</Text>
            </View>
          </View>

          <View className="flex flex-row  w-full items-center gap-4 px-4">
            <TouchableOpacity>
              <Text className="flex  text-2xl items-center font-bold px-10 py-2  bg-green-600 text-white rounded-full">
                Call
              </Text>
            </TouchableOpacity>

            <View className="flex-1" />
            <TouchableOpacity>
              <Text className="text-2xl font-bold px-10 py-2 bg-gray-300/20 text-center rounded-full">
                Message
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  overlayBox: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow effect
  },
  topBox: {
    top: 20, // Adjust the position from the top
  },
  bottomBox: {
    bottom: 20, // Adjust the position from the bottom
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default SimplePlaced;
