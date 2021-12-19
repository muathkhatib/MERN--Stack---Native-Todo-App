/* eslint-disable import/namespace */
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import styles from './styles/NotFoundScreenStyle'


const NotFoundScreen = ({ navigation }: RootStackScreenProps<'NotFound'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NotFoundScreen;