import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

type props ={
    placeholder:string
    onPress?:()=> void
}

const Searchbar = ({onPress,placeholder}:props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" resizeMode="center" tintColor="#ab8bff"/>
      <TextInput
      onPress={onPress}
      placeholder={placeholder}
      value=""
      onChange={()=>{}}
      placeholderTextColor={"#a8b5db"}
      />
    </View>
  );
};

export default Searchbar;
