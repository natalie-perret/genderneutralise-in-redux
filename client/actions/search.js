import request from 'superagent'

export const searchWord = (wordData) => {
  return {
    type: 'SEARCH_WORD',
    wordData
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
