import { API } from '../App.js'

export const moreSushi = () => ({ type: 'MORE_SUSHI' })

export const getSushis = () => {
  console.log(API)
  return (dispatch) =>
    fetch(API)
      .then((res) => res.json())
      .then((sushis) =>
        dispatch({
          type: 'GET_SUSHIS',
          payload: sushis.map((sushi) => ({ ...sushi, eaten: false })),
        })
      )
}

export const eatSushi = (id) => ({ type: 'EAT_SUSHI', payload: id })
