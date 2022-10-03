import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  //  const route = useRoute(); // for nested components without Stack.Screen active
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    const categoryColor = CATEGORIES.find((category) => category.id === catId).color;

    navigation.setOptions({
      title: categoryTitle,
      contentStyle: { backgroundColor: categoryColor },
    });
  }, [catId, navigation]);

  function renderMealItem({ item }) {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };
    function pressMealHandler() {
      navigation.navigate("MealsInside", {
        ingredients: item.ingredients,
        title: item.title,
        steps: item.steps,
        imageUrl: item.imageUrl,
      });
    }
    return <MealItem {...mealItemProps} onPress={pressMealHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
