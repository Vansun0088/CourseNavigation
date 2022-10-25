import { useContext, useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
//import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import Specifics from "../components/Styles/Specifics";
import { MEALS } from "../data/dummy-data";
//import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { FavoritesContext } from "../store/context/favorites-context";

function MealsDetailsScreen({ route, navigation }) {
  const favouriteMealsCtx = useContext(FavoritesContext);
  //const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  //const dispatch = useDispatch();

  const id = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  const mealIsFavorite = favouriteMealsCtx.ids.includes(id);
  //const mealIsFavorite = favoriteMealIds.ids.includes(id);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favouriteMealsCtx.removeFavorite(id);
      //dispatch(removeFavorite({ id: id }));
    } else {
      favouriteMealsCtx.addFavorite(id);
      //dispatch(addFavorite({ id: id }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

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
