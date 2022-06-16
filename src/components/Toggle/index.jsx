import { SafeAreaView, Text, StyleSheet, Switch } from 'react-native';
import React, { useEffect } from 'react';

//api
import api from '../../services/api';

export default function Toggle({ toggle, setToggle, ip, getData }) {

  useEffect(() => {
    toggle ? api.get('/on') : api.get('/off');
    getData();

  }, [toggle]);

  return (
    <SafeAreaView style={styles.container} >
      <Text style={toggle ? styles.textLight : styles.textDark}>
        {toggle ? "ON" : "OFF"}
      </Text>
      <Switch
        value={toggle}
        style={styles.switch}
        onValueChange={() => setToggle(!toggle)}
      />
      <Text style={toggle ? styles.textLight : styles.textDark}>
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
  }

});