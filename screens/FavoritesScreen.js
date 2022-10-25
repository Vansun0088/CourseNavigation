import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import Colors from "../constants/Colors";

function FavoritesScreen({ navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Favorite Meals",
    });
  });

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet((</Text>
        <FontAwesome5 style={styles.smile} name="sad-tear" size={50} color="white" />
        <View style={styles.buttonWrapper}>
          <Pressable
            style={({ pressed }) => [pressed && styles.pressed]}
            android_ripple={{ color: "#ccc" }}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.buttonInnerWrapper}>
              <Text style={[styles.buttonText]}>Start to add</Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  smile: {
    margin: 10,
  },
  buttonInnerWrapper: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: Colors.darkBrown,
    backgroundColor: Colors.lightBrown,
    padding: 10,
    overflow: "hidden",
  },
  buttonWrapper: {
    overflow: "hidden",
    borderRadius: 30,
  },
  pressed: {
    opacity: 0.5,
  },
  buttonText: {
    color: Colors.darkBrown,
    fontSize: 16,
    fontWeight: "bold",
  },
});
