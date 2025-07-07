import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { loaihoa } from "../assets/loaihoa";

export default function Flower() {
  const navigation = useNavigation();
  // Hàm render từng item
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Hoa", { maloai: item.maloai, tenloai: item.tenloai })}>
        <Text style={styles.title02}>{item.tenloai}</Text>
        <Image source={require("../assets/hinhhoa.jpg")} style={styles.logo} />
      </TouchableOpacity>
    </View>

  );
  return (
    <View style={styles.container}>
      <Text style={styles.title01}>Danh mục hoa</Text>
      <FlatList
        data={loaihoa}
        renderItem={renderItem}
        keyExtractor={(item) => item.maloai}
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
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
    textAlign: "center",
    fontWeight: "bold",
    color: "#555",
    marginBottom: 20,
  },
});
