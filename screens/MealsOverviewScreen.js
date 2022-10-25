import { useLayoutEffect } from "react";

import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
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

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
