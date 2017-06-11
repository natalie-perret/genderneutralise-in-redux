import request from 'superagent'

export const searchWord = (bias) => {
  return {
    type: 'SEARCH_WORD',
    bias
  }
}

export function getBias (bias) {
  return (dispatch) => {
    request
      .get('/api/words' + '/bias?bias=' + bias.bias)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
          dispatch(searchWord(res.body))
        })
    }
}
