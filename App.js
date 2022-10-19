import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import Colors from "./constants/Colors";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <DrawerNavigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </DrawerNavigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.darkBrown },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
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
            name="MealDetail"
            component={MealsDetailsScreen}
            options={({ route }) => {
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
