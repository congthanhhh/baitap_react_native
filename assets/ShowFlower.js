import { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { hoa } from "./assets/hoa.js";
import { Button } from "react-native-web";

export default function ShowFlower({ route }) {
  const { maloai } = route.params;
  const filteredFlowers = hoa.filter((flower) => flower.maloai === maloai);

  return (
    <FlatList
      data={filteredFlowers}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text>{item.tenhoa}</Text>
         <Image source={require("./assets/hoa.jpg")} style={styles.logo} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  itemContainer: {
    marginBottom: 24,
    alignItems: "center",
  },
  logo: {
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#ffe4c4",
    width: 200,
    height: 200,
    marginTop: 0,
    resizeMode: "contain",
  },
  title01: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#cd5c5c",
    marginBottom: 20,
  },
  title02: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 20,
  },
});
