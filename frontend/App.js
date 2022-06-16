import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

//pages
import Toggle from './src/pages/Toggle';
// import VoiceCommand from './src/pages/VoiceCommand';

export default function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <SafeAreaView style={toggle ? styles.containerLight : styles.containerDark} >
      <StatusBar style={!toggle ? 'light' : 'dark'} />
      <Toggle toggle={toggle} setToggle={setToggle} />
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