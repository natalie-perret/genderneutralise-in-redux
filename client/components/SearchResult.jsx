import React from 'react'
import {connect} from 'react-redux'

import {getWordDetails} from '../actions'

function SearchResult ({word}) {
  return(
    <div className="search-result">
      <p id="neutral">{word.neutral}</p>
      <p id="bias">{word.bias}</p>
      <p id="notes">{word.notes}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    word: state.search
  }
}

export default connect(mapStateToProps)(SearchResult)
