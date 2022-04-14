import React, { Fragment, useState, useContext } from "react"
import { useDispatch } from "react-redux"
import { Ctx } from "../components/context/Context"
import { setRankClient } from "../redux/actions/rank.actions"
import { Button, ImageBackground, StyleSheet, Text } from 'react-native'
import BgApp from '../images/bg.jpg'
import ShowAttempt from "../components/Game/ShowAttemps"
import Game from "../components/Game/Game"

const GameBoard = ({ navigation }) => {
  const image = BgApp
  return (
    <>
      <ImageBackground source={image} resizeMode={'cover'} style={styles.image} />
      <Game />
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
export default GameBoard
