import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import BgApp from '../images/bg.jpg'
import { styled } from '../styles/styles.global'
const Rank = () => {
  const image = BgApp
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode={'cover'} style={styles.image} />
      <Text style={{ fontSize: 30, color: "#fff", fontWeight: "600" }}>
        Comming Soon!
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    ...styled.mainView,
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
  },
  image: {
    position: "absolute",
    top: "0%",
    left: "0%",
    flex: 1,
    width: "100%",
    height: "100%",
  },
})
export default Rank