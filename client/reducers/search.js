function search (state = {}, action) {
  switch (action.type) {
    case 'SEARCH_WORD':
      return action.wordData
    default:
      return state
  }
}

export default search
