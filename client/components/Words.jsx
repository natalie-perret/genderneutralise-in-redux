import React from 'react'
import {connect} from 'react-redux'

import {getWords, hideWords} from '../actions/words'

const renderWord = (word, key) => (
  <p key={key}>{word.bias}</p>
)

const Words = ({words, dispatch}) => (
  <div className='flex-grid'>
    <button onClick={() => dispatch(getWords())}>Dictionary</button>
    {words.map(renderWord)}
    <button onClick={() => dispatch(hideWords())}>Close</button>
  </div>
)

const mapStateToProps = (state) => {
return {words: state.words}

}

export default connect(mapStateToProps)(Words)
