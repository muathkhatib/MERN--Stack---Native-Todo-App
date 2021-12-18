/* eslint-disable import/namespace */
import { Platform, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import styles from './styles/ModalScreenStyle'


const ModalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />
      
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}


export default ModalScreen;
