import { SafeAreaView, Text, StyleSheet, Switch, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default function Toggle({ toggle, setToggle }) {
  const [ip, setIp] = useState('');

  const api = axios.create({ baseURL: 'http://' })

  const sendIp = () => toggle ? api.get(`${ip}/on`) : api.get(`${ip}/off`);

  return (
    <SafeAreaView style={styles.container} >
      <Text style={toggle ? styles.textLight : styles.textDark}>
        {toggle ? "ON" : "OFF"}
      </Text>
      <Switch
        value={toggle}
        style={styles.switch}
        onValueChange={() => [setToggle(!toggle), sendIp()]}
      />
      <Text style={toggle ? styles.textLightTutorial : styles.textDarkTutorial}>
        1. Conecte-se à rede do seu módulo
      </Text>
      <TextInput
        maxLength={15}
        keyboardType='numeric'
        style={!toggle ? styles.textInput : styles.textInputDark}
        placeholder="Type your module IP address"
        placeholderTextColor={!toggle ? "#000" : "#888"}
        value={ip}
        onChangeText={text => setIp(text)}
      />
      <Text style={toggle ? styles.textLightTutorial : styles.textDarkTutorial}>
        {ip}
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
  switch: {
    transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }],
    marginBottom: 10
  },
  textLight:
  {
    fontWeight: 'bold',
    color: "#000",
    padding: 10,
    fontSize: 30
  },
  textDark:
  {
    fontWeight: 'bold',
    color: "#FFF",
    padding: 10,
    fontSize: 30
  },
  textLightTutorial:
  {
    fontWeight: 'bold',
    color: "#000",
    padding: 10,
    fontSize: 15
  },
  textDarkTutorial:
  {
    fontWeight: 'bold',
    color: "#FFF",
    padding: 10,
    fontSize: 15
  },
  textInput:
  {
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    margin: 10,
    width: 340
  },
  textInputDark:
  {
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#333',
    color: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    margin: 10,
    width: 340
  },

});