import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import shadowItems from "../Styles/shadow";
import Specifics from "../Styles/Specifics";

function MealItem({ id, title, imageUrl, duration, complexity, affordability, isFavorite }) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
      title: title,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
      >
        <View style={styles.underPressableContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <Specifics duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    ...shadowItems,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  underPressableContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
