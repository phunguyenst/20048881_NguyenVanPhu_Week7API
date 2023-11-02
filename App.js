import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import screen1 from "./screens/Screen1";
import screen2 from "./screens/Screen2";
import screen3 from "./screens/Screen3"
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
          name="screen1"
          component={screen1}
          // options={({navigation})=>({
          //   headerLeft: ()=>(
          //     <Text>9:41</Text>
          //   ),
          //   headerRight: () => (
           
          //       <FontAwesome5 name="signal" size={24} color="black" />,
          //       <MaterialIcons name="wifi" size={24} color="black" />,
          //       <FontAwesome name="battery" size={24} color="black" />
              
          //   ),
          // })}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="screen2"
          component={screen2}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="screen3"
          component={screen3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
