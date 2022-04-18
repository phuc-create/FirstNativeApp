import React, { Fragment, useState, useContext } from "react"
import { useDispatch } from "react-redux"
import { Ctx } from "../context/Context"
import { setRankClient } from "../../redux/actions/rank.actions"
import { Button, ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native'
import ShowAttempt from "./ShowAttemps"
import { Formik } from "formik"
import { styled } from '../../styles/styles.global'

const Game = () => {
  const dispatch = useDispatch()
  const { initGame, startTheGame, finishTheGame, exitG } = useContext(Ctx)
  const [userPlay, setUserPlay] = useState({
    number: 0,
    attemp: [],
  })
  console.log(initGame)
  const [count, setCount] = useState(0)
  const checkCount = () => {
    setCount(count + 1)
  }
  const { number, attemp } = userPlay
  const [userSetting, setUserSetting] = useState({
    user: "Anonymouse",
    level: 4,
  })

  const { user, level } = userSetting
  const handleChangeUser = (e) => {
    setUserSetting({ ...userSetting, [e.target.name]: e.target.value })
  }
  const handleControlNumber = (e) => {
    if (e.target.value.length <= initGame.level) {
      setUserPlay({ ...userPlay, number: e.target.value })
    }
  }
  const resetGame = () => {
    setCount(0)
    setUserPlay({
      number: "0",
      attemp: [],
    })
    exitG()
  }
  let num = initGame ? initGame.initNumber : 0
  const startGameHandler = () => {
    // e.preventDefault()
    startTheGame(user, level)
  }
  const checkResult = () => {
    // e.preventDefault()
    const arrInitNumber = (num + "").split("")
    const arrYourNumber = (number || "0").split("") || []
    //CHECK RETURN FALSE IF INPUT INCORRECT LENGTH OF NUMBER
    if (
      arrYourNumber.length < initGame.level ||
      arrYourNumber.indexOf(".") >= 0 ||
      arrYourNumber.indexOf("e") >= 0
    ) {
      alert("Typing number and Please enter the full sequence of numbers!!!")
      // setUserPlay({ ...userPlay, number: "0000" })
      return false
    }
    checkCount()
    //DEFAULT VALUE OF BLUE AND RED POINTS
    let blue = 0
    let red = 0
    //
    //
    //CHECK 1
    if (arrInitNumber.toString() === arrYourNumber.toString()) {
      finishTheGame()
      setUserPlay({ ...userPlay, attemp: [], won: true })
      dispatch(setRankClient(user, count, initGame.level))
      return
    }
    //
    //
    //CHECK 2 --INDEX OF CORRECT --RED POINT
    arrInitNumber.forEach((key, index) => {
      if (arrInitNumber[index] === arrYourNumber[index]) {
        red = red + 1
        arrInitNumber[index] = "X"
        arrYourNumber[index] = "Z"
      }
    })
    //CHECK 3 --INDEX OF DIFFRERENTS --BLUE POINT

    arrInitNumber.forEach(function (key, index) {
      if (arrInitNumber.indexOf(arrYourNumber[index]) >= 0) {
        arrInitNumber[arrInitNumber.indexOf(arrYourNumber[index])] = ""
        blue = blue + 1
      }
    })
    //SET SINGLE GET EVERY TIME YOU GUESS NUMBER

    setUserPlay(prev => ({
      ...prev,
      attemp: [...prev?.attemp, ({
        id: attemp.length + 1,
        yourNum: number,
        guess: `${red} Reds AND ${blue} Blues`,
      })],
      number: ""
    })
    )
    // setUserPlay({ ...userPlay, number: "" })
    console.log(userPlay)
  }
  return (
    <ScrollView>
      <SafeAreaView style={styled.mainView}>
        {initGame.boardStart &&
          <Formik
            initialValues={userSetting}
            onSubmit={(values) => startGameHandler()}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => {
              return (
                <View style={styled.option}>
                  <Text style={styled.normalText}>Your Name</Text>
                  <TextInput
                    style={styled.inputField}
                    value={values.user}
                    placeholder="Your name"
                    onChangeText={handleChange('user')}
                  />
                  <Text>{"\n"}</Text>
                  <Text style={styled.normalText}>Choose a level</Text>
                  <TextInput
                    style={styled.inputField}
                    onChangeText={handleChange('level')}
                    placeholder="Chose a level from 4-10"
                    value={values.level.toString()}
                    keyboardType="numeric"
                  />
                  {/* <Pressable color="#fff" title="Start" onPress={handleSubmit} /> */}
                  <TouchableOpacity style={styled.button} onPress={handleSubmit}>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>Start</Text>
                  </TouchableOpacity>
                </View>
              )
            }
            }
          </Formik>
        }
        {initGame.start ? (
          // <Formik
          //   // enableReinitialize
          //   initialValues={{
          //     number: 0,
          //     attemp: [],
          //   }}
          //   onSubmit={(values, { resetForm }) => {
          //     checkResult(values)
          //     // resetForm({ values: { ...values, number: 0 } })
          //   }}
          //   onReset={resetGame}
          // >
          //   {({ values, handleSubmit, handleChange, handleBlur, handleReset }) => {
          // return (
          <View style={styled.option}>
            <Pressable style={{ ...styled.button, marginTop: 0 }} onPress={resetGame}>
              <Text style={{ textAlign: "center", fontSize: 20 }}>Restart Game</Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <TextInput
              style={styled.inputField}
              // onChangeText={handleChange('number')}
              onChangeText={(text) => setUserPlay({ ...userPlay, number: text })}
              placeholder=""
              value={number.toString() || ''}
              keyboardType="numeric"
              maxLength={level}

            />
            <Text
              style={{ ...styled.normalText, color: "#e74c3c" }}
            >
              The number for you is secret!!!
            </Text>
            <Pressable style={styled.button} onPress={checkResult}>
              <Text style={{ textAlign: "center", fontSize: 20 }}>Check 🚀 </Text>
            </Pressable>
          </View>

          // <form className="boardG" onSubmit={checkResult}>
          //   <button type="button" className="btn-start" onClick={resetGame}>
          //     Restart Game
          //   </button>
          //   <input
          //     type="number"
          //     value={number}
          //     pattern="[0-9]"
          //     onChange={handleControlNumber}
          //     onFocus={(e) => (e.target.placeholder = "")}
          //     onBlur={(e) => (e.target.placeholder = "0000")}
          //     maxLength="4"
          //     min="0"
          //     max="99999999999"
          //     placeholder="0000"
          //   />
          //   <Text
          //     style={{ color: "#e74c3c", marginBottom: "10px", fontWeight: 500 }}
          //   >
          //     The number for you is secret!!!
          //   </Text>
          //   <button type="submit"></button>
          // </form>
        ) : null
        }

        {initGame.won ? (
          <View style={{ ...styled.option }}>
            <Text style={styles.normalText}>
              YOU ARE FINISHED THE GAME WITH {count} GUESS
            </Text>
            <TouchableOpacity style={styled.button} onPress={resetGame}>
              <Text style={{ ...styles.normalText, color: "#000" }}>Restart Game</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
        {initGame.won ? (
          <Text style={{ color: "#e74c3c", margin: 20, fontWeight: "500", fontSize: 24 }}>
            The number is {initGame ? initGame.initNumber : 0} !!!
          </Text>
        ) : null}
        {attemp.length > 0 && (
          <ShowAttempt attemp={attemp} />
        )}
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  normalText: {
    color: "#fff", fontSize: 20, textAlign: "center"
  }
})
export default Game