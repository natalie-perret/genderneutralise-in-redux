import React from 'react'
import {connect} from 'react-redux'
import {getWords, hideWords, searchWord} from '../actions'

const renderWord = (word, key, dispatch) => (
  <ul className='word-list'>
    <li><a onClick={() => dispatch(searchWord(word))} href="#/search" key={key}>{word.bias}</a></li>
  </ul>
)

const Words = ({words, dispatch}) => (
  <div className='flex-grid'>
    {words.map((word, i) => renderWord(word, i, dispatch))}
    <button onClick={() => dispatch(getWords())}>Dictionary</button>
    <button onClick={() => dispatch(hideWords())}>Close</button>
  </div>
)

const mapStateToProps = (state) => {
return {words: state.words}

}

export default connect(mapStateToProps)(Words)
