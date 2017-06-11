import React from 'react'
import {connect} from 'react-redux'

import {getBias} from '../actions/search'
import SearchResult from './SearchResult'

const renderSearch = (bias, key) => (
    <div className="search-result">
      <p id="neutral" key={key}>{props.word.neutral}</p>
      <p id="bias" key={key}>{props.word.bias}</p>
      <p id="notes" key={key}>{props.word.notes}</p>
    </div>
  )


const Search = ({bias, dispatch}) => (
      <div className="search-form">
        <p>Looking for the gender neutral equivalent of a gender-biased term? Search here:</p>
        <form className="search-box-wrapper" action="/bias" method="get">
          <p><input type="text" name='bias' placeholder='Enter your word' className="search-box-input" value={dispatch.bias} /></p>
          <p><input type='submit' value='Neutralise!' className="search-box-button" onClick={() => dispatch(getBias(bias))}/></p>
        </form>
        {renderSearch(bias)}
      </div>
    )

const mapStateToProps = (state) => {
  console.log(state);
  return {bias: state.words}
}

export default connect(mapStateToProps)(Search)
