import { getRank, setRank, getRankByLevel } from "../api/index"
import * as types from "../types"

export const getRankClient = () => async (dispatch) => {
  dispatch({
    type: types.GET_RANK_REQUESTED,
  })
  try {
    const { data } = await getRank()
    dispatch({
      type: types.GET_RANK_SUCCESS,
      payload: data.message,
    })
  } catch (error) {
    dispatch({
      type: types.GET_RANK_ERROR,
      payload: error.response && error.response.data,
    })
  }
}

export const setRankClient = (user, guess, level) => async (dispatch) => {
  dispatch({
    type: types.SET_RANK_REQUESTED,
  })
  try {
    const { data } = await setRank(user, guess, level)
    dispatch({
      type: types.SET_RANK_SUCCESS,
      payload: data.message,
    })
  } catch (error) {
    dispatch({
      type: types.SET_RANK_ERROR,
      payload: error.response && error.response.data,
    })
  }
}

export const getRankClientByLevel = (level) => async (dispatch) => {
  dispatch({
    type: types.SET_RANK_REQUESTED,
  })
  try {
    const { data } = await getRankByLevel(level)
    dispatch({
      type: types.SET_RANK_SUCCESS,
      payload: data.message,
    })
  } catch (error) {
    dispatch({
      type: types.SET_RANK_ERROR,
      payload: error.response && error.response.data,
    })
  }
}
