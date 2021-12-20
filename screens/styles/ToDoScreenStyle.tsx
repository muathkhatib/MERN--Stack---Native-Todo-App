/* eslint-disable import/namespace */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth:0.5,
    width: "100%",
    padding:4,
    marginBottom:20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  flatList:{
    width: "100%",
  }
});

export default styles;
