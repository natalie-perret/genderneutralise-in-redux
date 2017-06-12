import React from 'react'
import {connect} from 'react-redux'
import {searchWord} from '../actions/search'
import {getWords, hideWords} from '../actions/words'

const renderWord = (word, key, dispatch) => (
  <a onClick={() => dispatch(searchWord(word))} href="#/search" key={key}>{word.bias}</a>
)

const Words = ({words, dispatch}) => (
  <div className='flex-grid'>
    {console.log({words})}
    <button onClick={() => dispatch(getWords())}>Dictionary</button>
    {words.map((word, i) => renderWord(word, i, dispatch))}
    <button onClick={() => dispatch(hideWords())}>Close</button>
  </div>
)

const mapStateToProps = (state) => {
return {words: state.words}

}

export default connect(mapStateToProps)(Words)
