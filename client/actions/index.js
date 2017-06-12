import request from 'superagent'

export const receiveWords = (words) => {
  return {
    type: 'RECEIVE_WORDS',
    words
  }
}

export const hideWords = () => {
  return {
    type: 'HIDE_WORDS'
  }
}

export const searchWord = (wordData) => {
  return {
    type: 'SEARCH_WORD',
    wordData
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

export function getBias (bias) {
  return (dispatch) => {
    request
      .get('/api/words/bias?bias=' + bias)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log(res.body);
          dispatch(searchWord(res.body))
        })
    }
}
