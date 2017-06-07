function words (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_WORDS':
      return [...action.words]
    case 'HIDE_WORDS':
      return []
    default:
      return state
  }
}

export default words
