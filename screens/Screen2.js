import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";


export default function Screen2({navigation, route}) {
  var account = route.params;
  return (
    <View style={styles.container}>
    <StatusBar barStyle={"light-content"} hidden/>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
        <TouchableOpacity
          onPress={()=>{
            navigation.goBack()
          }}
        ><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
          
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              borderRadius: "50%",
              height: 52,
              width: 52,
              backgroundColor: "purple",
            }}
          >
            <Image
              source={require(`../assets/${account.image}`)}
              resizeMode="contain"
              style={{ height: 50, width: 50, borderRadius: "50%" }}
            ></Image>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}
            >
              {" "}
              Hi {route.params?.name}
            </Text>
            <Text style={{ fontSize: 14, color: "#444" }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ position: "absolute", top: 7, left: 20 }}
        />
        <TextInput
          placeholder="Search"
          style={{
            paddingLeft: 30,
            height: 40,
            width: 350,
            borderWidth: 1,
            borderRadius: 3,
          }}
        ></TextInput>
      </View>

      <View style={{ flex: 5, alignItems: "center" }}>
          <ScrollView
            nestedScrollEnabled
          >
            <FlatList
              data={account.todo}
              renderItem={({item})=>{
                return(
              <View
                key={item.id}
               style = {{alignItems:"center",height: 50, width: 350, borderRadius:15, backgroundColor:"#d3d5d9", flexDirection:"row", justifyContent:"space-between", marginTop:10}}>
                    <View style = {{flexDirection:"row", marginLeft:10}}>
                    <AntDesign name="checksquareo" size={24} color="green" />
                    <Text style = {{marginLeft: 5}}>{item}</Text>
                    </View>
                    <View>
                    <AntDesign name="edit" size={24} color="red" 
                      style = {{marginRight: 10}}
                    />
                    </View>
                </View>
            );
              }}
            ></FlatList>
          </ScrollView>
           
        
        {/* {data ? (
          data.map((item) => (
            <View
              key={item.id}
              style={{
                alignItems: "center",
                height: 50,
                width: 350,
                borderRadius: 15,
                backgroundColor: "#d3d5d9",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <AntDesign name="checksquareo" size={24} color="green" />
                <Text style={{ marginLeft: 5 }}>{item.job}</Text>
              </View>
              <View>
                <AntDesign
                  name="edit"
                  size={24}
                  color="red"
                  style={{ marginRight: 10 }}
                />
              </View>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )} */}
      </View>
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("screen3", account)
        }}
      >
      <AntDesign name="pluscircle" size={70} color="aqua" style={{}} />

      </TouchableOpacity>
       
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
