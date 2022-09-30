import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "./data/dummy-data";

export default function App() {
  let List = () => {
    for (let i = 0; i < CATEGORIES.length; i++) {
      return (
        <View>
          <Text>{CATEGORIES[i].title}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Text>{List()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
