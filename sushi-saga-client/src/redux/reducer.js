const initialState = {
  sushis: [],
  offset: 1,
  initialCash: 100,
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'MORE_SUSHI':
      if (state.offset + 4 >= state.sushis.length) {
        return { ...state, offset: 0 }
      } else {
        return { ...state, offset: state.offset + 4 }
      }

    case 'GET_SUSHIS':
      console.log(action)
      return { ...state, sushis: action.payload }
    case 'EAT_SUSHI':
      console.log(action)
      const newSushis = state.sushis.map((sushi) =>
        sushi.id === action.payload ? { ...sushi, eaten: true } : sushi
      )
      return { ...state, sushis: newSushis }

    default:
      return { ...state }
  }
}
