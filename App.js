import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import ListingDetails from "./Screens/ListingDetails";
import ItemList from "./Screens/ItemList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ItemList">
        <Stack.Screen name="ItemList" component={ItemList} />
        <Stack.Screen name="ListDetails" component={ListingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
