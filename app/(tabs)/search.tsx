import MovieCard from "@/components/MovieCard";
import Searchbar from "@/components/Searchbar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFatch from "@/services/useFatch";
import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const search = () => {

  const {data:movies, loading:moviesLoading,error:moviesError} = useFatch(()=>fetchMovies({
    query:""
  }))
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0 " resizeMode="cover"/>
      <FlatList data={movies} 
      renderItem={({item})=><MovieCard {...item}/>} 
      keyExtractor={(item)=>item.id.toString()}
      numColumns={3}
      columnWrapperStyle={{
        justifyContent:'center',
        gap:16,
        marginVertical:16
      }}
      contentContainerStyle={{paddingBottom:100}}
      ListHeaderComponent={
        <>
        <View className="w-full flex-row justify-center mt-20 items-center">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>
        <View className="my-5">
          <Searchbar placeholder="Search movies..."/>
        </View>

        {
          moviesLoading && (
            <ActivityIndicator size="large" color="#0000ff" className="my-3" />
          )
        }
        {
          moviesError && (
            <Text className="text-red-500 px-5 my-3">
              Error: {moviesError.message}
            </Text>
          )
        }
        {
          !moviesLoading && !moviesError && "SEARCH TERM".trim() && movies?.length > 0 &&
          <Text className="text-xl text-white font-bold">
            Search Results for{" "}
          </Text>
        }
        </>
      }
      />
    </View>
  );
};

export default search;
