import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
// import FastImage from "react-native-fast-image";

function ListingDetails({ route, navigation }) {
  const { title, author, description, book_image } = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: book_image,
        }}
      ></Image>

      <View style={styles.detailscontainer}>
        <AppText style={styles.titlename}>Title :</AppText>
        <AppText style={styles.detailstitle}>{title}</AppText>
        <AppText style={styles.titlename}>Author :</AppText>
        <AppText style={styles.details}>{author}</AppText>
        <AppText style={styles.titlename}>Description :</AppText>
        <AppText style={styles.details}>{description}</AppText>
        <View style={styles.usercontainer}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titlename: {
    color: colors.black,
    fontSize: 20,
  },
  image: {
    marginTop: 10,
    width: "100%",
    height: 220,
  },
  detailscontainer: {
    padding: 20,
  },
  detailstitle: {
    color: colors.secondory,
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 10,
  },
  details: {
    color: colors.secondory,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  usercontainer: {
    marginVertical: 50,
  },
});
export default ListingDetails;
