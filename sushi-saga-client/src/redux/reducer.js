const initialState = {
  sushis: [],
  offset: 1,
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
    default:
      return { ...state }
  }
}
