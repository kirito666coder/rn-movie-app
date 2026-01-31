import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

type props ={
    placeholder:string
    onPress?:()=> void
    value?: string
    onChangeText?:(text:string)=>void
}

const Searchbar = ({onPress,placeholder,value,onChangeText}:props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" resizeMode="center" tintColor="#ab8bff"/>
      <TextInput
      onPress={onPress}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={"#a8b5db"}
      style={{
        color:"white"
      }}
      />
    </View>
  );
};

export default Searchbar;
