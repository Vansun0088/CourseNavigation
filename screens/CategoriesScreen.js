import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

//function renderCategoryItem (item) {
//  return
//}

function CategoriesScreen() {
  // return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={() =>}></FlatList>;
  return (
    <View>
      <Text>{CATEGORIES[0].id}</Text>
    </View>
  );
}

export default CategoriesScreen;
