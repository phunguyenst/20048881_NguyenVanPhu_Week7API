import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Screen3({route, navigation}) {
  
  var account = route.params;
  const [request, setRequest] = React.useState("")
  
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
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
              Hi {account.name}
            </Text>
            <Text style={{ fontSize: 14, color: "#444" }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
        <View>
            <TouchableOpacity
              onPress={()=>{
                navigation.navigate("screen2")
              }}
            >
                  <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
      
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 26, fontWeight: "600" }}>ADD YOUR JOB</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Ionicons
          name="ios-newspaper-outline"
          size={24}
          color="green"
          style={{
            alignItems: "center",
            position: "absolute",
            top: 10,
            left: 35,
          }}
        />
        <TextInput
          placeholder="input your job"
          value={request}
          onChangeText={setRequest}
          style={{
            height: 43,
            width: 350,
            paddingLeft: 45,
            borderWidth: 1,
            borderRadius: 2,
          }}
        ></TextInput>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            height: 35,
            width: 150,
            alignItems: "center",
            backgroundColor: "#00bdd6",
            
          }}
          onPress={()=>{
            account.todo.push(request)
            fetch(`https://65095ffef6553137159b4db8.mockapi.io/todo/phu/${account.id}`, {
              method:'Put',
              cache:"no-cache",
              body:JSON.stringify(account),
              headers: new Headers({
                'Content-Type' :'application/json'
              })
            })
            .then((x) => x.json())
            .then((data) =>console.log(data))
            navigation.navigate("screen2", account)

          }}
          
        >
          <Text style={{ textAlign: "center", marginTop: 6 }}>
            
            FINISH -&gt;{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 5 }}>
        <Image
          source={require("../assets/Image 95.png")}
          style={{
            height: 200,
            width: 350,
            alignItems: "center",
            margin: "auto",
          }}
          resizeMode="contain"
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
