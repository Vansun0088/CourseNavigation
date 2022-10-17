import { useEffect, useLayoutEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { AsyncStorage } from "react-native";

import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import Specifics from "../components/Styles/Specifics";
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen({ route, navigation }) {
  // const [headerImage, setHeaderImage] = useState(require("../assets/images/whiteStar.png"));
  const [imageColor, setImageColor] = useState("white");

  const id = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === id);

  headerButtonPressHandler = async () => {
    if (selectedMeal.isFavourite === "true") {
      selectedMeal.isFavourite = "false";
      setImageColor("white");
    } else {
      selectedMeal.isFavourite = "true";
      setImageColor("yellow");
    }
    try {
      await AsyncStorage.setItem("id", selectedMeal.isFavourite);
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      if (value !== "true") {
        selectedMeal.isFavourite === "true";
        // value previously stored
      } else if (value !== "false") {
        selectedMeal.isFavourite === "false";
      }
    } catch (e) {
      console.log("error!!");
      // error reading value
    }
  };

  useLayoutEffect(() => {
    if (selectedMeal.isFavourite === "true") {
      setImageColor("yellow");
    } else {
      setImageColor("white");
    }
    getData();
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        /* return (
          <Pressable style={styles.outerHeaderImageContainer} onPress={headerButtonPressHandler}>
            <View style={styles.headerImageContainer}>
              <Image style={styles.headerImage} source={headerImage} />
            </View>
          </Pressable>
        );*/
        return <IconButton icon="star" color={imageColor} onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

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
  outerHeaderImageContainer: {
    padding: 10,
  },
  headerImageContainer: {
    width: 20,
    height: 20,
    padding: 0,
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
