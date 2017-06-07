import request from 'superagent'

export const receiveWords = (words) => {
  return {
    type: 'RECEIVE_WORDS',
    words
  }
}

export function getWords () {
  return (dispatch) => {
    request
      .get(`/api/words`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveWords(res.body))
      })
  }
}
