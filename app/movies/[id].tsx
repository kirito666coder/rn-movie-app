import { fetchMoviesDetails } from "@/services/api";
import useFatch from "@/services/useFatch";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const MoviesDetails = () => {

  const {id} = useLocalSearchParams();

  const {data:movie,loading} = useFatch(()=>fetchMoviesDetails(id as string))

  console.log(movie,"movie")
  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{
        paddingBottom:80
      }}>
        <View>
          <Image source={{uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}} 
          className="w-full h-[550px]" 
          resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>
          <View className="flex-row text-clip gap-x-1 mt-2">
            <Text className="to-light-200 text-sm ">{movie?.release_date?.split('-')[0]}</Text>
            <Text className="text-light-200 text-sm ">{movie?.runtime}m</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MoviesDetails;
