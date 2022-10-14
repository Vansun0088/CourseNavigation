import { useLayoutEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button, Pressable } from "react-native";

import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import Specifics from "../components/Styles/Specifics";
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen({ route, navigation }) {
  const [headerImage, setHeaderImage] = useState(require("../assets/images/whiteStar.png"));

  const id = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === id);

  function headerButtonPressHandler() {
    setHeaderImage(require("../assets/images/goldStar.png"));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <Pressable onPress={headerButtonPressHandler}>
            <View style={styles.headerImageContainer}>
              <Image style={styles.headerImage} source={headerImage} />
            </View>
          </Pressable>
        );
      },
    });
  }, [navigation, headerImage]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Specifics
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients}></List>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  headerImageContainer: {
    width: 20,
    height: 20,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});