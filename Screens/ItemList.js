import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Axios from "axios";
import colors from "../config/colors";

export default App = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Zw523VarwMz2qosabmIXLUebw58ruUfc"
    )
      .then(({ data }) => {
        console.log("defaultApp -> data", data.books);
        setData(data.results.books);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.header}> New York Times Book List</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => {
              // console.log("index", index)
              return index.toString();
            }}
            renderItem={({ item }) => {
              // console.log("item", item);
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("ListDetails", item)}
                >
                  <View style={styles.item}>
                    <Text style={{ fontWeight: "600" }}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 15,
    textAlign: "center",
  },

  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    fontWeight: "bold",
    backgroundColor: colors.secondory,
  },
});
