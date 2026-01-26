import { icons } from "@/constants/icons";
import React from "react";
import { Image, View } from "react-native";

const Searchbar = () => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" resizeMode="center" tintColor="#ab8bff"/>
    </View>
  );
};

export default Searchbar;
