import { SafeAreaView, Text, StyleSheet, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';

//styles
import Icon from 'react-native-vector-icons/Ionicons';

//lib
import * as Speech from 'expo-speech';
// import Voice from '@react-native-voice/voice';

export default function VoiceCommand() {
  const [isListening, setIsListening] = useState(false);
  const [textListened, setTextListened] = useState('');

  const startRecording = async () => setTextListened('')

  const stopRecording = () => {
    setTextListened('eu infelizmente ainda não consigo ouvir você')
    Speech.speak('eu infelizmente ainda não consigo ouvir você')
  }

  return (
    <SafeAreaView style={styles.container} >
      <Icon
        onPress={() => [setIsListening(!isListening), !isListening ? startRecording() : stopRecording()]}
        name={isListening ? "ios-mic" : "mic-off"}
        size={100}
        color={isListening ? "#d11922" : "#666"}
      />
      <Text style={styles.textDark}>
        {!isListening && textListened}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDark: {
    fontWeight: 'bold',
    color: "#FFF",
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }
});