/* eslint-disable import/namespace */

import React, { useState } from "react";

import { Text, View } from "../components/Themed";

import { ProjectItem } from "../components";

import styles from "./styles/ProjectsScreenStyle";
import { FlatList } from "react-native";

const ProjectsScreen = () => {
  const [project, setProiect] = useState([
    {
      id: 1,
      title: "Task One",
      createdAt: "3h",
    },
    {
      id: 2,
      title: "Task Two",
      createdAt: "1w",
    },
    {
      id: 3,
      title: "Task three",
      createdAt: "2d",
    },
  ]);
  return (
    <View style={styles.container}>
      {/* List Of Tasks */}
      <FlatList
        data={project}
        renderItem={({item})=> <ProjectItem project={item} />}
        style={{width: '100%'}}
      />
      
    </View>
  );
};

export default ProjectsScreen;
