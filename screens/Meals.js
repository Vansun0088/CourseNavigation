import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";

function Meals({ route }) {
  const ingredients = route.params.ingredients;
  const steps = route.params.steps;
  const imageUrl = route.params.imageUrl;

  const ingredientsList = ingredients.map((item, index) => (
    <View style={styles.numberListContainer} key={index}>
      <View style={styles.index}>
        <Text style={styles.ingredientsText}>{index + 1}</Text>
      </View>
      <View style={styles.indexText}>
        <Text style={styles.ingredientsText}>{item}</Text>
      </View>
    </View>
  ));
  const stepsList = steps.map((item, index) => (
    <View style={styles.numberListContainer} key={index}>
      <Text style={styles.stepsText}>{index + 1}.</Text>
      <Text style={styles.stepsText}>{item}</Text>
    </View>
  ));

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <SafeAreaView style={styles.scrollContainer}>
        <ScrollView style={{ padding: 5 }}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Ingredients</Text>
          </View>
          <View style={styles.ingredientsListContainer}>{ingredientsList}</View>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Steps</Text>
          </View>
          <View style={styles.stepsListContainer}>{stepsList}</View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Meals;

const styles = StyleSheet.create({
  numberListContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  index: {
    backgroundColor: "#903333",
    width: 40,
    height: 40,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  ingredientsText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  indexText: {
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#aa5622",
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  headerContainer: {
    width: "100%",
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  ingredientsListContainer: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  stepsText: {
    color: "white",
    fontSize: 17,
  },
  stepsListContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
