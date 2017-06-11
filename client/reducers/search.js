function search (state = {}, action) {
  switch (action.type) {
    case 'SEARCH_WORD':
      return action.words
      console.log(action);
    default:
      return state
  }
}

export default search
