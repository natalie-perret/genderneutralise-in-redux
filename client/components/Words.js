import React from 'react'
import {connect} from 'react-redux'

import {getWords} from '../actions/words'

const renderWord = (word, key) => (
  <h1 key={key}>{word.text}</h1>
)

const Words = ({words, dispatch}) => (
  <div>
    <h1>List of words</h1>
    {dispatch(getWords())}
    {words.map(renderWord)}
  </div>
)

const mapStateToProps = (state) => {
return {words: state.words}

}

export default connect(mapStateToProps)(Words)
