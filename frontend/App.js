import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

//components
import Toggle from './src/pages/Toggle';
import VoiceCommand from './src/pages/VoiceCommand';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <SafeAreaView style={toggle ? styles.containerLight : styles.containerDark} >
      <StatusBar style={!toggle ? 'light' : 'dark'} />
      <Toggle toggle={toggle} setToggle={setToggle} />
      <VoiceCommand />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});