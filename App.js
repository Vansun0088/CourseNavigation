import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import Colors from "./constants/Colors";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: Colors.darkBrown },
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerStyle: { width: "60%", backgroundColor: Colors.darkBrown },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: Colors.darkBrown,
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ size, color }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        {/*<Provider store={store}>*/}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.darkBrown },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
        {/*</Provider>*/}
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#3f2f25",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
});
