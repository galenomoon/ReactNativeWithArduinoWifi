import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

//components
import Toggle from './src/components/Toggle';

//axios
import axios from 'axios';

export default function App() {
  const [toggle, setToggle] = useState(false)
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4)
  }

  return (
    <SafeAreaView style={toggle ? styles.containerLight : styles.containerDark} >
      <Toggle toggle={toggle} setToggle={setToggle} ip={ip} getData={() => getData()} />
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