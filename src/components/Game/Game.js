import React, { Fragment, useState, useContext } from "react"
import { useDispatch } from "react-redux"
import { Ctx } from "../context/Context"
import { setRankClient } from "../../redux/actions/rank.actions"
import { Button, ImageBackground, StyleSheet, Text } from 'react-native'
import ShowAttempt from "./ShowAttemps"

const Game = () => {
  const dispatch = useDispatch()
  const { initGame, startTheGame, finishTheGame, exitG } = useContext(Ctx)
  const [userPlay, setUserPlay] = useState({
    number: 0,
    attemp: [],
  })
  const [count, setCount] = useState(0)
  const checkCount = () => {
    setCount(count + 1)
  }
  const { number, attemp } = userPlay
  const [userSetting, setUserSetting] = useState({
    user: "",
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
      number: 0,
      attemp: [],
    })
    exitG()
  }
  let num = initGame ? initGame.initNumber : 0
  const startGameHandler = (e) => {
    e.preventDefault()
    startTheGame(user, level)
  }
  const checkResult = (e) => {
    e.preventDefault()
    const arrInitNumber = num.split("")
    const arrYourNumber = userPlay.number.toString().split("")
    //CHECK RETURN FALSE IF INPUT INCORRECT LENGTH OF NUMBER
    if (
      arrYourNumber.length < initGame.level ||
      arrYourNumber.indexOf(".") >= 0 ||
      arrYourNumber.indexOf("e") >= 0
    ) {
      alert("Typing number and Please enter the full sequence of numbers!!!")
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

    setUserPlay({
      ...userPlay,
      attemp: attemp.push({
        id: attemp.length + 1,
        yourNum: number,
        guess: `${red} Reds AND ${blue} Blues`,
      }),
    })
    setUserPlay({ ...userPlay, number: "" })
  }
  return (
    <>
      {initGame.boardStart ? (
        <form className="boardG start-g" onSubmit={startGameHandler}>
          <Text className="input-fill">Your Name</Text>
          <input
            className="user-input"
            type="text"
            name="user"
            value={userSetting.user}
            onChange={handleChangeUser}
          />
          <br />
          <div className="input-fill">Choose a level</div>
          <input
            type="number"
            min="4"
            max="10"
            name="level"
            value={userSetting.level}
            onChange={handleChangeUser}
          />
          <button className="user-submit-setting" type="submit">
            Start
          </button>
          <Formik
            initialValues={userPlay}
            onSubmit={checkResult}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Button onPress={handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>
        </form>
      ) : (
        <Fragment></Fragment>
      )}
      {initGame.start ? (
        <form className="boardG" onSubmit={checkResult}>
          <button type="button" className="btn-start" onClick={resetGame}>
            Restart Game
          </button>
          <input
            type="number"
            value={number}
            pattern="[0-9]"
            onChange={handleControlNumber}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "0000")}
            maxLength="4"
            min="0"
            max="99999999999"
            placeholder="0000"
          />
          <p
            style={{ color: "#e74c3c", marginBottom: "10px", fontWeight: 500 }}
          >
            The number for you is secret!!!
          </p>
          <button type="submit"></button>
        </form>
      ) : (
        <Fragment></Fragment>
      )}

      {initGame.won ? (
        <div className="winner nomr">
          <div className="result-g">
            YOU ARE FINISHED THE GAME WITH {count} GUESS
          </div>
          <button className="btn-start" onClick={resetGame}>
            Restart Game
          </button>
        </div>
      ) : (
        <Fragment></Fragment>
      )}
      {initGame.won ? (
        <p style={{ color: "#e74c3c", marginBottom: "10px", fontWeight: 500 }}>
          The number is {initGame ? initGame.initNumber : 0} !!!
        </p>
      ) : (
        ""
      )}
      <ShowAttempt attemp={attemp} />
    </>
  )
}

export default Game