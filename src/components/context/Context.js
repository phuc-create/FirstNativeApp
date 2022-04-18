import React, { createContext, useState } from "react"
export const Ctx = createContext()

const Context = ({ children }) => {
  const [initGame, setInitGame] = useState({
    start: false,
    user: "Anonymouse",
    level: 0,
    initNumber: 0,
    finish: true,
    won: false,
    show: false,
    boardStart: true,
  })

  const startTheGame = (user, level) => {
    let initLevel = parseInt(level) + 2
    let number = Math.random().toString().slice(2, initLevel)
    setInitGame({
      ...initGame,
      start: true,
      level: parseInt(level),
      initNumber: number,
      user: user,
      won: false,
      finish: false,
      show: false,
      boardStart: false,
    })
  }
  const finishTheGame = () => {
    setInitGame({
      ...initGame,
      start: false,
      finish: true,
      won: true,
      show: true,
    })
  }
  const exitG = () => {
    setInitGame({
      ...initGame,
      start: false,
      user: "Anonymouse",
      level: "0",
      initNumber: "0",
      finish: true,
      won: false,
      show: false,
      boardStart: true,
    })
  }
  const data = {
    initGame,
    startTheGame,
    finishTheGame,
    exitG,
  }

  return <Ctx.Provider value={data}>{children}</Ctx.Provider>
}

export default Context
