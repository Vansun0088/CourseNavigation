import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import Meals from "./screens/Meals";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meals Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //options={({ route, navigation }) => {
            //  const catId = route.params.categoryId;
            //  const catName = route.params.titleId;
            //  const catColor = route.params.backgroundColorId;
            //  return {
            //    title: catName,
            //    contentStyle: { backgroundColor: catColor },
            //  };
            //}}
          />
          <Stack.Screen
            name="MealsInside"
            component={Meals}
            options={({ route, navigation }) => {
              const MealsName = route.params.title;
              return {
                title: MealsName,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
