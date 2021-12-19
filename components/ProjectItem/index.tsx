/* eslint-disable import/namespace */

import React from 'react';
import { Pressable } from 'react-native';
import { View, Text } from '../Themed'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles"

interface ProjectItemProps{
    project: {
        id: number,
        title: string,
        createdAt: string,

    }
}

const ProjectItem = ({project} : ProjectItemProps) => {
  const onPress = () => {
    console.warn('onPress',project.title);
  }
    return (
        <Pressable onPress={onPress} style={styles.root}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="file-outline" size={24} color="gray" />
        </View>
        <View style={styles.taskDetailsContainer}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.time}>{project.createdAt}</Text>
        </View>
      </Pressable>
    )
}

export default ProjectItem
