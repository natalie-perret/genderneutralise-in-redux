function details (state = {}, action) {
  switch (action.type) {
    case 'WORD_DETAILS':
      return action.neutral
    case 'HIDE_WORDS':
      return state
    default:
      return state
  }
}

export default details
