import request from 'superagent'

export const wordDetails = (neutral, bias, notes) => {
  return {
    type: 'WORD_DETAILS',
    neutral,
    bias,
    notes
  }
}

export const hideWords = () => {
  return {
    type: 'HIDE_WORDS'
  }
}

export function getWordDetails () {
  return (dispatch) => {
    request
      .get(`/api/words`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(wordDetails(res.body))
      })
  }
}
