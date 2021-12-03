import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { eatenSushis, amountSpent } from '../services/sushiServices'

const Table = (props) => {
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className='empty-plate' style={{ top: -7 * index }} />
    })
  }

  return (
    <Fragment>
      <h1 className='remaining'>You have: ${props.money}!</h1>
      <div className='table'>
        <div className='stack'>
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eatenSushis)
          }
        </div>
      </div>
    </Fragment>
  )
}

function mapStateToProps(state) {
  return {
    eatenSushis: eatenSushis(state.sushis),
    money: state.initialCash - amountSpent(state.sushis),
  }
}

export default connect(mapStateToProps)(Table)
