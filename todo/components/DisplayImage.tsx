import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 200,
    resizeMode: "stretch",
    marginTop: StatusBar.currentHeight,
  },
});

export function DisplayImage() {
  return (
    <Image
      source={require("@/assets/images/to-do.png")}
      style={styles.container}
    />
  );
}
