import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
export default function App() {
  return (
    <ScrollView>
    <View className="flex-1  items-center justify-top  bg-white">
      <View className="bg-indigo-800 mt-7 w-full h-12  items-left px-5 justify-center">
        <View className="items-start">
          <Text className="text-2xl text-white ">
            <Image
              source={{
                uri: "https://reactnative.dev/docs/assets/p_cat2.png",
              }}
              style={{ width: 20, height: 20 }}
            />
            Ganga
          </Text>
        </View>
        <View className="items-end -mt-5">
          <View className="w-7 h-1 rounded-full bg-white"></View>
          <View className="w-7 h-1 rounded-full mt-1 bg-white"></View>
          <View className="w-7 h-1 rounded-full mt-1 bg-white"></View>
        </View>
      </View>
      <View className="rounded-b-2xl shadow-md">
      <Image
              source={{
                uri: "https://images.pexels.com/photos/14392063/pexels-photo-14392063.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              }}
              style={{ width: 500, height: 250  }}
            />
      </View>
      <View className="rounded-b-2xl shadow-md mt-5">
      <Image
              source={{
                uri: "https://images.pexels.com/photos/14392062/pexels-photo-14392062.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              }}
              style={{ width: 500, height: 250  }}
            />
      </View>
      <View className="rounded-b-2xl shadow-md mt-5">
      <Image
              source={{
                uri: "https://images.pexels.com/photos/14392062/pexels-photo-14392062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{ width: 500, height: 250  }}
            />
      </View>
      <View className="rounded-b-2xl shadow-md mt-5">
      <Image
              source={{
                uri: "https://images.pexels.com/photos/14392046/pexels-photo-14392046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{ width: 500, height: 250  }}
            />
      </View>
      <View className="bg-indigo-800 mt-7 w-full h-12  items-left px-5 justify-center">
        <Text className="text-2xl text-white">Footer</Text>
        </View>
    </View>
    
    </ScrollView>
  );
}
