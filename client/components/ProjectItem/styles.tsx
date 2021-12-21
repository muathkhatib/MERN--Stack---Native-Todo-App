/* eslint-disable import/namespace */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: "100%",
    marginBottom:16
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5, 
    marginRight: 5,
},
taskDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
},
title: {
    fontSize: 20,
    color:'#242424',
    marginRight: 5,

  },
  time: {
    color: "darkgray",
  },
});

export default styles;
